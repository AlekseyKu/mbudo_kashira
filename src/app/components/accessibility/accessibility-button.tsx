'use client'

import React from 'react'
import { useAccessibility } from '../../contexts/accessibility-context'
import { FiEye } from 'react-icons/fi'

export default function AccessibilityButton() {
  const { setIsPanelOpen } = useAccessibility()

  return (
    <button
      onClick={() => setIsPanelOpen(true)}
      className="fixed bottom-6 left-6 z-[9997] bg-primary-blue hover:bg-primary-blue/90 dark:bg-accent-red dark:hover:bg-accent-red/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
      aria-label="Версия для слабовидящих"
      title="Версия для слабовидящих"
    >
      <FiEye className="text-xl" />
      <span className="hidden md:inline-block font-medium group-hover:scale-105 transition-transform">
        Аа
      </span>
    </button>
  )
}

