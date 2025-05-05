'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import Tagline from './components/navbar/tagline'
import Navbar from './components/navbar/navbar'
import Counter from './components/counter'
import VideoModalTwo from './components/video-modal-two'
import CoursesOne from './components/courses/courses-one'
import CoursesTwo from './components/courses/courses-two'
import Client from './components/client'
import Faq from './components/faq'
import FaqAbout from './components/faq-about'
import Blog from './components/blog'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'
import Switcher from './components/switcher'

import { counterData, coursesData } from './data'
import { trainingsData } from './data/data-sport'
import { coachesData } from './data/data-coaches'
import { faqData } from './data/data-faq'

import TrainingCard from './components/sport-training/training-card'
import CoachCard2 from './components/sport-coach/coach-card-2'

import HeroSection from './components/homepage/section-1-hero'
import InfoLineSection from './components/homepage/section-2-infoLine'
import TrainingSection from './components/homepage/section-3-trainings'
import CoachSection from './components/homepage/section-4-coaches'
import BlogSection from './components/homepage/section-5-blog'
import FAQSection from './components/homepage/section-6-faq'

export default function Page() {
    const shuffledCoaches = useMemo(() => {
        return coachesData.sort(() => Math.random() - 0.5).slice(0, 8)
    }, [])

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

            {/* BLOCK ТРЕНИРОВКИ */}
            <TrainingSection />

            {/* BLOCK ТРЕНЕРЫ */}
            <CoachSection />

            {/* BLOCK БЛОГ */}
            <BlogSection />

            {/* BLOCK FAQ */}
            <FAQSection />

            {/* BLOCK CTA */}
            <Footer />
            <ScrollToTop />
            <Switcher />
        </>
    )
}
