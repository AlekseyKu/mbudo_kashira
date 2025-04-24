'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { coachesData } from '@/app/data/data-coaches'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'

interface CoachData {
  id: number
  name: string
  birthdate: string
  sport: string
  category: string
  experience: number
  image: string
}

export default function CoachesPage() {
  const [selectedCoach, setSelectedCoach] = useState<CoachData | null>(null)

  return (
    <>
      <Navbar navlight={true} tagline={false}/> 

      <section className="relative table w-full py-32 lg:py-30 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/sport/collages-3.webp')`}}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">НАШИ ТРЕНЕРЫ</h3>
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

      <section className="container mx-auto px-4 py-12">
        <div className="container relative grid sm:grid-cols-2 gap-6">
          {coachesData.map((coach) => (
            <button
              key={coach.id}
              onClick={() => setSelectedCoach(coach)}
              className="flex items-center space-x-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-left"
            >
              <Image
                src={coach.image}
                alt={coach.name}
                width={80}
                height={80}
                className="rounded-full object-cover shrink-0"
              />
              <div>
                <h4 className="text-lg font-semibold text-primary-blue dark:text-white">{coach.name}</h4>
                <p className="text-slate-500 text-sm">{coach.sport}</p>
                <p className="text-slate-400 text-xs">Категория: {coach.category}</p>
                <p className="text-slate-400 text-xs">Опыт: {coach.experience} лет</p>
              </div>
            </button>
          ))}
        </div>

        {selectedCoach && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedCoach(null)}>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-md w-full relative shadow-lg">
              <button className="absolute top-2 right-2 text-xl text-slate-400 hover:text-accent-red" onClick={() => setSelectedCoach(null)}>
                &times;
              </button>
              <div className="flex flex-col items-center text-center space-y-4">
                <Image src={selectedCoach.image} alt={selectedCoach.name} width={100} height={100} className="rounded-full object-cover" />
                <h4 className="text-xl font-semibold text-primary-blue">{selectedCoach.name}</h4>
                <p className="text-slate-500">Вид спорта: <span className="text-primary-blue font-medium">{selectedCoach.sport}</span></p>
                <p className="text-slate-500">Категория: <span className="text-primary-blue font-medium">{selectedCoach.category}</span></p>
                <p className="text-slate-500">Опыт: <span className="text-primary-blue font-medium">{selectedCoach.experience} лет</span></p>
                <p className="text-slate-400 text-sm">Дата рождения: {selectedCoach.birthdate}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer/>
      <ScrollToTop/>
      <Switcher/>
    </>
  )
}
