'use client'

import React, { useEffect, useState } from 'react'
import VkPostCard from './vk/vkPostCard'

interface VKPhoto {
  type: string
  photo: {
    sizes: { url: string; width: number; height: number }[]
  }
}

interface VKVideo {
  type: string
  video: {
    image: { url: string; width: number }[]
  }
}

interface VKPost {
  id: number
  text: string
  date: number
  attachments?: (VKPhoto | VKVideo)[]
  owner_id: number
  copy_history?: VKPost[]
}

export default function Blog() {
  const [posts, setPosts] = useState<VKPost[]>([])

  useEffect(() => {
    const fetchCachedPosts = async () => {
      const res = await fetch('/vk-posts-cache.json')
      const json = await res.json()
      if (!json.error) {
        setPosts(json.response.items.slice(0, 3))
      }
    }
    fetchCachedPosts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <VkPostCard key={post.id} post={post} />

      ))}
    </div>
  )
}
