'use client'

import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'
import Switcher from '../../components/switcher'
import AnimatedHead from '../../components/animated-head'

export default function TrainingSchedulePage() {
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
            <AnimatedHead text="РАСПИСАНИЕ ТРЕНИРОВОК" />
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
              Расписание учебно-тренировочных занятий
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              МБУДО «Спортивная школа «КАШИРА» с 01 ноября 2025 года
            </p>
          </div>

          {/* Таблица расписания */}
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
            <table className="min-w-full text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center w-10">№</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left min-w-[180px]">
                    Тренер-преподаватель
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left min-w-[120px]">
                    Вид спорта
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left min-w-[100px]">
                    Группа
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center w-16">
                    Кол-во часов
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Понедельник
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Вторник
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Среда
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Четверг
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Пятница
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Суббота
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-center min-w-[100px]">
                    Воскресенье
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-2 py-2 text-left min-w-[200px]">
                    Место проведения
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 1. Отделение футбола */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    1. Отделение футбола
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">1</td>
                  <td className="border px-2 py-1">Балабанов Ю.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">2</td>
                  <td className="border px-2 py-1">Балабанов Ю.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">3</td>
                  <td className="border px-2 py-1">Балабанов Ю.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">4</td>
                  <td className="border px-2 py-1">Ермолаева Е.В.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ДС "Юбилейный" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">5</td>
                  <td className="border px-2 py-1">Ермолаева Е.В.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ДС "Юбилейный" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1">Ермолаева Е.В.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ДС "Юбилейный" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">7</td>
                  <td className="border px-2 py-1">Савицкий Д.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа НП-2 (1)</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1">Савицкий Д.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа НП-2 (2)</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">9</td>
                  <td className="border px-2 py-1">Савицкий Д.А.</td>
                  <td className="border px-2 py-1">Футбол</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "СК "Кашира" им. Н.П. Елисеева", Стадион "Спартак"
                  </td>
                </tr>

                {/* 2. Отделение плавания */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    2. Отделение плавания
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">10</td>
                  <td className="border px-2 py-1">Григорьев А.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">9</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">09:00-10:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">11</td>
                  <td className="border px-2 py-1">Григорьев А.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1">Головицын Р.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">9</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">09:30-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">13</td>
                  <td className="border px-2 py-1">Дереза С.Л.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">15:45-17:00</td>
                  <td className="border px-2 py-1 text-center">15:45-17:00</td>
                  <td className="border px-2 py-1 text-center">15:45-17:00</td>
                  <td className="border px-2 py-1 text-center">15:45-17:00</td>
                  <td className="border px-2 py-1 text-center">16:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1">Дереза С.Л.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">09:00-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">15</td>
                  <td className="border px-2 py-1">Жилина Л.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">9</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">16</td>
                  <td className="border px-2 py-1">Жилина Л.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">10:00-13:00</td>
                  <td className="border px-2 py-1 text-center">11:00-14:00</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">17</td>
                  <td className="border px-2 py-1">Жулина Е.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">09:00-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">09:00-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">10:00-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">18</td>
                  <td className="border px-2 py-1">Жулина Е.А.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">19</td>
                  <td className="border px-2 py-1">Марюшкин А.В.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">9</td>
                  <td className="border px-2 py-1 text-center">16:00-17:30</td>
                  <td className="border px-2 py-1 text-center">16:00-17:30</td>
                  <td className="border px-2 py-1 text-center">16:00-17:30</td>
                  <td className="border px-2 py-1 text-center">16:00-17:30</td>
                  <td className="border px-2 py-1 text-center">16:00-17:30</td>
                  <td className="border px-2 py-1 text-center">09:00-10:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">20</td>
                  <td className="border px-2 py-1">Марюшкин А.В.</td>
                  <td className="border px-2 py-1">Плавание</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    ФОК «Олимп» - бассейн, ДС "Юбилейный" - бассейн
                  </td>
                </tr>

                {/* 3. Отделение спортивной гимнастики */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    3. Отделение спортивной гимнастики
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">21</td>
                  <td className="border px-2 py-1">Сафонова Т.Е.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">19:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">19:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">22</td>
                  <td className="border px-2 py-1">Сафонова Т.Е.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">10</td>
                  <td className="border px-2 py-1 text-center">17:00-18:00</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">23</td>
                  <td className="border px-2 py-1">Сафонова Т.Е.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">13:00-14:30</td>
                  <td className="border px-2 py-1 text-center">15:00-18:00</td>
                  <td className="border px-2 py-1 text-center">13:00-14:30</td>
                  <td className="border px-2 py-1 text-center">15:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">24</td>
                  <td className="border px-2 py-1">Сафонова Т.Е.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">11:00-14:00</td>
                  <td className="border px-2 py-1 text-center">12:00-13:00</td>
                  <td className="border px-2 py-1 text-center">12:00-15:00</td>
                  <td className="border px-2 py-1 text-center">12:00-13:00</td>
                  <td className="border px-2 py-1 text-center">12:00-15:00</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">25</td>
                  <td className="border px-2 py-1">Скотникова О.М.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">26</td>
                  <td className="border px-2 py-1">Скотникова О.М.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-19:30</td>
                  <td className="border px-2 py-1 text-center">09:00-11:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">27</td>
                  <td className="border px-2 py-1">Скотникова О.М.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">13:30-15:30</td>
                  <td className="border px-2 py-1 text-center">13:00-15:00</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">28</td>
                  <td className="border px-2 py-1">Скотникова О.М.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">15:30-17:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">29</td>
                  <td className="border px-2 py-1">Шабан О.Н.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">30</td>
                  <td className="border px-2 py-1">Шабан О.Н.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:30-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">10:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">31</td>
                  <td className="border px-2 py-1">Шабан О.Н.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">14</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-18:00</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">12:00-14:30</td>
                  <td className="border px-2 py-1 text-center">13:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">32</td>
                  <td className="border px-2 py-1">Шабан О.Н.</td>
                  <td className="border px-2 py-1">Спортивная гимнастика</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">16</td>
                  <td className="border px-2 py-1 text-center">14:30-18:00</td>
                  <td className="border px-2 py-1 text-center">14:30-18:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:30-17:30</td>
                  <td className="border px-2 py-1 text-center">14:30-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-19:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    СЗ "Юность" - спортивный зал
                  </td>
                </tr>

                {/* 4. Отделение самбо */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    4. Отделение самбо
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">33</td>
                  <td className="border px-2 py-1">Золотарев Н.Н.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-xs">
                    Спортивный зал мкр. Ожерелье г.о. Кашира, стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">34</td>
                  <td className="border px-2 py-1">Золотарев Н.Н.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    Спортивный зал мкр. Ожерелье г.о. Кашира, стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">35</td>
                  <td className="border px-2 py-1">Золотарев Н.Н.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-3</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-14:00</td>
                  <td className="border px-2 py-1 text-xs">
                    Спортивный зал мкр. Ожерелье г.о. Кашира, стадион "Спартак"
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">36</td>
                  <td className="border px-2 py-1">Золотарев Н.Н.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">10</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">14:00-15:00</td>
                  <td className="border px-2 py-1 text-center">14:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">37</td>
                  <td className="border px-2 py-1">Золотарев Н.Н.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа УТ-2</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">15:00-16:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">38</td>
                  <td className="border px-2 py-1">Краило М.И.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">12:00-13:30</td>
                  <td className="border px-2 py-1 text-center">12:00-13:30</td>
                  <td className="border px-2 py-1 text-center">12:00-13:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">12:00-13:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">39</td>
                  <td className="border px-2 py-1">Краило М.И.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-2 (1)</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">16:00-18:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">40</td>
                  <td className="border px-2 py-1">Краило М.И.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа НП-2 (2)</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">41</td>
                  <td className="border px-2 py-1">Краило М.И.</td>
                  <td className="border px-2 py-1">Самбо</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">09:00-12:00</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-center">09:00-12:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивный зал, спортивные площадки
                  </td>
                </tr>

                {/* 5. Отделение легкой атлетики */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    5. Отделение легкой атлетики
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">42</td>
                  <td className="border px-2 py-1">Богданова Е.И.</td>
                  <td className="border px-2 py-1">Лёгкая атлетика</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">14:00-16:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивные залы, стадион
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">43</td>
                  <td className="border px-2 py-1">Богданова Е.И.</td>
                  <td className="border px-2 py-1">Лёгкая атлетика</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">19:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">18:00-19:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спортивные залы, стадион
                  </td>
                </tr>

                {/* 6. Отделение лыжных гонок */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    6. Отделение лыжных гонок
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">44</td>
                  <td className="border px-2 py-1">Кашкин И.В.</td>
                  <td className="border px-2 py-1">Лыжные гонки</td>
                  <td className="border px-2 py-1">Группа НП-1</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">13:00-15:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спорт.площадки, парк д. Каменка - футбольное поле
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">45</td>
                  <td className="border px-2 py-1">Кашкин И.В.</td>
                  <td className="border px-2 py-1">Лыжные гонки</td>
                  <td className="border px-2 py-1">Группа НП-3</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - спорт.площадки, парк д. Каменка - футбольное поле
                  </td>
                </tr>

                {/* 7. Отделение бокса */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    7. Отделение бокса
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">46</td>
                  <td className="border px-2 py-1">Навознов С.Н.</td>
                  <td className="border px-2 py-1">Бокс</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">15:30-17:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:30-17:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:30-17:30</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МАУ "Спортклуб "Кашира" имени Н.П. Елисеева" - зал бокса
                  </td>
                </tr>

                {/* 8. Отделение волейбола */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    8. Отделение волейбола
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">47</td>
                  <td className="border px-2 py-1">Задорожная Я.В.</td>
                  <td className="border px-2 py-1">Волейбол</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">7</td>
                  <td className="border px-2 py-1 text-center">17:00-18:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-18:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-18:00</td>
                  <td className="border px-2 py-1 text-center">10:00-12:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МБОУ "СОШ №9" - спортивный зал, Стадион "Спартак" - спортивный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">48</td>
                  <td className="border px-2 py-1">Задорожная Я.В.</td>
                  <td className="border px-2 py-1">Волейбол</td>
                  <td className="border px-2 py-1">Группа НП-3</td>
                  <td className="border px-2 py-1 text-center">8</td>
                  <td className="border px-2 py-1 text-center">18:30-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:30-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">18:00-20:00</td>
                  <td className="border px-2 py-1 text-center">08:00-10:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    МБОУ "СОШ №9" - спортивный зал, Стадион "Спартак" - спортивный зал
                  </td>
                </tr>

                {/* 9. Отделение шахмат */}
                <tr className="bg-slate-50 dark:bg-slate-800/70">
                  <td className="border px-2 py-2 font-semibold" colSpan={13}>
                    9. Отделение шахмат
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">49</td>
                  <td className="border px-2 py-1">Конотоп С.В.</td>
                  <td className="border px-2 py-1">Шахматы</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-17:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    Помещение ДС "Юбилейный", Библиотека - читальный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">50</td>
                  <td className="border px-2 py-1">Конотоп С.В.</td>
                  <td className="border px-2 py-1">Шахматы</td>
                  <td className="border px-2 py-1">Группа УТ-3</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">17:00-20:00</td>
                  <td className="border px-2 py-1 text-xs">
                    Помещение ДС "Юбилейный", Библиотека - читальный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">51</td>
                  <td className="border px-2 py-1">Бакеев А.В.</td>
                  <td className="border px-2 py-1">Шахматы</td>
                  <td className="border px-2 py-1">Группа НП-2</td>
                  <td className="border px-2 py-1 text-center">6</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">15:00-16:30</td>
                  <td className="border px-2 py-1 text-center">10:00-11:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    Помещение ДС "Юбилейный", Библиотека - читальный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">52</td>
                  <td className="border px-2 py-1">Бакеев А.В.</td>
                  <td className="border px-2 py-1">Шахматы</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">11:00-13:00</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    Помещение ДС "Юбилейный", Библиотека - читальный зал
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">53</td>
                  <td className="border px-2 py-1">Бакеев А.В.</td>
                  <td className="border px-2 py-1">Шахматы</td>
                  <td className="border px-2 py-1">Группа УТ-1</td>
                  <td className="border px-2 py-1 text-center">12</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">16:30-18:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">16:30-18:30</td>
                  <td className="border px-2 py-1 text-center">16:30-18:30</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-center">—</td>
                  <td className="border px-2 py-1 text-xs">
                    Помещение ДС "Юбилейный", Библиотека - читальный зал
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Примечания */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-xs md:text-sm text-slate-600 dark:text-slate-300 space-y-2">
            <p className="font-semibold">Примечания:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Расписание действует с 01 ноября 2025 года</li>
              <li>НП — начальная подготовка</li>
              <li>УТ — учебно-тренировочная группа</li>
              <li>Уточняйте актуальность расписания у администрации спортивной школы</li>
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
