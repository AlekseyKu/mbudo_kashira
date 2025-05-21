// src/components/cookie-popup.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setVisible(true), 500)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 5 }}
        >
          <motion.div
            className="bg-white dark:bg-slate-900 p-6 rounded-t-xl max-w-5xl w-full mx-4 shadow-lg flex flex-col md:flex-row items-center text-left"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut'}}
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
