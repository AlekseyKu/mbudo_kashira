// src/app/components/vk/vkPostCard.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { getVisualUrl, getPostText } from './vkUtil'

export interface VKPhoto {
  type: string
  photo: {
    sizes: { url: string; width: number; height: number }[]
  }
}

export interface VKVideo {
  type: string
  video: {
    image: { url: string; width: number }[]
  }
}

export interface VKPost {
  id: number
  text: string
  date: number
  attachments?: (VKPhoto | VKVideo)[]
  owner_id: number
  copy_history?: VKPost[]
}

export default function VkPostCard({
  post,
  onOpen,
  compact = false,
}: {
  post: VKPost
  onOpen?: (post: VKPost) => void
  compact?: boolean
}) {
  const visualUrl = getVisualUrl(post)
  const text = getPostText(post)
  const hasText = text && text !== 'Без текста'
  const date = new Date(post.date * 1000).toLocaleDateString('ru-RU')

  return (
    <div
      className={`flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow dark:shadow-gray-800 transition-all ${
        compact ? 'text-sm' : ''
      } ${hasText ? 'h-[400px]' : 'h-[400px]'}`}
    >
      <div className={`w-full ${hasText ? 'h-[360px]' : 'h-full'} flex items-center justify-center overflow-hidden`}>
        <img
          src={visualUrl}
          className={`w-full h-full ${
            visualUrl.includes('logo_main') ? 'object-contain p-4' : 'object-cover object-top'
          }`}
          alt="VK пост"
        />
      </div>

      {hasText && (
        <div className="p-4 flex flex-col justify-between h-full">
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          <p className="text-base mt-2 text-slate-800 dark:text-white line-clamp-4">{text}</p>
          {onOpen ? (
            <button
              onClick={() => onOpen(post)}
              className="mt-4 text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue px-4 py-2 rounded-md transition"
            >
              Открыть
            </button>
          ) : (
            <Link
              href={`https://vk.com/wall${post.owner_id}_${post.id}`}
              target="_blank"
              className="mt-4 text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white dark:hover:bg-white dark:hover:text-primary-blue px-4 py-2 rounded-md transition text-center"
            >
              Читать
            </Link>
          )}
        </div>
      )}

      {!hasText && (
        <div className="p-4 pt-2 mt-auto">
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          {onOpen ? (
            <button
              onClick={() => onOpen(post)}
              className="mt-4 w-full text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue px-4 py-2 rounded-md transition"
            >
              Открыть
            </button>
          ) : (
            <Link
              href={`https://vk.com/wall${post.owner_id}_${post.id}`}
              target="_blank"
              className="mt-4 w-full text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white dark:hover:bg-white dark:hover:text-primary-blue px-4 py-2 rounded-md transition text-center inline-block"
            >
              Читать
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
