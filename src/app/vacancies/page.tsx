"use client";

import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AnimatedDiv from "../components/animated-div";
import vacanciesData from "../../../public/data/vacancies.json";
import AnimatedHead from "../components/animated-head";

interface Vacancy {
  Вакансия: string;
  Объект: string;
  "З/п": string;
}

export default function VacanciesPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">

        <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/сollage.webp')`}}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
              <div className="grid grid-cols-1 text-center mt-10">
                  <AnimatedHead text="ВАКАНСИИ" />
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

        {/* ТАБЛИЦА ВАКАНСИЙ */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedDiv
              className="text-center mb-10"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="md:text-3xl text-2xl font-semibold ">Доступные вакансии</h2>
            </AnimatedDiv>
            <AnimatedDiv
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary-blue dark:bg-accent-red text-white">
                      <th className="p-4 font-semibold">Вакансия</th>
                      <th className="p-4 font-semibold">Объект</th>
                      <th className="p-4 font-semibold">З/п</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacanciesData.map((vacancy: Vacancy, i: number) => (
                      <tr
                        key={i}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <td className="p-4">{vacancy.Вакансия}</td>
                        <td className="p-4">{vacancy.Объект}</td>
                        <td className="p-4">{vacancy["З/п"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedDiv>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}