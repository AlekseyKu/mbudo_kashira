'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Blog from '@/app/components/blog'

const BlogSection = () => {
    return (
        <motion.section
            className="container relative md:mt-24 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                className="grid grid-cols-1 pb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h4 className="text-primary-blue dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                    НАШ БЛОГ
                </h4>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Читайте. Вдохновляйтесь. Будьте с нами.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Blog />
            </motion.div>

            <motion.div
                className="grid md:grid-cols-12 grid-cols-1 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="md:col-span-12 text-center">
                    <Link href="/blog" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">
                        ПЕРЕЙТИ В БЛОГ <i className="mdi mdi-arrow-right align-middle"></i>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default BlogSection
