'use client'

import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'
import Switcher from '../../components/switcher'
import AnimatedHead from '../../components/animated-head'

export default function PoolSchedulePage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      {/* HEADER */}
      <section
        className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/sport/сollage.webp')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <AnimatedHead text="РАСПИСАНИЕ СЕАНСОВ БАССЕЙНА" />
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-primary-blue dark:text-white">
              Расписание сеансов бассейна ФОК «ОЛИМП»
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              с 01.09.2025 года
            </p>
          </div>

          {/* Таблица расписания */}
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
            <table className="min-w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold min-w-[120px]">
                    Время
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Понедельник
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Вторник
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Среда
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Четверг
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Пятница
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Суббота
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-3 text-center font-semibold">
                    Воскресенье
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    09:00-09:45
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (1 дорожка)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (1 дорожка)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (1 дорожка)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (1 дорожка)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (1 дорожка)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    10:00-10:45
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    11:00-11:45
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Активное долголетие
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Активное долголетие
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Активное долголетие
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    12:00-12:45
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание (2 дорожки),<br />Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium bg-red-50 dark:bg-red-900/20">
                    13:00-14:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center italic text-slate-500 dark:text-slate-400" colSpan={7}>
                    Технический перерыв
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    14:15-15:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (2 дорожки)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание,<br />Тренировка (2 дорожки)
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    15:15-16:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание, тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    16:15-17:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание, тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    17:15-18:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    18:15-19:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    19:15-20:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Тренировка
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-center font-medium">
                    20:15-21:00
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">
                    Свободное плавание
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Примечания */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-4">
              Примечания:
            </h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-accent-red mr-2">*</span>
                <span>Вход в здание бассейна осуществляется за 15 минут до начала сеанса</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-red mr-2">**</span>
                <span>Вход в раздевалки осуществляется за 10 минут до начала сеанса</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-red mr-2">***</span>
                <span>13:00-14:00 Технический перерыв</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}



