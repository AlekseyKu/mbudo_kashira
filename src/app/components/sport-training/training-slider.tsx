// 'use client'
// import React from 'react'
// import dynamic from 'next/dynamic'

// import { trainingsData } from '../../data/data-sport'
// import TrainingCard from './training-card'

// const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false })
// import 'tiny-slider/dist/tiny-slider.css'

// import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'


// const settings = {
//   container: '.tiny-training-slider',
//   controls: true,
//   mouseDrag: true,
//   loop: true,
//   rewind: true,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayButtonOutput: false,
//   navPosition: 'bottom',
//   controlsText: [
//     '<i class="mdi mdi-chevron-left "></i>',
//     '<i class="mdi mdi-chevron-right"></i>',
//   ],
//   nav: false,
//   speed: 400,
//   gutter: 0,
//   responsive: {
//     992: {
//       items: 3,
//     },
//     767: {
//       items: 2,
//     },
//     320: {
//       items: 1,
//     },
//   },
// }

// export default function TrainingSlider() {
//   return (
//     <div className="grid grid-cols-1 relative mt-3">
//       <div className="tiny-training-slider">
//         <TinySlider settings={settings}>
//           {trainingsData.map((item, index) => (
//             <div className="tiny-slide" key={index}>
//               <TrainingCard item={item} />
//             </div>
//           ))}
//         </TinySlider>
//       </div>
//     </div>
//   )
// }
