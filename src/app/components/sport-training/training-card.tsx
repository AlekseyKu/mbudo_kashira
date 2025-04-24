// src\app\components\sport\training-card.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface TrainingCardProps {
  item: {
    id: number
    image: string
    title: string
    desc: string
  }
}

export default function TrainingCard({ item }: TrainingCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h5 className="text-lg font-semibold text-primary-blue dark:text-white mb-2">{item.title}</h5>
        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}
