'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import VideoModalTwo from '@/app/components/video-modal-two'

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden md:py-32 py-30">
            <div className="container relative md:mt-26 mt-6">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="pt-20 md:pt-0 lg:col-span-7">
                        <motion.h6
                            className="hidden md:block text-primary-blue dark:text-slate-500 font-semibold mb-3 uppercase"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            Спортивная школа «Кашира»
                        </motion.h6>

                        <motion.h1
                            className="font-bold text-primary-blue dark:text-white lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            МЕСТО СИЛЫ. <br />
                            <motion.span
                                className="bg-gradient-to-l from-accent-red to-primary-blue dark:to-white text-transparent bg-clip-text"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                ПРОСТРАНСТВО БУДУЩИХ ПОБЕД.
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="mt-6 space-y-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.75 }}
                        >
                            <p className="text-slate-500 text-lg max-w-xl">
                                Наша миссия — воспитывать чемпионов <br /> и сильных личностей через спорт.
                            </p>
                            <motion.div
                                className="mt-6 space-y-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <VideoModalTwo />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* БЛОК С ФОТО */}
                    <div className="lg:col-span-5">

                        {/* АНИМИРОВАННЫЙ ЛОГОТИП */}
                        {/* <motion.div
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 2,
                                times: [0, 0.5, 1],
                                delay: 0
                            }}
                        >
                            <Image
                                src="/images/logo_main_min.png"
                                width={300}
                                height={300}
                                alt="Логотип школы"
                                className="mx-auto"
                            />
                        </motion.div> */}

                        <div className="grid grid-cols-2 gap-6">
                            {[1, 2, 5, 4].map((n, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative md:shrink-0"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 1.5 + idx * 0.25 }}
                                >
                                    <Image
                                        src={`/images/main/${n}.webp`}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                        className={`xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 ${
                                            n === 1
                                                ? 'rounded-s-full'
                                                : n === 2
                                                ? 'rounded-full'
                                                : n === 5
                                                ? 'rounded-xl'
                                                : 'rounded-e-full'
                                        }`}
                                        alt=""
                                    />

                                    {n === 1 && (
                                        <div className="overflow-hidden after:content-[''] after:absolute after:size-12 after:bg-accent-red after:top-0 after:-start-6 after:-z-1 after:rounded-full"></div>
                                    )}
                                    {n === 2 && (
                                        <div className="overflow-hidden after:content-[''] after:absolute after:size-24 after:bg-primary-blue/40 after:-top-10 after:-end-0 after:-z-1 after:rounded-lg after:rotate-[36deg]"></div>
                                    )}
                                    {n === 5 && (
                                        <div className="overflow-hidden after:content-[''] after:absolute after:size-40 after:bg-primary-blue after:-bottom-10 after:-start-10 after:-z-1 after:rounded-full"></div>
                                    )}
                                    {n === 4 && (
                                        <>
                                            <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-primary-blue after:bottom-10 after:-end-12 after:-z-1 after:rounded-md"></div>
                                            <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-accent-red/60 after:-bottom-12 after:start-10 after:-z-1 after:rounded-full"></div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
