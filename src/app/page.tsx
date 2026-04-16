// src\app\page.tsx
'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'

// import Tagline from './components/navbar/tagline'
// import Counter from './components/counter'
// import VideoModalTwo from './components/video-modal-two'
// import CoursesOne from './components/courses/courses-one'
// import CoursesTwo from './components/courses/courses-two'
// import Client from './components/client'
// import Faq from './components/faq'
// import FaqAbout from './components/faq-about'
// import Blog from './components/blog'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'
import Switcher from './components/switcher'

// import { trainingsData } from './data/data-sport'
import { coachesData } from './data/data-coaches'
// import { faqData } from './data/data-faq'

// import TrainingCard from './components/sport-training/training-card'
// import CoachCard2 from './components/sport-coach/coach-card-2'

import HeroSection from './components/homepage/section-1-hero'
import InfoLineSection from './components/homepage/section-2-infoLine'
import HistorySection from './components/homepage/section-2-5-history'
import TrainingSection from './components/homepage/section-3-trainings'
import CoachSection from './components/homepage/section-4-coaches'
import BlogSection from './components/homepage/section-5-blog'
import FAQSection from './components/homepage/section-6-faq'

import CookieConsent from './components/cookie-popup'

interface Coach {
    id: number
    name: string
    birthdate: string
    sport: string
    category: string
    experience: number
    image: string
}

const COACHES_CACHE_KEY = 'cachedCoaches_v2'

export default function Page() {
    const [shuffledCoaches, setShuffledCoaches] = useState<Coach[]>([])

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const shuffled = [...coachesData].sort(() => Math.random() - 0.5).slice(0, 8)
        const byId = new Map(coachesData.map((coach) => [coach.id, coach]))
        const stored = localStorage.getItem(COACHES_CACHE_KEY)

        if (!stored) {
            localStorage.setItem(COACHES_CACHE_KEY, JSON.stringify(shuffled))
            setShuffledCoaches(shuffled)
            return
        }

        try {
            const parsed = JSON.parse(stored) as Coach[]
            if (!Array.isArray(parsed) || parsed.length === 0) {
                throw new Error('Invalid cached coaches payload')
            }

            // Keep previous order from cache but always hydrate with актуальные данные (включая image).
            const refreshed = parsed
                .map((coach) => byId.get(coach.id))
                .filter((coach): coach is Coach => Boolean(coach))

            if (refreshed.length === 0) {
                throw new Error('Cached coaches are stale')
            }

            localStorage.setItem(COACHES_CACHE_KEY, JSON.stringify(refreshed))
            setShuffledCoaches(refreshed)
        } catch {
            localStorage.setItem(COACHES_CACHE_KEY, JSON.stringify(shuffled))
            setShuffledCoaches(shuffled)
        }
    }, [])

    const coaches = useMemo(() => shuffledCoaches, [shuffledCoaches])

    return (
        <>
            {/* АНИМИРОВАННЫЙ ХЕДЕР */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
            >
                <Navbar tagline={false} navlight={false} />
            </motion.div>

            {/* MAIN */}
            <HeroSection />

            {/* BLOCK LINE INFO */}
            <InfoLineSection />

            {/* BLOCK ИСТОРИЯ ШКОЛЫ */}
            <HistorySection />

            {/* BLOCK ТРЕНИРОВКИ */}
            <TrainingSection />

            {/* BLOCK ТРЕНЕРЫ */}
            <CoachSection coaches={coaches} />

            {/* BLOCK БЛОГ */}
            <BlogSection />

            {/* BLOCK FAQ */}
            <FAQSection />

            {/* BLOCK CTA */}
            <Footer />
            <ScrollToTop />
            <Switcher />

            {/* POPUP */}
            {/* <CookieConsent /> */}
        </>
    )
}