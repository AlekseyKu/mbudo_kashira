'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish()
    }, 1500)
    return () => clearTimeout(timeout)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ filter: 'brightness(100%) grayscale(100%)' }}
        animate={{ filter: 'brightness(100%) grayscale(0%)' }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/images/logo_main_min.png"
          width={200}
          height={200}
          alt="Логотип Кашира"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
