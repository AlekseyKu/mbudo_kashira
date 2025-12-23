"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AnimatedDiv from "../components/animated-div";
import AnimatedHead from "../components/animated-head";

interface Partner {
  name: string;
  url: string;
  description: string;
  banner?: string;
}

const partnersData: Partner[] = [
  {
    name: "Министерство спорта России",
    url: "https://www.minsport.gov.ru/",
    description: "Официальный сайт Министерства спорта Российской Федерации",
  },
  {
    name: "Министерство спорта Московской области",
    url: "https://mst.mosreg.ru/",
    description: "Официальный сайт Министерства спорта Московской области",
  },
  {
    name: "Министерство образования Московской области",
    url: "https://mo.mosreg.ru",
    description: "Официальный сайт Министерства образования Московской области",
  },
  {
    name: "Сайт правительства Московской области",
    url: "https://mosreg.ru",
    description: "Официальный портал правительства Московской области",
  },
  {
    name: "Сайт губернатора Московской области",
    url: "https://xn--90abb0cal0gub.xn--p1ai/",
    description: "Сайт губернатора Московской области",
  },
  {
    name: "Сайт администрации городского округа Кашира",
    url: "https://kashira.su/",
    description: "Официальный сайт администрации городского округа Кашира",
  },
  {
    name: "МосРег",
    url: "https://mosreg.ru",
    description: "Портал государственных услуг Московской области",
  },
  {
    name: "Госуслуги",
    url: "https://www.gosuslugi.ru",
    description: "Единый портал государственных и муниципальных услуг",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">
        <section
          className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/sport/сollage.webp')` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="ПАРТНЁРЫ" />
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

        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedDiv
              className="text-center mb-10"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="md:text-3xl text-2xl font-semibold">
                Наши партнёры
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                Мы сотрудничаем с ведущими организациями и ведомствами для развития спорта и образования
              </p>
            </AnimatedDiv>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnersData.map((partner, index) => (
                <AnimatedDiv
                  key={index}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary-blue dark:hover:border-accent-red group"
                  >
                    {partner.banner ? (
                      <div className="relative h-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                        <Image
                          src={partner.banner}
                          alt={partner.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="h-32 bg-gradient-to-br from-primary-blue to-accent-red dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                        <div className="text-white text-center px-4">
                          <p className="text-md font-semibold opacity-90">
                            {/* {partner.name.split(' ').slice(0, 2).join(' ')} */}
                            {partner.name}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-2 group-hover:text-accent-red transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {partner.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-blue dark:text-accent-red text-sm font-medium">
                        Перейти на сайт
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}

