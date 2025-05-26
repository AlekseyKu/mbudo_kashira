'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi'
import { FaVk } from 'react-icons/fa'
import Navbar from '../components/navbar/navbar'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'

export default function ContactsPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      {/* Хедер */}
      <section
        className="relative w-full py-32 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('/images/main/1.webp')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">
              КОНТАКТЫ
            </h3>
          </div>
        </div>
      </section>

      {/* Переход */}
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Контакты */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-10 items-center">
          
          {/* Левая колонка: Контакты */}
          <div>
            <h2 className="text-2xl font-bold text-primary-blue dark:text-white mb-6">
              Контактная информация
            </h2>

            <div className="flex items-start space-x-4 mb-4">
              <FiMapPin className="text-2xl text-accent-red shrink-0 mt-1" />
              <p className="text-slate-700 dark:text-slate-300">
                Московская область, г. Кашира, ул. Металлургов, дом 7, корпус 2
              </p>
            </div>

            <div className="flex items-start space-x-4 mb-4">
              <FiPhoneCall className="text-2xl text-accent-red shrink-0 mt-1" />
              <a
                href="tel:+74966967689"
                className="text-slate-700 dark:text-slate-300 hover:text-accent-red transition"
              >
                8 (496) 696-76-89
              </a>
            </div>

            <div className="flex items-start space-x-4 mb-4">
              <FiMail className="text-2xl text-accent-red shrink-0 mt-1" />
              <a
                href="mailto:dush-kashira@yandex.ru"
                className="text-slate-700 dark:text-slate-300 hover:text-accent-red transition"
              >
                dush-kashira@yandex.ru
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Мы в VK:</p>
              <Link
                href="https://vk.com/club226006575"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-blue dark:text-white hover:text-accent-red dark:hover:text-accent-red transition text-base"
              >
                <FaVk className="text-xl" />
                Перейти в группу
              </Link>
            </div>
          </div>

          {/* Правая колонка: QR-код */}
          <div className="flex flex-col items-center justify-center pt-10">
            {/* <p className="text-sm text-slate-500 mb-3 dark:text-slate-400">Наш QR-код:</p> */}
            <Image
              src="/images/qr/qr-code.webp"
              alt="QR Code"
              width={250}
              height={250}
              className="block dark:hidden rounded-lg shadow-md"
            />
            <Image
              src="/images/qr/qr-code-w.webp"
              alt="QR Code"
              width={250}
              height={250}
              className="hidden dark:block rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>


      {/* Подпись */}
      <footer className="py-6 border-t border-gray-200 dark:border-slate-700 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          2025 © МБУДО Cпортивная школа «Кашира»
        </p>
      </footer>

      <ScrollToTop />
      <Switcher />
    </>
  )
}
