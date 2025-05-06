// src/app/components/homepage/section-4-coaches.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CoachCard2 from '@/app/components/sport-coach/coach-card-2'

interface Coach {
    id: number
    name: string
    birthdate: string
    sport: string
    category: string
    experience: number
    image: string
}

const CoachSection = ({ coaches }: { coaches: Coach[] }) => {
    return (
        <motion.section
            className="container relative md:mt-24 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                className="grid grid-cols-1 pb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h4 className="text-primary-blue dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                    НАШИ ТРЕНЕРЫ
                </h4>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Познакомьтесь с нашими профессиональными тренерами, которые помогут вам достичь спортивных высот.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6 justify-center">
                {coaches.map((coach, index) => (
                    <motion.div
                        key={coach.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <CoachCard2
                            item={{
                                id: coach.id,
                                image: coach.image,
                                title: coach.name,
                                sport: coach.sport,
                                category: coach.category,
                                experience: coach.experience,
                            }}
                        />
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
                    <Link href="/team" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">
                        НАШ КОЛЛЕКТИВ <i className="mdi mdi-arrow-right align-middle"></i>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default CoachSection
