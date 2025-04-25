// src/app/api/vk-posts/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CACHE_PATH = path.resolve(process.cwd(), 'public/vk-posts-cache.json')
const CACHE_TTL = 24 * 60 * 60 * 1000  // 24 часа в мс
const CACHE_TTL_SEC = CACHE_TTL / 1000

export async function GET() {
  try {
    const token = process.env.NEXT_PUBLIC_VK_TOKEN!
    const ownerId = -177031794

    // 1. Локальный файловый кеш в dev
    if (process.env.NODE_ENV === 'development' && fs.existsSync(CACHE_PATH)) {
      const stats = fs.statSync(CACHE_PATH)
      if (Date.now() - stats.mtimeMs < CACHE_TTL) {
        const cached = fs.readFileSync(CACHE_PATH, 'utf-8')
        return NextResponse.json(JSON.parse(cached), {
          headers: {
            'Cache-Control': `public, max-age=0, s-maxage=${CACHE_TTL_SEC}, stale-while-revalidate=59`
          }
        })
      }
    }

    // 2. Запрос к VK API
    const res = await fetch(
      `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=10&access_token=${token}&v=5.131`
    )
    const data = await res.json()

    // 3. Пишем в файл только в dev, игнорим ошибки в prod
    if (process.env.NODE_ENV === 'development') {
      try {
        fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf-8')
      } catch {
        // например на Vercel — смонтировано readonly, просто пропускаем
      }
    }

    // 4. Отдаём JSON с HTTP-кешем на CDN
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': `public, max-age=0, s-maxage=${CACHE_TTL_SEC}, stale-while-revalidate=59`
      }
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}


// ПОДХОД С ЗАПИСЬЮ КЭША В ЛОКАЛКЕ + должен подходить для VPS /TODO
// // src/app/api/vk-posts/route.ts
// import { NextResponse } from 'next/server'
// import fs from 'fs'
// import path from 'path'

// const CACHE_PATH = path.resolve('./public/vk-posts-cache.json')
// const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 часа

// export async function GET() {
//   try {
//     const token = process.env.NEXT_PUBLIC_VK_TOKEN
//     const ownerId = -177031794

//     // 1. Проверка наличия кэша
//     if (fs.existsSync(CACHE_PATH)) {
//       const stats = fs.statSync(CACHE_PATH)
//       const age = Date.now() - stats.mtimeMs

//       if (age < CACHE_TTL) {
//         const cached = fs.readFileSync(CACHE_PATH, 'utf-8')
//         return NextResponse.json(JSON.parse(cached))
//       }
//     }

//     // 2. Запрос к VK API (если кэш устарел)
//     const res = await fetch(
//       `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=10&access_token=${token}&v=5.131`
//     )

//     const data = await res.json()

//     // 3. Сохраняем кэш
//     fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf-8')

//     return NextResponse.json(data)
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }
