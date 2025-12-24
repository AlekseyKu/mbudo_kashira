'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface AccessibilitySettings {
  magnifier: boolean
  highContrast: boolean
  simplified: boolean
  noAnimations: boolean
  increasedSpacing: boolean
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void
  resetSettings: () => void
  isPanelOpen: boolean
  setIsPanelOpen: (open: boolean) => void
}

const defaultSettings: AccessibilitySettings = {
  magnifier: false,
  highContrast: false,
  simplified: false,
  noAnimations: false,
  increasedSpacing: false,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const applySettings = (currentSettings: AccessibilitySettings) => {
    if (typeof document === 'undefined') return
    
    const html = document.documentElement

    // Высокий контраст
    if (currentSettings.highContrast) {
      html.classList.add('high-contrast')
    } else {
      html.classList.remove('high-contrast')
    }

    // Упрощенная версия
    if (currentSettings.simplified) {
      html.classList.add('simplified')
    } else {
      html.classList.remove('simplified')
    }

    // Отключение анимаций
    if (currentSettings.noAnimations) {
      html.classList.add('no-animations')
    } else {
      html.classList.remove('no-animations')
    }

    // Увеличенные отступы
    if (currentSettings.increasedSpacing) {
      html.classList.add('increased-spacing')
    } else {
      html.classList.remove('increased-spacing')
    }
  }

  // Загрузка настроек из localStorage при монтировании
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings')
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          const loadedSettings = { ...defaultSettings, ...parsed }
          setSettings(loadedSettings)
          // Применяем настройки сразу после загрузки
          applySettings(loadedSettings)
        } catch (e) {
          console.error('Error loading accessibility settings:', e)
        }
      } else {
        // Применяем дефолтные настройки при первом запуске
        applySettings(defaultSettings)
      }
    }
  }, [])

  // Сохранение настроек в localStorage и применение при изменении
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessibility-settings', JSON.stringify(settings))
      applySettings(settings)
    }
  }, [settings])

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        isPanelOpen,
        setIsPanelOpen,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}

