// src/app/api/vk-posts/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CACHE_PATH = path.resolve('./public/vk-posts-cache.json')
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 часа

export async function GET() {
  try {
    const token = process.env.NEXT_PUBLIC_VK_TOKEN
    const ownerId = -177031794

    // 1. Проверка наличия кэша
    if (fs.existsSync(CACHE_PATH)) {
      const stats = fs.statSync(CACHE_PATH)
      const age = Date.now() - stats.mtimeMs

      if (age < CACHE_TTL) {
        const cached = fs.readFileSync(CACHE_PATH, 'utf-8')
        return NextResponse.json(JSON.parse(cached))
      }
    }

    // 2. Запрос к VK API (если кэш устарел)
    const res = await fetch(
      `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=10&access_token=${token}&v=5.131`
    )

    const data = await res.json()

    // 3. Сохраняем кэш
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf-8')

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
