// src\app\documents\page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AnimatedDiv from "../components/animated-div";
import AnimatedHead from "../components/animated-head";

// Пример списка документов
const documents = [
    // { name: "Устав спортивной школы «Кашира»", url: "/documents/charter.pdf" },
    // { name: "Правила приёма в спортивную школу", url: "/documents/admission-rules.pdf" },
    { name: "Расписание занятий на 2025 год", url: "/doc/Расписание СШ КАШИРА с 01.02.2025.pdf" },
    { name: "Платные услуги", url: "/doc/платные услуги.pdf" },
    { name: "Приказ 14 от 24.03.2025. О внедрении в практику Антикоррупционных стандартов", url: "/doc/приказ 14 от 24.03.2025. О внедрении в практику Антикоррупционных стандартов.pdf" },
    { name: "Приказ 15 от 24.03.2025 Об утверждении Плана меропиятий по реализации антикоррупционной политики", url: "/doc/приказ 15 от 24.03.2025 Об утверждении Плана меропиятий по реализации антикоррупционной политики.pdf" },
    { name: "приказ 16 от 24.03.2025 Об утверждении Порядка уведомления работодателя о склонении к коррупционным правонарушениям", url: "/doc/приказ 16 от 24.03.2025 Об утверждении Порядка уведомления работодателя о склонении к коррупционным правонарушениям.pdf" },
    { name: "Приказ 17 от 24.03.2025 приказ 17 от 24.03.2025 Об утверждении кодекса этики", url: "/doc/приказ 17 от 24.03.2025 Об утверждении кодекса этики.pdf" }, 
    { name: "Приказ 23 от 24.03.2025 О противодействии коррупции", url: "/doc/приказ 23 от 24.03.2025 О противодействии коррупции.pdf" },

];

export default function DocumentsPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">

        <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/сollage.webp')`}}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="ДОКУМЕНТЫ" />
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

        {/* ДОКУМЕНТЫ */}
        <section className="container mx-auto px-4 py-12">
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, i) => (
                <AnimatedDiv
                  key={i}
                  className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  transition={{ delay: i * 0.1 }}
                >
                  <svg
                    className="w-8 h-8 text-primary-blue dark:text-accent-red"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm9 1.414L16.586 7H15V5.414zM8 9h8v2H8V9zm0 4h8v2H8v-13zm0 4h8v2H8v-2z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-md text-primary-blue dark:text-white">
                      {doc.name}
                    </p>
                    <Link
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 dark:text-slate-300 hover:underline"
                    >
                      Открыть PDF
                    </Link>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedDiv className="text-4xl font-bold mb-6">
              <h2>Стань частью нашей команды!</h2>
            </AnimatedDiv>
            <Link
              href="/contact"
              className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue"
            >
              Контакты
            </Link>
          </div>
        </section> */}
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}