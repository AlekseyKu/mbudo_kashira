'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { trainingsData } from '@/app/data/data-sport'
import { coachesData } from '@/app/data/data-coaches'

import Navbar from '../components/navbar/navbar'
import FaqAbout from '../components/faq-about'
import Faq from '../components/faq'
import GetInTouch from '../components/get-in-touch'
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

export default function TrainingsPage() {
  const [selectedCoach, setSelectedCoach] = useState<CoachData | null>(null)

  return (
    <>
      <Navbar navlight={true} tagline={false}/> 

      <section className="relative table w-full py-32 lg:py-30 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/sport/сollage.webp')`}}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">НАШИ ТРЕНИРОВКИ</h3>
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
        <div className="container relative">

          <div className="flex flex-col space-y-12">
            {trainingsData.map((training) => {
              const coaches = coachesData.filter((coach) => coach.sport === training.title)

              return (
                <div key={training.id} className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
                  {/* Image */}
                  <div className="md:w-1/3 w-full min-h-[400px] relative">
                    <Image
                      src={training.image}
                      alt={training.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Info */}
                  <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-blue dark:text-white mb-2">{training.title}</h3>
                      <p className="text-slate-500 mb-4">{training.desc}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-accent-red mb-2">Тренеры направления:</h4>
                      {coaches.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {coaches.map((coach) => (
                            <button
                              key={coach.id}
                              onClick={() => setSelectedCoach(coach)}
                              className="bg-primary-blue/5 p-4 rounded-lg shadow-sm h-full text-left"
                            >
                              <div className="flex items-center space-x-4">
                                <Image
                                  src={coach.image}
                                  alt={coach.name}
                                  width={60}
                                  height={60}
                                  className="rounded-full object-cover shrink-0"
                                />
                                <div>
                                  <p className="text-primary-blue dark:text-white text-sm leading-tight">{coach.name}</p>
                                  <p className="text-slate-500 text-xs">{coach.category}</p>
                                  <p className="text-slate-400 text-xs">Опыт: {coach.experience} лет</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-slate-400 italic">Нет назначенных тренеров</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
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
                <p className="text-slate-400 text-sm">Дата рождения: {selectedCoach.birthdate}</p>
                <p className="text-slate-500">Вид спорта: <span className="text-primary-blue font-medium">{selectedCoach.sport}</span></p>
                <p className="text-slate-500">Категория: <span className="text-primary-blue font-medium">{selectedCoach.category}</span></p>
                <p className="text-slate-500">Опыт: <span className="text-primary-blue font-medium">{selectedCoach.experience} лет</span></p>
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