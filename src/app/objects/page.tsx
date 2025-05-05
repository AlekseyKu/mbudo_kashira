// src\app\contact\page.tsx
'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from "framer-motion"

import Script from 'next/script'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import AnimatedHead from "../components/animated-head";


const locations = [
  // Формат координат: [долгота, широта]
  { id: 1, name: 'ФОК "Олимп"', coords: [38.189717, 54.842417], address: 'г. Кашира, ул. Металлургов д. 7 стр. 2' },
  { id: 2, name: 'Стадион "Спартак"', coords: [38.158904, 54.835062], address: 'г. Кашира, ул. Карла Маркса д. 29' },
  { id: 3, name: 'Стадион "Локомотив"', coords: [38.190483, 54.853142], address: 'г. Кашира, ул. Интернациональная' }, // Уточнить адрес
  { id: 4, name: 'Спортзал "Юность"', coords: [38.241861, 54.847511], address: 'г. Кашира, ул. Новокаширская д.4' },
  { id: 5, name: 'Шахматный клуб', coords: [38.241228, 54.843771], address: 'г. Кашира, ул. 8 марта д. 35а' },
]

export default function ContactsPage() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [selected, setSelected] = useState(locations[0])

  // Флаг загрузки карты
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  // Функция для создания/обновления маркеров
  const updateMarkers = useCallback(() => {
    if (!mapInstance.current || !window.ymaps3) return

    const { YMapMarker } = window.ymaps3

    // Очищаем существующие маркеры
    markersRef.current.forEach(marker => mapInstance.current.removeChild(marker))
    markersRef.current = []

    // Создаем новые маркеры
    locations.forEach(loc => {
      const isSelected = loc.id === selected.id
      const content = document.createElement('div')
      content.innerHTML = `
        <div class="marker" style="
          padding: 6px 12px;
          background: ${isSelected ? '#dc2626' : '#ffffff'};
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: ${isSelected ? '#ffffff' : '#1f2937'};
          border: 2px solid ${isSelected ? '#ffffff' : '#e5e7eb'};
          box-shadow: ${isSelected ? '0 4px 12px rgba(220, 38, 38, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
          transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};
          transition: all 0.2s ease;
          text-align: center;
        ">
          ${loc.name}
        </div>
      `

      const marker = new YMapMarker({ coordinates: loc.coords }, content)
      mapInstance.current.addChild(marker)
      markersRef.current.push(marker)
    })
  }, [selected])

  // Запускаем перемещение к новой локации
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setLocation({
        center: selected.coords, // [долгота, широта]
        zoom: 15,
        duration: 600,
      })
      updateMarkers()
    }
  }, [selected, updateMarkers])

  // Инициализация карты после загрузки скрипта
  const handleMapScriptLoad = async () => {
    if (!window.ymaps3 || mapInstance.current) return

    await window.ymaps3.ready
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = window.ymaps3

    const map = new YMap(mapRef.current!, {
      location: {
        center: selected.coords,
        zoom: 14,
      },
      // behaviors: ['drag', 'pinchZoom'], // Отключаем scrollZoom
    })
    mapInstance.current = map
    map.addChild(new YMapDefaultSchemeLayer())
    map.addChild(new YMapDefaultFeaturesLayer())


    updateMarkers()
    setIsMapLoaded(true)
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 2,
        ease: [0.25, 1, 0.5, 1] // ultra-smooth ease-out

      }
    })
  }

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
        strategy="afterInteractive"
        referrerPolicy="origin"
        onLoad={handleMapScriptLoad}
        // strategy="beforeInteractive"
      />

      <Navbar navlight={true} tagline={false} />

      <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/collages-4.webp')`}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
                <AnimatedHead text="НАШИ ОБЪЕКТЫ" />
            </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="w-full h-full relative">
                {/* Оверлей с текстом пока карта не готова */}
                {!isMapLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90">
                    <span className="text-lg font-medium">Карта загружается…</span>
                  </div>
                )}
                <div ref={mapRef} className="w-full h-full" />
                </div>
              </div>
            </div>
          <div className="lg:col-span-1">
            {/* <h2 className="text-2xl font-bold text-center text-primary-blue dark:text-white mb-6">Наши объекты</h2> */}
            <div className="space-y-4">

              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  onClick={() => setSelected(loc)}
                  className={`p-4 rounded-xl cursor-pointer shadow-md dark:shadow-slate-600 hover:shadow-lg ${
                    selected.id === loc.id
                      ? 'bg-primary-blue/10 border-l-4 text-accent-red border-accent-red'
                      : 'bg-white dark:bg-slate-800'
                  }`}
                >
                  <h4 className="text-lg font-semibold border-primary-blue">{loc.name}</h4>
                  <p className="text-slate-500 text-sm mt-1">{loc.address}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
