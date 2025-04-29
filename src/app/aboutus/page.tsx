"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AboutSchool from "../components/aboutus/about-school";
import Staff from "../components/aboutus/about-staff";
import Coaches from "../components/aboutus/about-coaches";
import LogoSection from "../components/aboutus/about-logo";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">
        {/* HERO */}
        <section className="relative w-full py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/sport/сollage.webp')" }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-1 container text-center">

            <motion.h1
              className="md:text-3xl text-2xl font-semibold text-white mt-10 mb-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Спортивная школа «Кашира»
            </motion.h1>

          </div>
        </section>

        {/* О ШКОЛЕ */}
        <AboutSchool />

        {/* РУКОВОДСТВО И ПЕРСОНАЛ */}
        <Staff />

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
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}