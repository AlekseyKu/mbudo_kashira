'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'
import Switcher from '../../components/switcher'
import AnimatedHead from '../../components/animated-head'

export default function PaidServicesPage() {
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
            <AnimatedHead text="ПЛАТНЫЕ УСЛУГИ" />
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
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-primary-blue dark:text-white">
              Тарифы на платные услуги (работы)
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Актуальный прейскурант на платные услуги МБУДО «Спортивная школа «КАШИРА» на 2025/2026 год.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl">
              Ниже представлена текстовая версия тарифов. Вы также можете скачать официальный документ в формате PDF.
            </p>
            <Link
              href="/doc/платные услуги.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary-blue text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Скачать тарифы (PDF)
            </Link>
          </div>

          {/* Таблица тарифов (укрупнённая структура из документа) */}
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
            <table className="min-w-full text-[11px] md:text-xs lg:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left w-12">№ п/п</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left">
                    Наименование работ (услуг)
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left whitespace-nowrap">
                    Единица измерения
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-right whitespace-nowrap">
                    Стоимость (руб.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 1. Занятия в тренажёрном зале */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    1. Занятия в тренажёрном зале
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.2</td>
                  <td className="border px-2 py-1">
                    абонемент на 2 месяца (с 15:00 до 22:00)
                  </td>
                  <td className="border px-2 py-1">12 занятий</td>
                  <td className="border px-2 py-1 text-right">2 000,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.3</td>
                  <td className="border px-2 py-1">
                    абонемент на 2 месяца (с 8:00 до 15:00)
                  </td>
                  <td className="border px-2 py-1">12 занятий</td>
                  <td className="border px-2 py-1 text-right">1 800,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.4</td>
                  <td className="border px-2 py-1">
                    абонемент без ограничения количества посещений
                  </td>
                  <td className="border px-2 py-1">1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 000,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.5</td>
                  <td className="border px-2 py-1">
                    абонемент без ограничения количества посещений
                  </td>
                  <td className="border px-2 py-1">6 месяцев</td>
                  <td className="border px-2 py-1 text-right">9 000,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1.6</td>
                  <td className="border px-2 py-1">
                    абонемент без ограничения количества посещений
                  </td>
                  <td className="border px-2 py-1">12 месяцев</td>
                  <td className="border px-2 py-1 text-right">16 000,00</td>
                </tr>

                {/* 2. Шахматы */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    2. Шахматы
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2.2</td>
                  <td className="border px-2 py-1">
                    занятие в спортивно-оздоровительной группе
                  </td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>

                {/* 3. Спортивная гимнастика */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    3. Спортивная гимнастика
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">3.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">3.2</td>
                  <td className="border px-2 py-1">
                    занятие в спортивно-оздоровительной группе
                  </td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>

                {/* 4. Футбол, баскетбол, волейбол */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    4. Футбол, баскетбол, волейбол
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4.2</td>
                  <td className="border px-2 py-1">
                    занятие в спортивно-оздоровительной группе
                  </td>
                  <td className="border px-2 py-1">1 занятие (1 час)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>

                {/* 5. Прокат спортивного инвентаря */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    5. Прокат спортивного инвентаря
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.1</td>
                  <td className="border px-2 py-1">
                    инвентарь для бассейна (доска, шапочка, нарукавники, очки, пояс-жилет, ласты, мячи и др.)
                  </td>
                  <td className="border px-2 py-1">1 предмет (комплект) в 1 час</td>
                  <td className="border px-2 py-1 text-right">150,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.2</td>
                  <td className="border px-2 py-1">
                    нудл, гантели, мячи, конусы пластиковые, фишки
                  </td>
                  <td className="border px-2 py-1">1 час</td>
                  <td className="border px-2 py-1 text-right">150,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.3</td>
                  <td className="border px-2 py-1">
                    ворота футбольные, ворота хоккейные
                  </td>
                  <td className="border px-2 py-1">1 час</td>
                  <td className="border px-2 py-1 text-right">300,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.4</td>
                  <td className="border px-2 py-1">
                    ворота мини-футбольные
                  </td>
                  <td className="border px-2 py-1">1 час</td>
                  <td className="border px-2 py-1 text-right">200,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.5</td>
                  <td className="border px-2 py-1">
                    сетка волейбольная, сетка теннисная
                  </td>
                  <td className="border px-2 py-1">1 час</td>
                  <td className="border px-2 py-1 text-right">200,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">5.6</td>
                  <td className="border px-2 py-1">
                    коньки
                  </td>
                  <td className="border px-2 py-1">1 час</td>
                  <td className="border px-2 py-1 text-right">100,00</td>
                </tr>

                {/* 6. Предоставление в пользование площадей */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    6. Предоставление в пользование площадей
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">6.1</td>
                  <td className="border px-2 py-1">на спортивных площадках</td>
                  <td className="border px-2 py-1">1 кв.м./1 час</td>
                  <td className="border px-2 py-1 text-right">1,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">6.2</td>
                  <td className="border px-2 py-1">
                    на футбольных полях с натуральным покрытием
                  </td>
                  <td className="border px-2 py-1">1 кв.м./1 час</td>
                  <td className="border px-2 py-1 text-right">1,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">6.3</td>
                  <td className="border px-2 py-1">
                    в помещениях спортивной школы
                  </td>
                  <td className="border px-2 py-1">1 кв.м./1 час</td>
                  <td className="border px-2 py-1 text-right">4,00</td>
                </tr>

                {/* 7. Бассейн */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    7. Бассейн
                  </td>
                </tr>
                {/* 7.1 Взрослые */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.1 Взрослые
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.1.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">350,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.1.2</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">1 300,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.1.3</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">2 400,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.1.4</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">12 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 500,00</td>
                </tr>
                {/* 7.2 Дети */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.2 Дети
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.2.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">200,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.2.2</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">720,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.2.3</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">1 360,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.2.4</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">12 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">1 800,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.2.5</td>
                  <td className="border px-2 py-1">
                    занятие в спортивно-оздоровительной группе
                  </td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">250,00</td>
                </tr>
                {/* 7.3 Индивидуальное занятие */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.3 Индивидуальное занятие с инструктором
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.3.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">750,00</td>
                </tr>
                {/* 7.4 Групповое занятие */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.4 Групповое занятие с инструктором (группа до 6 человек)
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.4.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">600,00</td>
                </tr>
                {/* 7.5 Семейное посещение */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.5 Семейное посещение (**)
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.1</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 1 ребёнок)</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">550,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.2</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 1 ребёнок)</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">2 000,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.3</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 1 ребёнок)</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 600,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.4</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 2 ребёнка)</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">750,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.5</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 2 ребёнка)</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">2 400,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.6</td>
                  <td className="border px-2 py-1">абонемент (1 взрослый + 2 ребёнка)</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">4 400,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.7</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 1 ребёнок)</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">850,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.8</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 1 ребёнок)</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 200,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.9</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 1 ребёнок)</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">5 600,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.10</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 2 ребёнка)</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">1 000,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.11</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 2 ребёнка)</td>
                  <td className="border px-2 py-1">4 занятия на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 600,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.5.12</td>
                  <td className="border px-2 py-1">абонемент (2 взрослых + 2 ребёнка)</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">6 100,00</td>
                </tr>
                {/* 7.6 Аквааэробика */}
                <tr className="bg-slate-100 dark:bg-slate-700/50">
                  <td className="border px-2 py-1 font-medium" colSpan={4}>
                    7.6 Аквааэробика
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.6.1</td>
                  <td className="border px-2 py-1">разовое посещение</td>
                  <td className="border px-2 py-1">1 занятие (45 минут)</td>
                  <td className="border px-2 py-1 text-right">400,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.6.2</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">8 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">2 800,00</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">7.6.3</td>
                  <td className="border px-2 py-1">абонемент</td>
                  <td className="border px-2 py-1">12 занятий на 1 месяц</td>
                  <td className="border px-2 py-1 text-right">3 900,00</td>
                </tr>

                {/* 8–9 Прочее */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    8. Стартовый взнос на участие в соревнованиях
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">8.1</td>
                  <td className="border px-2 py-1">взнос</td>
                  <td className="border px-2 py-1">разовый</td>
                  <td className="border px-2 py-1 text-right">400,00</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-1 font-semibold" colSpan={4}>
                    9. Возмещение затрат за утрату номера гардероба
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">9.1</td>
                  <td className="border px-2 py-1">утрата номера</td>
                  <td className="border px-2 py-1">1 номерок</td>
                  <td className="border px-2 py-1 text-right">300,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Текстовые примечания (бесплатное посещение и льготы) */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Бесплатное посещение:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Занятия в группе адаптивной физкультуры для детей-инвалидов по расписанию СШ «КАШИРА».
                </li>
                <li>
                  Занятия для детей в спортивных группах СШ «КАШИРА» по расписанию спортивных секций.
                </li>
                <li>
                  Занятия в бассейне для лиц, имеющих звание КМС, МС, МСМК, ЗМС по виду спорта «Плавание».
                </li>
                <li>
                  Занятия в бассейне для лиц, имеющих звание КМС, МС, МСМК, ЗМС по виду спорта «Плавание».
                </li>
                <li>
                  Участники СВО (при наличии паспорта, подтверждения участия в СВО (QR-код), удостоверения ветерана).
                </li>
                <li>
                  Дети участников СВО (до 18 лет) (при наличии документа (QR-код), подтверждающего статус участника СВО и принадлежность к данной категории).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Льгота — 50 %:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Инвалиды.
                </li>
                <li>
                  Пенсионеры по возрасту, участники ВОВ и боевых действий, ликвидаторы последствий аварий на
                  атомных электростанциях.
                </li>
                <li>
                  Многодетные семьи (3 и более детей; льгота распространяется на детей).
                </li>
                <li>
                  Члены семей участников СВО (супруги и дети в возрасте от 18 до 25 лет) (при наличии документа (QR-код), подтверждающего статус участника СВО и принадлежность к данной категории).
                </li>
              </ul>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-2">
              <p>
                <strong>Примечания:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Дополнительные занятия для детей-инвалидов только с сопровождением родителей. Родителям необходимо приобрести абонемент.
                </li>
                <li>
                  Дети до 14 лет посещают бассейн только в сопровождении взрослых.
                </li>
                <li>
                  Доступ в тренажёрный зал с 14 лет.
                </li>
                <li>
                  Семейное посещение (**) — для детей в возрасте от 7 до 14 лет включительно.
                </li>
              </ul>
              <p className="mt-2">
                Подробный перечень категорий граждан, имеющих право на бесплатное посещение и льготы, а также
                дополнительные условия уточняйте у администрации спортивной школы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}

