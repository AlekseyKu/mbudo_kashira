'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TrainingCard from '@/app/components/sport-training/training-card'
import { trainingsData } from '@/app/data/data-sport'

const TrainingSection = () => {
    return (
        <motion.section
            className="relative md:pt-24 pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
        >
            <div className="container relative">
                <motion.div
                    className="grid grid-cols-1 pb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-primary-blue dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                        НАШИ ТРЕНИРОВКИ
                    </h4>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Откройте для себя разнообразие спортивных направлений и возможностей с нашей школой.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {trainingsData.slice(0, 6).map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TrainingCard item={item} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="grid md:grid-cols-12 grid-cols-1 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="md:col-span-12 text-center">
                        <Link href="/trainings" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">
                            ВСЕ ТРЕНИРОВКИ <i className="mdi mdi-arrow-right align-middle"></i>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default TrainingSection
