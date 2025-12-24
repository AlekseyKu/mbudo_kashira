'use client'

import React, { useState } from 'react'
import { FiSend, FiMail, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        // Скрыть сообщение об успехе через 5 секунд
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Произошла ошибка при отправке')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Произошла ошибка при отправке. Попробуйте позже.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-primary-blue dark:text-white mb-6">
        Обратная связь
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Заполните форму ниже, и мы свяжемся с вами в ближайшее время
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Имя */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Имя <span className="text-accent-red">*</span>
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="Введите ваше имя"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Email <span className="text-accent-red">*</span>
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Телефон */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Телефон
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        {/* Сообщение */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Сообщение <span className="text-accent-red">*</span>
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-slate-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
              placeholder="Введите ваше сообщение..."
            />
          </div>
        </div>

        {/* Сообщения об успехе/ошибке */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-700 dark:text-green-400">
              ✓ Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400">
              ✗ {errorMessage || 'Произошла ошибка при отправке. Попробуйте позже.'}
            </p>
          </div>
        )}

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Отправка...
            </>
          ) : (
            <>
              <FiSend />
              Отправить сообщение
            </>
          )}
        </button>
      </form>
    </div>
  )
}

