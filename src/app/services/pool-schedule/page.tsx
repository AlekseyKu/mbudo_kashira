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
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 dark:text-slate-300 text-center">
            Контент будет добавлен позже
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}

