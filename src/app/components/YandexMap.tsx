// // src\app\components\YandexMap.tsx
// 'use client'

// import { useEffect, useRef } from 'react'

// export default function YandexMap() {
//   const mapRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     const init = async () => {
//       // Ждём появления ymaps3
//       while (!('ymaps3' in window)) {
//         await new Promise(res => setTimeout(res, 100))
//       }

//       // @ts-ignore
//       const ymaps3 = window.ymaps3

//       await ymaps3.ready

//       const { YMap, YMapDefaultSchemeLayer, YMapMarker } = ymaps3

//       const map = new YMap(mapRef.current, {
//         location: {
//           center: [38.170132, 54.836831], // lng, lat
//           zoom: 14,
//         },
//       })

//       map.addChild(new YMapDefaultSchemeLayer())

//       const marker = new YMapMarker({ coordinates: [38.170132, 54.836831] })
//       map.addChild(marker)
//     }

//     init()
//   }, [])

//   return <div ref={mapRef} className="w-full h-[500px] rounded-xl" />
// }
