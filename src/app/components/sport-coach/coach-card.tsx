// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { GiWhistle } from 'react-icons/gi'
// import { MdOutlineMilitaryTech } from 'react-icons/md'
// import { BiTimeFive } from 'react-icons/bi'

// interface Coach {
//   id: number
//   name: string
//   image: string
//   sport: string
//   category: string
//   experience: number
// }

// export default function TeamCard({ coach }: { coach: Coach }) {
//   return (
//     <div className="relative group overflow-hidden rounded-xl shadow-md bg-white">
//       {/* Фото */}
//       <Image
//         src={coach.image}
//         alt={coach.name}
//         width={500}
//         height={500}
//         className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
//       />

//       {/* Hover-слой */}
//       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
//         <div className="text-sm flex items-center gap-2 mb-2">
//           <GiWhistle className="text-accent-red" /> {coach.sport}
//         </div>
//         <div className="text-sm flex items-center gap-2 mb-2">
//           <MdOutlineMilitaryTech className="text-yellow-400" /> {coach.category}
//         </div>
//         <div className="text-sm flex items-center gap-2">
//           <BiTimeFive className="text-violet-400" /> {coach.experience} лет опыта
//         </div>
//       </div>

//       {/* Имя и должность */}
//       <div className="py-4 text-center">
//         <h5 className="text-lg font-semibold text-primary-blue">{coach.name}</h5>
//         <p className="text-slate-500 text-sm">{coach.sport}</p>
//       </div>
//     </div>
//   )
// }
