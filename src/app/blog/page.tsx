'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import VkPostCard, { VKPost } from '../components/vk/vkPostCard'
import VkPostModal from '../components/vk/vkPostModal'

export default function BlogsPage() {
  const [posts, setPosts] = useState<VKPost[]>([])
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<VKPost | null>(null)
  const [visibleCount, setVisibleCount] = useState(9)

  useEffect(() => {
    const fetchVKPosts = async () => {
      try {
        const res = await fetch('/api/vk-posts')
        const json = await res.json()
        if (json.error) throw new Error(json.error.error_msg)
        setPosts(json.response.items)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchVKPosts()
  }, [])

  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <section
        className="relative table w-full py-32 lg:py-30 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url('/images/sport/сollages-2.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="container relative text-center">
          <h3 className="md:text-3xl text-2xl font-semibold text-white mt-10">
            НАШ БЛОГ
          </h3>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <section className="relative md:py-20 py-10 bg-gray-50 dark:bg-slate-900">
        <div className="container relative">
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
              Ошибка при загрузке постов: {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(0, visibleCount).map((post) => (
              <VkPostCard
                key={post.id}
                post={post}
                onOpen={setSelectedPost}
              />
            ))}
          </div>

          {visibleCount < posts.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-6 py-3 text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white rounded-md transition"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedPost && (
        <VkPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
