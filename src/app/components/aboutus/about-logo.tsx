import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function LogoSection() {
  return (
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
  );
}