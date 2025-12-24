'use client'

import React from 'react'
import { useAccessibility } from '../../contexts/accessibility-context'
import { FiX, FiSearch, FiEye, FiLayers, FiZap, FiRotateCcw } from 'react-icons/fi'

export default function AccessibilityPanel() {
  const { settings, updateSettings, resetSettings, isPanelOpen, setIsPanelOpen } = useAccessibility()

  if (!isPanelOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={() => setIsPanelOpen(false)}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[9999] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-primary-blue dark:text-white">
              Версия для слабовидящих
            </h2>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              aria-label="Закрыть панель"
            >
              <FiX className="text-2xl text-slate-600 dark:text-slate-400" />
            </button>
          </div>

          {/* Magnifier */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <FiSearch className="text-xl text-primary-blue dark:text-accent-red" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Лупа
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Увеличение контента в 2 раза при наведении
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.magnifier}
                  onChange={(e) => updateSettings({ magnifier: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 dark:peer-focus:ring-accent-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue dark:peer-checked:bg-accent-red"></div>
              </label>
            </div>
          </div>

          {/* High Contrast */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <FiEye className="text-xl text-primary-blue dark:text-accent-red" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Высокий контраст
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Улучшенная видимость элементов
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 dark:peer-focus:ring-accent-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue dark:peer-checked:bg-accent-red"></div>
              </label>
            </div>
          </div>

          {/* Simplified Version */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <FiLayers className="text-xl text-primary-blue dark:text-accent-red" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Упрощенная версия
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Убрать декоративные элементы
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.simplified}
                  onChange={(e) => updateSettings({ simplified: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 dark:peer-focus:ring-accent-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue dark:peer-checked:bg-accent-red"></div>
              </label>
            </div>
          </div>

          {/* No Animations */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <FiZap className="text-xl text-primary-blue dark:text-accent-red" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Отключить анимации
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Убрать все анимации и переходы
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.noAnimations}
                  onChange={(e) => updateSettings({ noAnimations: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 dark:peer-focus:ring-accent-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue dark:peer-checked:bg-accent-red"></div>
              </label>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetSettings}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            <FiRotateCcw />
            Сбросить настройки
          </button>
        </div>
      </div>
    </>
  )
}

