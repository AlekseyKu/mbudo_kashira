import React from "react";
import Image from "next/image";
import AnimatedDiv from "../animated-div";

export default function LogoSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-primary-blue to-accent-red text-white relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedDiv className="text-3xl md:text-4xl font-semibold text-center mb-10">
          <h2>Наш логотип</h2>
        </AnimatedDiv>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <AnimatedDiv
            className="lg:w-1/5 flex justify-start"
            scale
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/images/gerb.webp"
              alt="Герб Каширы"
              width={170}
              height={170}
              className="object-contain"
            />
          </AnimatedDiv>
          <AnimatedDiv
            className="lg:w-3/5 text-center"
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              Мы вдохновились символом города Каширы — черным драконом, который олицетворяет силу, защиту и историю города.
            </p>
            <p className="text-lg">
              Переосмыслили его как спортивного маскота: <br/> сильный, динамичный и вдохновляющий — новое поколение чемпионов. Это не просто знак — это мост между историей города и будущим его детей.
            </p>
          </AnimatedDiv>
          <AnimatedDiv
            className="lg:w-1/5 flex justify-end"
            scale
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/logo_main_min.webp"
              alt="Логотип Спортивной школы Кашира"
              width={300}
              height={300}
              className="object-contain"
            />
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}