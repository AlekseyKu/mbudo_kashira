'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import VkPostCard, { VKPost } from '../components/vk/vkPostCard'
import VkPostModal from '../components/vk/vkPostModal'
import AnimatedHead from '../components/animated-head'
import AnimatedDiv from '../components/animated-div'

const PAGE_SIZE = 9
const VK_GROUP_URL = 'https://vk.com/club226006575'

export default function BlogsPage() {
  const [posts, setPosts] = useState<VKPost[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<VKPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  const fetchPosts = async (offset: number, append: boolean) => {
    const res = await fetch(`/api/vk-posts?offset=${offset}&count=${PAGE_SIZE}`)
    const json = await res.json()
    if (json.error) throw new Error(json.error.error_msg)

    const items: VKPost[] = json.response?.items ?? []
    setTotalCount(json.response?.count ?? 0)
    setPosts((prev) => (append ? [...prev, ...items] : items))
  }

  useEffect(() => {
    const loadInitialPosts = async () => {
      try {
        setLoading(true)
        await fetchPosts(0, false)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadInitialPosts()
  }, [])

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true)
      await fetchPosts(posts.length, true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoadingMore(false)
    }
  }

  const hasMore = posts.length < totalCount

  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/сollages-2.webp')`}}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="НАШ БЛОГ" />
            </div>
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
          {loading && (
            <p className="text-center text-slate-500 dark:text-slate-400 mb-6">
              Загрузка постов...
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <AnimatedDiv key={post.id} transition={{ delay: 0.15 * (i % PAGE_SIZE) }}>
                <VkPostCard
                  post={post}
                  onOpen={setSelectedPost}
                />
              </AnimatedDiv>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {hasMore && (
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={loadingMore || loading}
                className="inline-block px-6 py-3 text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white disabled:opacity-60 disabled:cursor-not-allowed dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue rounded-md transition"
              >
                {loadingMore ? 'Загрузка...' : 'Загрузить еще'}
              </button>
            )}
            <a
              href={VK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-medium border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue rounded-md transition"
            >
              Перейти в VK
            </a>
          </div>

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
