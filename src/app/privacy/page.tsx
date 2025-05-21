// src/app/privacy/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      {/* HERO */}
      <section
        className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/sport/сollages-2.webp')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative text-center">
          <motion.h1
            className="md:text-3xl text-2xl font-semibold text-white mt-10 mb-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Политика конфиденциальности
          </motion.h1>
        </div>
      </section>

      {/* SHAPE */}
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* POLICY CONTENT */}
      <main className="bg-gray-50 dark:bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-slate-700 dark:text-slate-300">
          <motion.h2
            className="text-2xl font-bold text-primary-blue dark:text-white text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            1. Общие положения
          </motion.h2>
          <p>
            Настоящая политика конфиденциальности (далее – Политика) определяет порядок обработки и защиты персональных данных физических лиц (далее – Пользователи), собираемых при
            использовании официального сайта Муниципального бюджетного учреждения дополнительного образования «Спортивная школа «Кашира» (далее – Сайт).
          </p>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              2. Основные термины
            </motion.h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Персональные данные</strong> – любая информация, относящаяся к прямо или косвенно определенному физическому лицу.</li>
              <li><strong>Обработка</strong> – любое действие с персональными данными (сбор, хранение, использование, передача и т.д.).</li>
              <li><strong>Оператор</strong> – муниципальное учреждение, ответственное за обработку данных.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              3. Порядок сбора и использования данных
            </motion.h3>
            <p>
              Оператор может собирать следующие категории данных: фамилия, имя, отчество, контактный телефон, адрес электронной почты, IP-адрес, а также иные сведения,
              предоставленные Пользователем через формы обратной связи или иные сервисы Сайта.
            </p>
            <p>
              Цели обработки: обеспечение функционирования сайта, связь с Пользователем, информирование о мероприятиях, выполнение обязанностей по законодательству РФ
              (ФЗ-152 «О персональных данных» от 27.07.2006).
            </p>
          </section>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              4. Правовые основания обработки
            </motion.h3>
            <p>
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Согласия Пользователя на обработку персональных данных;</li>
              <li>Федерального закона №152-ФЗ «О персональных данных»;</li>
              <li>Других нормативных актов Российской Федерации.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              5. Передача данных третьим лицам
            </motion.h3>
            <p>
              Оператор может передавать данные сторонним сервисам (например, почтовым службам, аналитике) исключительно для целей, указанных в пункте 3.
              В случае передачи данных будут приняты меры для обеспечения соответствующего уровня защиты.
            </p>
          </section>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              6. Права и обязанности пользователя
            </motion.h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Запрашивать информацию об обработке своих данных;</li>
              <li>Требовать уточнения, блокирования или удаления данных;</li>
              <li>Отзыв согласия на обработку данных;</li>
              <li>Обращаться в уполномоченные органы по защите прав субъектов данных.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              7. Изменение политики конфиденциальности
            </motion.h3>
            <p>
              Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия публикуется на сайте и вступает в силу с момента публикации.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
