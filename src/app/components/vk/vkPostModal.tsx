'use client'

import React from 'react'
import { VKPost } from './vkPostCard'
import { getVisualUrl } from './vkUtil'

interface Props {
  post: VKPost
  onClose: () => void
}

export default function VkPostModal({ post, onClose }: Props) {
  const imageUrl = getVisualUrl(post)
  const text = post.text || post.copy_history?.[0]?.text || 'Без текста'
  const date = new Date(post.date * 1000).toLocaleDateString('ru-RU')

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center px-4 py-12 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg max-w-4xl w-full mt-16 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-gray-600 hover:bg-gray-800 p-2 rounded-full z-10"
          title="Закрыть"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-0 md:gap-6 max-h-[80vh] overflow-hidden">
          <div className="w-full md:w-auto md:max-w-[50%]">
            <img
              src={imageUrl}
              alt="VK Post Full"
              className="w-full h-full object-contain rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>
          <div className="p-6 flex flex-col justify-between w-full overflow-y-auto">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
              <p className="whitespace-pre-line text-base text-slate-800 dark:text-white">
                {text}
              </p>
            </div>
            <div className="mt-4 text-right">
              <a
                href={`https://vk.com/wall${post.owner_id}_${post.id}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary-blue hover:underline"
              >
                Перейти в VK →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
