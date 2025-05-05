// src/app/team/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { coachesData } from '@/app/data/data-coaches'
import { staffData } from '@/app/data/data-managment'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import AnimatedHead from '../components/animated-head'
import AnimatedDiv from '../components/animated-div'

interface CoachData {
  id: number
  name: string
  birthdate: string
  sport: string
  category: string
  experience: number
  image: string
}
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function CoachesPage() {
  const [selectedCoach, setSelectedCoach] = useState<CoachData | null>(null)
  const [selectedStaff, setSelectedStaff] = useState<typeof staffData[0] | null>(null)

  return (
    <>
      <Navbar navlight={true} tagline={false} />

      {/* НАШ КОЛЛЕКТИВ */}
      <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/сollage.webp')`}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <AnimatedHead text="НАШ КОЛЛЕКТИВ" />
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* РУКОВОДСТВО И ПЕРСОНАЛ */}
      <section className="container mx-auto px-4 py-10">
        {/* <div className="text-center mb-6">
          <AnimatedHead text="РУКОВОДСТВО И ПЕРСОНАЛ" />
        </div> */}

        <motion.h2
          className="text-primary-blue dark:text-white mb-10 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
        >
          Руководство и персонал
        </motion.h2>

        <div className="container relative grid sm:grid-cols-2 gap-6">
          {staffData.map((member, i) => (
            <AnimatedDiv key={member.name} className="relative" transition={{ delay: i * 0.05 }}>
              <button
                onClick={() => setSelectedStaff(member)}
                className="group w-full flex items-center space-x-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-600 transition-all text-left"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary-blue dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-slate-500 text-sm group-hover:text-accent-red transition-colors">
                    {member.position}
                  </p>
                </div>
              </button>
            </AnimatedDiv>
          ))}
        </div>
      </section>

      {/* НАШИ ТРЕНЕРЫ */}
      <section className="container mx-auto px-4 py-10">
        {/* <div className="text-center">
          <AnimatedHead text="НАШИ ТРЕНЕРЫ" />
        </div> */}

        <motion.h2
          className="text-primary-blue dark:text-white mb-10 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Тренерский состав
        </motion.h2>

        <div className="container relative grid sm:grid-cols-2 gap-6">
          {coachesData.map((coach, i) => (
            <AnimatedDiv 
              key={coach.id} 
              className="relative" 
              transition={{ delay: i * 0.05 }}>
              <button
                onClick={() => setSelectedCoach(coach)}
                className="group w-full flex items-center space-x-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-600 transition-all text-left"
              >
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary-blue dark:text-white">
                    {coach.name}
                  </h4>
                  <p className="text-slate-500 text-sm group-hover:text-accent-red transition-colors">
                    {coach.sport}
                  </p>
                  <p className="text-slate-400 text-xs">Категория: {coach.category}</p>
                  <p className="text-slate-400 text-xs">Опыт: {coach.experience} лет</p>
                </div>
              </button>
            </AnimatedDiv>
          ))}
        </div>

        {/* Pop-up для тренера */}
        {selectedCoach && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedCoach(null)}
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-md w-full relative shadow-lg">
              <button
                className="absolute top-2 right-2 text-xl text-slate-400 hover:text-accent-red"
                onClick={() => setSelectedCoach(null)}
              >
                &times;
              </button>
              <div className="flex flex-col items-center text-center space-y-4">
                <Image
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <h4 className="text-xl font-semibold text-primary-blue">
                  {selectedCoach.name}
                </h4>
                <p className="text-slate-500">
                  Вид спорта:{' '}
                  <span className="text-primary-blue font-medium">
                    {selectedCoach.sport}
                  </span>
                </p>
                <p className="text-slate-500">
                  Категория:{' '}
                  <span className="text-primary-blue font-medium">
                    {selectedCoach.category}
                  </span>
                </p>
                <p className="text-slate-500">
                  Опыт:{' '}
                  <span className="text-primary-blue font-medium">
                    {selectedCoach.experience} лет
                  </span>
                </p>
                <p className="text-slate-400 text-sm">
                  Дата рождения: {selectedCoach.birthdate}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Pop-up для персонала */}
      {selectedStaff && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedStaff(null)}
        >
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl text-slate-400 hover:text-accent-red"
              onClick={() => setSelectedStaff(null)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src={selectedStaff.image}
                alt={selectedStaff.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <h4 className="text-xl font-semibold text-primary-blue">
                {selectedStaff.name}
              </h4>
              <p className="text-slate-500">{selectedStaff.position}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
