// src/components/cookie-consent/CookieConsent.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// задержка перед показом (в секундах)
const APPEAR_DELAY = 5

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setVisible(true), APPEAR_DELAY * 1000)
    }
  }, [])

  // не показывать на странице политики
  if (pathname === '/privacy' || pathname === '/privacy/') {
    return null
  }

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut', delay: APPEAR_DELAY } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="bg-white dark:bg-slate-900 p-6 rounded-t-xl max-w-5xl w-full mx-4 shadow-lg flex flex-col md:flex-row items-center text-left"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut', delay: APPEAR_DELAY } }}
            exit={{ y: 200, opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-primary-blue dark:text-white mb-2">
                Использование файлов cookie
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                🔒 Мы заботимся о вашей конфиденциальности и используем файлы cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с нашей{' '}
                <Link href="/privacy" className="text-primary-blue hover:underline">
                  Политикой конфиденциальности
                </Link>.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-4">
              <Link
                href="/privacy"
                className="px-4 py-2 border border-primary-blue text-primary-blue rounded-md hover:bg-primary-blue hover:text-white transition"
              >
                Подробнее
              </Link>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-dark transition"
              >
                Принять
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
