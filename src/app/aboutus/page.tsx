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
          <div className="relative z-10 container text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-black text-white mb-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Спортивная школа «Кашира»
            </motion.h1>
            <motion.p
              className="text-lg text-white max-w-2xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Мы воспитываем чемпионов и лидеров через спорт, дисциплину и вдохновение.
            </motion.p>
          </div>
        </section>

        {/* ИСТОРИЯ */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-4xl font-bold mb-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              О школе и истории
            </motion.h2>
            <motion.p className="text-slate-600 dark:text-slate-300 text-lg" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
              МБУДО «Спортивная школа «Кашира» — муниципальное учреждение, предоставляющее качественную спортивную подготовку в Московской области. Школа была основана для развития массового спорта и подготовки молодых спортсменов к соревнованиям различного уровня.
            </motion.p>
          </div>
        </section>

        {/* ПЕРСОНАЛ */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-4xl font-bold text-center mb-12" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
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

        {/* ТРЕНЕРЫ */}
        <section className="bg-slate-100 dark:bg-[#111] py-20 px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-4" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            Тренерский состав
          </motion.h2>
          <motion.p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
            В школе работают квалифицированные специалисты с многолетним опытом. Подробнее — на отдельной странице.
          </motion.p>
          <Link href="/coaches" className="text-accent-red underline underline-offset-4 hover:text-primary-blue transition">
            Перейти к тренерам
          </Link>
        </section>

        {/* ДОСТИЖЕНИЯ */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-4xl font-bold mb-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              Достижения
            </motion.h2>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              В 2017 году школа вошла в рейтинг лучших спортивных учреждений Московской области. Наши спортсмены регулярно занимают призовые места на соревнованиях всех уровней.
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 className="text-4xl font-bold mb-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
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