// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// import { coachesData } from '../../data/data-coaches'

// export default function Team() {
//   return (
//     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
//       {coachesData.slice(0, 8).map((coach, index) => (
//         <div className="group text-center" key={index}>
//           <div className="relative inline-block mx-auto rounded-full overflow-hidden w-[180px] h-[180px]">
//             <Image
//               src={coach.image}
//               alt={coach.name}
//               width={180}
//               height={180}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>
//           </div>

//           <div className="content mt-4">
//             <h5 className="text-lg font-semibold text-primary-blue">{coach.name}</h5>
//             <p className="text-slate-500 text-sm">{coach.sport} • {coach.category}</p>
//             <p className="text-slate-400 text-xs">Опыт: {coach.experience} лет</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
