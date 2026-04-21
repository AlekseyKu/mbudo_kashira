'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import AnimatedHead from '../components/animated-head'

const registrationLinks = [
  { name: 'Волейбол', url: 'https://new.dop.mosreg.ru/program/133496-voleibol' },
  { name: 'Плавание', url: 'https://new.dop.mosreg.ru/program/74651-plavanie' },
  { name: 'Спортивная гимнастика', url: 'https://new.dop.mosreg.ru/program/17979-sportivnaya-gimnastika' },
  { name: 'Бокс', url: 'https://new.dop.mosreg.ru/program/17969-boks' },
  { name: 'Самбо', url: 'https://new.dop.mosreg.ru/program/17950-sambo' },
  { name: 'Футбол', url: 'https://new.dop.mosreg.ru/program/17935-futbol' },
  { name: 'Легкая атлетика', url: 'https://new.dop.mosreg.ru/program/17862-legkaya-atletika' },
  { name: 'Лыжные гонки', url: 'https://new.dop.mosreg.ru/program/17851-lyzhnye-gonki' },
  { name: 'Шахматы', url: 'https://new.dop.mosreg.ru/program/15766-shakhmaty' },
]

export default function RegistrationFormPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <section
        className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/sport/сollage.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <AnimatedHead text="РЕГИСТРАЦИОННАЯ ФОРМА" />
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

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-primary-blue dark:text-white text-center">
            Запись в спортивные секции
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {registrationLinks.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-4 text-primary-blue dark:text-white hover:border-primary-blue hover:shadow-md transition-all"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Открыть</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
