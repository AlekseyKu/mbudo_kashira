import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "../animated-div";

const infrastructure = [
  "ФОК «Олимп»",
  "Стадион «Спартак»",
  "Стадион «Локомотив»",
  "Спортзал «Юность»",
  "Шахматный клуб",
];

const sports = [
  { name: "Футбол", icon: "/images/sport/icons/1.webp" },
  { name: "Баскетбол", icon: "/images/sport/icons/2.webp" },
  { name: "Лёгкая атлетика", icon: "/images/sport/icons/3.webp" },
  { name: "Плавание", icon: "/images/sport/icons/4.webp" },
  { name: "Киокушин", icon: "/images/sport/icons/5.webp" },
  { name: "Волейбол", icon: "/images/sport/icons/6.webp" },
  { name: "Самбо", icon: "/images/sport/icons/7.webp" },
  { name: "Лыжи", icon: "/images/sport/icons/8.webp" },
  { name: "Шахматы", icon: "/images/sport/icons/9.webp" },
  { name: "Бокс", icon: "/images/sport/icons/10.webp" },
  { name: "Спортивная гимнастика", icon: "/images/sport/icons/11.webp" },
];

export default function AboutSchool() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* БЛОК 1: Описание и цели (во всю ширину) */}
        <AnimatedDiv className="text-center mb-12" delay={0.4}>
          <div className="relative">
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-5xl mx-auto mb-6">
              МБУДО «Спортивная школа «Кашира» — муниципальное учреждение, обеспечивающее качественную спортивную подготовку в Московской области и направленное на развитие массового спорта и подготовку молодых спортсменов к соревнованиям различного уровня.
            </p>
            <blockquote className="relative italic text-lg text-accent-red max-w-sm mx-auto lg:mx-0 lg:ml-auto text-center lg:text-right">
              <p>
                "Мы воспитываем чемпионов и лидеров через спорт, дисциплину и вдохновение"
              </p>
              <footer className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                — <cite> Гречишникова Ирина Геннадьевна, директор школы </cite>
              </footer>
            </blockquote>
          </div>

          <div className="text-left mt-12">
            <h3 className="text-primary-blue dark:text-white text-xl font-semibold mb-4">Цели и задачи учреждения</h3>
            <ul className="text-slate-600 dark:text-slate-300 text-lg space-y-3 mx-auto">
              <li>Развитие физической культуры и спорта на территории муниципалитета.</li>
              <li className="font-semibold">Реализация программ спортивной подготовки на различных этапах:</li>
              <ul className="pl-5 space-y-2">
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary-blue dark:before:text-accent-red">
                  спортивно-оздоровительном;
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary-blue dark:before:text-accent-red">
                  начальной подготовки;
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary-blue dark:before:text-accent-red">
                  тренировочном (этап спортивной специализации);
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary-blue dark:before:text-accent-red">
                  совершенствования спортивного мастерства;
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary-blue dark:before:text-accent-red">
                  высшего спортивного мастерства.
                </li>
              </ul>
            </ul>
          </div>
        </AnimatedDiv>

        {/* БЛОК 2: Инфраструктура (фото слева, текст и кнопка справа) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <AnimatedDiv className="lg:w-1/2" delay={0.4} scale>
            <Image
              src="/images/main/main.webp"
              alt="Спортивная школа Кашира"
              width={500}
              height={300}
              className="rounded-xl object-cover shadow-lg"
            />
          </AnimatedDiv>
          <AnimatedDiv className="lg:w-3/5 text-center lg:text-right" delay={0.6}>
            <h3 className="text-primary-blue dark:text-white text-xl font-semibold mb-4">Инфраструктура</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-4">
              Школа располагает пятью современными спортивными объектами:
            </p>
            <ul className="grid grid-cols-1 gap-3 text-slate-600 dark:text-slate-300 text-lg mb-6">
              {infrastructure.map((item, i) => (
                <li
                  key={i}
                  className="relative before:content-['•'] before:absolute before:-right-4 before:text-primary-blue dark:before:text-accent-red"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue"
            >
              Посмотреть на карте
            </Link>
          </AnimatedDiv>
        </div>

        {/* БЛОК 3: Виды спорта с иконками */}
        <AnimatedDiv className="text-center" delay={0.2}>
          <h3 className="text-left text-primary-blue dark:text-white text-xl font-semibold mb-4">Виды спорта</h3>
          <p className="text-left text-slate-600 dark:text-slate-300 text-lg mb-6 mx-auto">
            В «Спортивной школе «Кашира» развиваются 11 видов спорта:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sports.map((sport, i) => (
              <AnimatedDiv
                key={i}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-lg"
                delay={0.1 * i}
              >
                <Image
                  src={sport.icon}
                  alt={`${sport.name} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span>{sport.name}</span>
              </AnimatedDiv>
            ))}
          </div>
          {/* <p className="text-slate-600 dark:text-slate-300 text-lg mt-6 max-w-3xl mx-auto">
            Это позволяет обеспечить комплексный подход к развитию спортсменов разных направлений и уровней подготовки.
          </p> */}
        </AnimatedDiv>
      </div>
    </section>
  );
}