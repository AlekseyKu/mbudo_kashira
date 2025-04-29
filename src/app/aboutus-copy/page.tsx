"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";

const staff = [
  { name: "Гречишникова Ирина Геннадьевна", position: "Директор" },
  { name: "Царев Алексей Николаевич", position: "Заместитель директора по спортивной подготовке" },
  { name: "Бирдычкина Лидия Васильевна", position: "Заместитель директора по административно-хозяйственной деятельности" },
  { name: "Сухов Сергей Анатольевич", position: "Заместитель директора по безопасности" },
  { name: "Сурогина Елена Юрьевна", position: "Заведующая по виду спорта" },
  { name: "Дыкуха Лидия Игоревна", position: "Медицинская сестра" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-[#0A0A0A] dark:text-white">
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
            <motion.p
              className="text-lg text-white max-w-2xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Мы воспитываем чемпионов и лидеров <br /> через спорт, дисциплину и вдохновение.
            </motion.p>
          </div>
        </section>

        {/* О ШКОЛЕ И ИСТОРИИ */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-primary-blue dark:text-white mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              О школе и истории
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                className="lg:w-3/5 text-center lg:text-left"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              >
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  МБУДО «Спортивная школа «Кашира» — муниципальное учреждение, предоставляющее качественную спортивную подготовку в Московской области. Школа была основана для развития массового спорта и подготовки молодых спортсменов к соревнованиям различного уровня.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-2/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/images/main/main.webp"
                  alt="Спортивная школа Кашира"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ПЕРСОНАЛ */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-primary-blue dark:text-white mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Руководство и персонал
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {staff.map((member, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-6 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/team/8.jpg"
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg text-primary-blue dark:text-white">{member.name}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{member.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ТРЕНЕРСКИЙ СОСТАВ */}
        <section className="bg-slate-100 dark:bg-[#111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-primary-blue dark:text-white mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Тренерский состав
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p className="text-slate-600 dark:text-slate-300 max-w-xl mb-6">
                  В школе работают квалифицированные специалисты с многолетним опытом. Подробнее — на отдельной странице.
                </p>
                <Link
                  href="/coaches"
                  className="inline-block px-6 py-3 rounded-full bg-accent-red text-white hover:bg-primary-blue transition text-lg"
                >
                  Перейти к тренерам
                </Link>
              </motion.div>
              <motion.div
                className="lg:w-1/2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                  <Image
                    src="/images/sport/coach/1.png"
                    alt="Тренер 1"
                    width={250}
                    height={350}
                    className="absolute top-0 left-0 rounded-xl shadow-lg object-cover z-10"
                  />
                  <Image
                    src="/images/sport/coach/2.png"
                    alt="Тренер 2"
                    width={250}
                    height={350}
                    className="absolute top-10 left-20 rounded-xl shadow-lg object-cover z-20"
                  />
                  <Image
                    src="/images/sport/coach/3.png"
                    alt="Тренер 3"
                    width={250}
                    height={350}
                    className="absolute top-20 left-40 rounded-xl shadow-lg object-cover z-30"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* НАШ ЛОГОТИП */}
        <section className="px-6 py-20 bg-gradient-to-r from-primary-blue to-accent-red text-white relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-center mb-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Наш логотип
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                className="lg:w-1/2 flex justify-center gap-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/images/logo_main_min.png"
                  alt="Логотип Спортивной школы Кашира"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <Image
                  src="/images/gerb.webp"
                  alt="Герб Каширы"
                  width={150}
                  height={150}
                  className="object-contain opacity-70"
                />
              </motion.div>
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              >
                <p className="text-lg mb-4">
                  Мы вдохновились символом города Каширы — черным драконом, который олицетворяет силу, защиту и историю города.
                </p>
                <p className="text-lg">
                  Переосмыслили его как спортивного маскота: живое, динамичное и вдохновляющее новое поколение чемпионов. Это не просто знак — это мост между историей города и будущим его детей.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Хотите узнать больше?
            </motion.h2>
            <Link
              href="/trainings"
              className="inline-block px-8 py-3 rounded-full bg-primary-blue text-white hover:bg-accent-red transition text-lg"
            >
              Смотреть тренировки
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