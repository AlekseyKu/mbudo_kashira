// src\app\components\aboutus\about-staff.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const staff = [
  { name: "Гречишникова Ирина Геннадьевна", position: "Директор" },
  { name: "Царев Алексей Николаевич", position: "Заместитель директора по спортивной подготовке" },
  { name: "Бирдычкина Лидия Васильевна", position: "Заместитель директора по административно-хозяйственной деятельности" },
  { name: "Сухов Сергей Анатольевич", position: "Заместитель директора по безопасности" },
  { name: "Сурогина Елена Юрьевна", position: "Заведующая по виду спорта" },
  { name: "Дыкуха Лидия Николаевна", position: "Медицинская сестра" },
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
              src="/images/team/8.jpg"
              alt={member.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
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
