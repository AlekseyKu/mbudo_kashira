// src\app\aboutus\page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AboutSchool from "../components/aboutus/about-school";
import Coaches from "../components/aboutus/about-coaches";
import LogoSection from "../components/aboutus/about-logo";
import AnimatedHead from "../components/animated-head";
import AnimatedDiv from "../components/animated-div";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      {/* <main className="bg-white text-primary-blue dark:bg-black dark:text-white"> */}
        {/* HERO */}
        <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/sport/сollage.webp')" }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="Спортивная школа «Кашира»" />
              {/* <motion.h1
                className="md:text-3xl text-2xl font-semibold text-white mt-10 mb-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Спортивная школа «Кашира»
              </motion.h1> */}
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

        {/* О ШКОЛЕ */}
        <AboutSchool />

        {/* ТРЕНЕРСКИЙ СОСТАВ */}
        <Coaches />

        {/* НАШ ЛОГОТИП */}
        <LogoSection />

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Стань частью нашей команды!
            </motion.h2>
            <Link
              href="/contact"
              className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue"
            >
              Контакты
            </Link>
          </div>
        </section>
      {/* </main> */}

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}