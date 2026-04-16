// src\app\components\aboutus\about-staff.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const staff = [
  { name: "Гречишникова Ирина Геннадьевна", position: "Директор", image: "/images/photo/plug.jpg" },
  { name: "Бирдычкина Лидия Васильевна", position: "Заместитель директора по административно-хозяйственной деятельности", image: "/images/photo/leaders/Бирдычкина.jpg" },
  { name: "Сухов Сергей Анатольевич", position: "Заместитель директора по безопасности", image: "/images/photo/leaders/Сухов.jpg" },
  { name: "Сурогина Елена Юрьевна", position: "Заместитель директора по спортивной подготовке", image: "/images/photo/leaders/Сурогина.jpg" },
  { name: "Кузнецова Елена Юрьевна", position: "Заведующая по виду спорта", image: "/images/photo/leaders/Кузнецова.jpg" },
  { name: "Бондарь Татьяна Сергеевна", position: "Заведующая по виду спорта", image: "/images/photo/leaders/Бондарь.jpg" },
  { name: "Полякова Елена Валерьевна", position: "Специалист по кадрам", image: "/images/photo/leaders/Полякова.jpg" },
  { name: "Дыкуха Лидия Николаевна", position: "Медицинская сестра", image: "/images/photo/plug.jpg" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function Staff() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-primary-blue dark:text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Руководство и персонал
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 gap-6 mt-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {staff.map((member, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="size-20 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-lg font-semibold text-primary-blue dark:text-white">
                {member.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
