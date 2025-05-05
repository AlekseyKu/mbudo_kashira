import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

// Варианты для каждой фотографии при наведении
const photoVariants = {
  initial: { x: 0, y: 0 },
  hover: {
    transition: {
      staggerChildren: 0.1, // Задержка между анимациями дочерних элементов
      // duration: 0.7,
      // ease: "easeOut",
    },
  },
};

// Индивидуальные анимации для каждой фотографии
const photo1Variants = {
  initial: { x: 0 },
  hover: { x: -60 }, // Первая фотография двигается влево
};

const photo2Variants = {
  initial: { x: 0 },
  hover: { x: 160 }, // Вторая фотография двигается вправо
};

const photo3Variants = {
  initial: { y: 0 },
  hover: { y: 180 }, // Третья фотография двигается вниз
};

export default function Coaches() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-primary-blue dark:text-white mb-10 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Тренерский состав
        </motion.h2>
        <div className="flex flex-col lg:flex-row  gap-10">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="text-slate-600 dark:text-slate-300 max-w-xl text-lg mb-6">
              Наши тренеры — это профессионалы своего дела, многие из которых имеют высшее спортивное образование и опыт работы более 10 лет. Они воспитали не одно поколение спортсменов, включая призёров региональных и национальных соревнований. Каждый тренер проходит регулярное обучение и сертификацию, чтобы применять современные методики в тренировочном процессе.
            </p>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl text-lg mb-6">
              Мы создаём комфортные и мотивирующие условия для каждого спортсмена, уделяя особое внимание индивидуальному подходу и развитию физических и моральных качеств. В нашей школе ценят не только спортивные достижения, но и формирование характера, дисциплины и командного духа, что помогает нашим воспитанникам добиваться успеха как в спорте, так и в жизни.
            </p>
            <Link
              href="/coaches"
              className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue"
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
            <motion.div
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
              variants={photoVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                variants={photo1Variants}
                className="absolute top-0 left-0 z-10"
              >
                <Image
                  src="/images/sport/coach/1.png"
                  alt="Тренер 1"
                  width={250}
                  height={250}
                  className="rounded-xl shadow-lg object-cover"
                />
              </motion.div>
              <motion.div
                variants={photo2Variants}
                className="absolute top-5 left-5 z-20"
              >
                <Image
                  src="/images/sport/coach/2.png"
                  alt="Тренер 2"
                  width={250}
                  height={250}
                  className="rounded-xl shadow-lg object-cover"
                />
              </motion.div>
              <motion.div
                variants={photo3Variants}
                className="absolute top-10 left-10 z-30"
              >
                <Image
                  src="/images/sport/coach/3.png"
                  alt="Тренер 3"
                  width={250}
                  height={250}
                  className="rounded-xl shadow-lg object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}