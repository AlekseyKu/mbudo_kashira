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
    <div className="relative group cursor-pointer overflow-hidden w-64 h-86 rounded-2xl bg-primary-blue/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-700 mx-auto">
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

      {/* Hover-контент снизу */}
      <div className="absolute text-center bg-white dark:bg-slate-900 text-primary-blue dark:text-white -bottom-24 group-hover:bottom-0 group-hover:duration-700 duration-500 w-full h-6/8 p-2 shadow-inner flex flex-col justify-between">
        <div>
          {/* <span className="text-accent-red text-xs font-bold">{item.sport}</span> */}
          <h5 className="text-lg font-semibold mt-0 mb-2">{item.title}</h5>
          {/* <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p> */}
          <p className="text-slate-500 text-sm">{item.sport}</p>
          <p className="text-slate-500 text-sm">{item.category}</p>
          <p className="text-slate-400 text-xs">Опыт: {item.experience} лет</p>
        </div>
      </div>
    </div>
  )
}
