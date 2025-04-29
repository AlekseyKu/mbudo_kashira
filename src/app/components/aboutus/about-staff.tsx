import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const staff = [
  { name: "Гречишникова Ирина Геннадьевна", position: "Директор" },
  { name: "Царев Алексей Николаевич", position: "Заместитель директора по спортивной подготовке" },
  { name: "Бирдычкина Лидия Васильевна", position: "Заместитель директора по административно-хозяйственной деятельности" },
  { name: "Сухов Сергей Анатольевич", position: "Заместитель директора по безопасности" },
  { name: "Сурогина Елена Юрьевна", position: "Заведующая по виду спорта" },
  { name: "Дыкуха Лидия Игоревна", position: "Медицинская сестра" },
];

export default function Staff() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-primary-blue dark:text-white mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
          }}
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
  );
}