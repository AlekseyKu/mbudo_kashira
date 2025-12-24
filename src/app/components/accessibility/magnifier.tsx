'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useAccessibility } from '../../contexts/accessibility-context'

export default function Magnifier() {
  const { settings } = useAccessibility()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!settings.magnifier) {
      setIsVisible(false)
      if (typeof document !== 'undefined') {
        document.body.style.cursor = ''
      }
      return
    }

    setIsVisible(true)
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'none'
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX || window.pageXOffset || 0,
        y: window.scrollY || window.pageYOffset || 0,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Устанавливаем начальную позицию скролла
    handleScroll()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (typeof document !== 'undefined') {
        document.body.style.cursor = ''
      }
    }
  }, [settings.magnifier])

  // Клонируем контент body в лупу с учетом скролла
  useEffect(() => {
    if (!isVisible || !contentRef.current || typeof document === 'undefined') return

    const updateContent = () => {
      if (!contentRef.current) return

      try {
        // Находим основной контейнер контента
        const mainContent = document.querySelector('main') || 
                           document.querySelector('#__next') || 
                           document.body

        // Клонируем контент
        const clone = mainContent.cloneNode(true) as HTMLElement
        
        // Удаляем ненужные элементы из клона, но оставляем панель доступности
        const elementsToRemove = clone.querySelectorAll(
          'script, style, [id*="magnifier"], [data-magnifier]'
        )
        elementsToRemove.forEach(el => el.remove())
        
        // Удаляем только кнопку доступности из клона (она не нужна в лупе)
        const accessibilityButton = clone.querySelector('[class*="accessibility-button"], button[aria-label*="слабовидящих"]')
        if (accessibilityButton) {
          accessibilityButton.remove()
        }

        // Также удаляем все элементы с z-index больше 9999, но оставляем панель доступности
        const allElements = clone.querySelectorAll('*')
        allElements.forEach((el) => {
          const htmlEl = el as HTMLElement
          const zIndex = window.getComputedStyle(htmlEl).zIndex
          // Удаляем только лупу (z-index 10000), но оставляем панель доступности (z-index 9999)
          if (zIndex && parseInt(zIndex) >= 10000) {
            el.remove()
          }
          // Также проверяем, не является ли элемент панелью доступности
          if (el.classList.contains('accessibility-panel') || 
              el.getAttribute('data-accessibility-panel') ||
              (htmlEl.textContent && htmlEl.textContent.includes('Версия для слабовидящих'))) {
            // Не удаляем панель доступности
            return
          }
        })

        // Синхронизируем состояние выпадающих меню с оригиналом
        const dropdownMenus = clone.querySelectorAll(
          '.submenu, .dropdown-menu, ul.submenu, [class*="submenu"], [class*="dropdown"]'
        )
        dropdownMenus.forEach((menu) => {
          const htmlMenu = menu as HTMLElement
          
          // Находим соответствующий элемент в оригинале по структуре
          const menuParent = menu.parentElement
          if (menuParent) {
            const parentIndex = Array.from(menuParent.children).indexOf(menu)
            const originalParent = document.querySelector(
              menuParent.className ? `.${menuParent.className.split(' ').filter(c => c).join('.')}` : ''
            )
            
            if (originalParent && originalParent.children[parentIndex]) {
              const originalMenu = originalParent.children[parentIndex] as HTMLElement
              const isOpen = originalMenu.classList.contains('open') || 
                            window.getComputedStyle(originalMenu).display !== 'none' ||
                            originalMenu.style.display !== 'none'
              
              // Синхронизируем состояние
              if (isOpen) {
                htmlMenu.classList.add('open')
                htmlMenu.style.display = ''
              } else {
                htmlMenu.classList.remove('open')
                htmlMenu.style.display = 'none'
              }
            } else {
              // Если не нашли оригинал, скрываем меню
              htmlMenu.style.display = 'none'
            }
          }
        })

        // Очищаем контейнер
        contentRef.current.innerHTML = ''
        
        // Устанавливаем стили для клона
        clone.style.position = 'absolute'
        clone.style.top = '0'
        clone.style.left = '0'
        clone.style.width = `${window.innerWidth}px`
        clone.style.height = 'auto'
        clone.style.margin = '0'
        clone.style.padding = '0'
        clone.style.background = 'inherit'
        
        // Добавляем атрибут, чтобы предотвратить повторное увеличение
        clone.setAttribute('data-magnifier-content', 'true')
        
        // Добавляем клонированный контент
        contentRef.current.appendChild(clone)
      } catch (error) {
        console.error('Error updating magnifier content:', error)
      }
    }

    // Обновляем контент при изменении позиции или скролла
    const timeoutId = setTimeout(updateContent, 50)
    
    // Также обновляем периодически для динамического контента
    // Увеличиваем интервал, чтобы меню не мигало
    const intervalId = setInterval(updateContent, 500)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [isVisible, position, scrollPosition])

  if (!isVisible || !settings.magnifier) return null

  // Размер лупы - 75% высоты экрана (50% увеличение), но не больше 750px и не меньше 450px
  const magnifierSize = Math.min(Math.max(window.innerHeight * 0.75, 450), 750)
  const radius = magnifierSize / 2
  const scale = 2

  // Правильное вычисление смещения с учетом скролла:
  // Нужно учесть, что позиция курсора относительно viewport,
  // а контент может быть прокручен
  // position.y - это позиция курсора относительно viewport
  // scrollPosition.y - это позиция скролла
  // Реальная позиция в документе = position.y + scrollPosition.y
  const realY = position.y + scrollPosition.y
  const realX = position.x + scrollPosition.x

  const offsetX = radius - realX * scale
  const offsetY = radius - realY * scale

  return (
    <>
      {/* Лупа */}
      <div
        className="fixed z-[10000]"
        data-magnifier="true"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${magnifierSize}px`,
          height: `${magnifierSize}px`,
          marginLeft: `-${radius}px`,
          marginTop: `-${radius}px`,
          borderRadius: '50%',
          border: '4px solid #003366',
          boxShadow: '0 0 30px rgba(0, 51, 102, 0.6), inset 0 0 30px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          clipPath: 'circle(50% at 50% 50%)',
          pointerEvents: 'none',
        }}
      >
        {/* Увеличенная область с клонированным контентом */}
        <div
          ref={contentRef}
          className="absolute"
          data-magnifier-content="true"
          style={{
            left: `${offsetX}px`,
            top: `${offsetY}px`,
            width: `${window.innerWidth}px`,
            height: 'auto',
            minHeight: `${window.innerHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Стили для скрытия курсора и предотвращения рекурсивного увеличения */}
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        /* Предотвращаем повторное увеличение в клонированном контенте */
        [data-magnifier-content] [data-magnifier],
        [data-magnifier-content] .magnifier,
        [data-magnifier-content] [id*="magnifier"] {
          display: none !important;
        }
        
        /* Убеждаемся, что навигация доступна для взаимодействия, но не ломаем верстку */
        #topnav {
          z-index: 10001 !important;
        }
        
        #topnav .navigation-menu,
        #topnav .has-submenu,
        #topnav .submenu {
          pointer-events: auto !important;
        }
      `}</style>
    </>
  )
}
