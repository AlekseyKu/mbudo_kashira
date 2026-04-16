// src\app\components\sport-coach\coach-card-2.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface TrainingCardProps {
  item: {
    id: number
    image: string
    title: string
    sport: string
    category: string
    experience: number
    // desc: string
  }
}

export default function TrainingCard({ item }: TrainingCardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden w-64 h-[21.5rem] rounded-2xl bg-primary-blue/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-700 mx-auto">
      {/* Верхняя часть с картинкой */}
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt={item.title}
          width={240}
          height={320}
          className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* В спокойном состоянии показываем только ФИО, детали раскрываем по hover */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 dark:bg-slate-900/95 text-primary-blue dark:text-white p-3 shadow-inner">
        <h5 className="text-lg font-semibold leading-tight">{item.title}</h5>
        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          <p className="text-slate-500 text-sm mt-2">{item.sport}</p>
          <p className="text-slate-500 text-sm">{item.category}</p>
          <p className="text-slate-400 text-xs">Опыт: {item.experience} лет</p>
        </div>
      </div>
    </div>
  )
}
