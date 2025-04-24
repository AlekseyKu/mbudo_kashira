'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import VkPostCard, { VKPost } from '../components/vk/vkPostCard'
import { getVisualUrl } from '../components/vk/vkUtil'

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
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative text-center">
          <h3 className="md:text-3xl text-2xl font-semibold text-white mt-10">НАШ БЛОГ</h3>
        </div>
      </section>

      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <section className="relative md:py-20 py-10 bg-gray-50 dark:bg-slate-900">
        <div className="container relative">
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">Ошибка при загрузке постов: {error}</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(0, visibleCount).map((post) => (
              <VkPostCard key={post.id} post={post} onOpen={setSelectedPost} />
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
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center px-4 py-12 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg max-w-4xl w-full mt-16 relative overflow-hidden">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 text-white bg-gray-600 hover:bg-gray-800 p-2 rounded-full z-10"
              title="Закрыть"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-0 md:gap-6 max-h-[80vh] overflow-hidden">
              <div className="w-full md:w-auto md:max-w-[50%]">
                <img
                  src={getVisualUrl(selectedPost)}
                  alt="VK Post Full"
                  className="w-full h-full object-contain rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-6 flex flex-col justify-between w-full overflow-y-auto">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(selectedPost.date * 1000).toLocaleDateString('ru-RU')}
                  </p>
                  <p className="whitespace-pre-line text-base text-slate-800 dark:text-white">
                    {selectedPost.text || selectedPost.copy_history?.[0]?.text || 'Без текста'}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <a
                    href={`https://vk.com/wall${selectedPost.owner_id}_${selectedPost.id}`}
                    target="_blank"
                    className="text-sm text-primary-blue hover:underline"
                  >
                    Перейти в VK →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}
