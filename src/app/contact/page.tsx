'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi'
import { FaVk, FaTelegramPlane } from 'react-icons/fa'
import Navbar from '../components/navbar/navbar'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import ContactForm from '../components/contact-form'

const contactObjects = [
  { name: 'ФОК «Олимп»', phone: '+7 (49669) 6-76-89' },
  { name: 'Стадион «Спартак»', phone: '+7 (49669) 3-15-57' },
  { name: 'Стадион «Локомотив»', phone: '+7 (49669) 6-76-91' },
  { name: 'Спортзал «Юность»', phone: '+7 (49669) 2-24-49' },
  { name: 'Шахматный клуб', phone: '+7 (49669) 2-27-34' },
]

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

            <div className="mt-6">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Мы в TG:</p>
              <Link
                href="https://t.me/fokolimpkashira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-blue dark:text-white hover:text-accent-red dark:hover:text-accent-red transition text-base"
              >
                <FaTelegramPlane className="text-xl" />
                Перейти в группу
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Мы в MAX:</p>
              <Link
                href="https://max.ru/id5019011196_gos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-blue dark:text-white hover:text-accent-red dark:hover:text-accent-red transition text-base"
              >
                <svg
                  viewBox="0 0 1000 1000"
                  aria-hidden
                  className="size-5 shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M634.4000244,0h-1.8000488h-95.2999878H365.6000366C64.5,0,0,64.5999756,0,365.5999756v268.8000488C0,935.5,64.6000366,1000,365.6000366,1000h171.6999512h95.2999878h1.8000488C935.5,1000,1000,935.3999634,1000,634.3999634V365.5999756C1000,64.5,935.4000244,0,634.4000244,0z"
                  />
                  <path
                    fill="#fff"
                    className="dark:fill-primary-blue"
                    d="M512.0947266,308.1917419c-99.421875-5.2137451-177.0074768,63.7746277-194.1162109,171.7529297c-14.1681519,89.4194031,10.9517212,198.377655,32.4380493,203.8618469c9.1132812,2.3260498,31.0438538-14.447998,46.9994507-29.4939575c2.9996643-2.8286133,7.5354309-3.3046265,11.0531616-1.1536255c24.8721313,15.2089233,53.0321655,26.6383667,84.07724,28.2663574c102.068512,5.352417,192.52005-74.5308838,197.8663025-176.6076965C695.7590332,402.7408142,614.163208,313.5441895,512.0947266,308.1917419z M345.6054993,826.5784302c-3.8494568-2.7254639-9.1531067-1.9857788-12.3791809,1.4550171c-43.119812,45.9900513-153.4740906,78.2501221-158.5290833,15.4796143c0-49.1799927-11.0461426-90.6229248-23.2081757-136.2524414c-14.8953705-55.8845825-31.4645691-118.0489502-31.4645691-208.3983765c0-215.4476624,176.6943207-377.4747925,386.1940918-377.4747925S879.975708,291.3253784,879.975708,500.9545898S710.4901733,876.3369751,508.2009583,876.3369751C436.4336243,876.3369751,401.6072693,866.2283936,345.6054993,826.5784302z"
                  />
                </svg>
                Перейти в канал
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

        {/* Наши объекты */}
        <div className="max-w-5xl mx-auto mt-10 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-4">
                Наши объекты
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                {contactObjects.map((obj, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>{obj.name}</span>
                    <span className="text-slate-400">—</span>
                    <a
                      href={`tel:${obj.phone.replace(/\s|\(|\)/g, '')}`}
                      className="text-primary-blue dark:text-accent-red font-medium hover:underline"
                    >
                      {obj.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/objects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue transition-colors whitespace-nowrap"
            >
              Посмотреть на карте
            </Link>
          </div>
        </div>

        {/* Форма обратной связи */}
        <ContactForm />
      </section>


      {/* Подпись */}
      <footer className="py-6 border-t border-gray-200 dark:border-slate-700 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {new Date().getFullYear()} © МБУДО Cпортивная школа «Кашира»
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          <Link
            href="https://yandex.ru/maps/org/kopi_print/118480378524/?ll=38.053237%2C54.885477&z=17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-red transition"
          >
            Разработка сайта - Копи-принт
          </Link>
        </p>
      </footer>

      <ScrollToTop />
      <Switcher />
    </>
  )
}
