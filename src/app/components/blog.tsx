'use client'

import React, { useEffect, useState } from 'react'
import VkPostCard, { VKPost } from './vk/vkPostCard'
import VkPostModal from './vk/vkPostModal'

export default function Blog() {
  const [posts, setPosts] = useState<VKPost[]>([])
  const [selectedPost, setSelectedPost] = useState<VKPost | null>(null)

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <VkPostCard
            key={post.id}
            post={post}
            onOpen={setSelectedPost}
            compact
          />
        ))}
      </div>

      {selectedPost && (
        <VkPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  )
}
