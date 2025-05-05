'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import VideoModalTwo from '@/app/components/video-modal-two'

const HeroSection = () => {
    return (
        <motion.section
            className="relative overflow-hidden md:py-32 py-30"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
            }}
        >
            <div className="container relative md:mt-26 mt-6">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <motion.div
                        className="pt-20 md:pt-0 lg:col-span-7"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h6 className="hidden md:block text-primary-blue dark:text-slate-500 font-semibold mb-3 uppercase">
                            Cпортивная школа «Кашира»
                        </h6>
                        <h1 className="font-bold text-primary-blue dark:text-white lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">
                            МЕСТО СИЛЫ. <br />
                            <span className="bg-gradient-to-l from-accent-red to-primary-blue dark:to-white text-transparent bg-clip-text">
                                ПРОСТРАНСТВО БУДУЩИХ ПОБЕД.
                            </span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Наша миссия — воспитывать чемпионов <br /> и сильных личностей через спорт.
                        </p>

                        <div className="mt-6">
                            <VideoModalTwo />
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {[1, 2, 5, 4].map((n, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative md:shrink-0"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default HeroSection
