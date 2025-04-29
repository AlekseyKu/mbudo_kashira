import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function Coaches() {
  return (
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
  );
}