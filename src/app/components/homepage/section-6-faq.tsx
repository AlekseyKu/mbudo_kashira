'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Faq from '@/app/components/faq'

const FAQSection = () => {
    return (
        <motion.section
            className="container relative md:my-24 my-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
        >
            <motion.div
                className="lg:col-span-6 md:col-span-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h4 className="text-primary-blue dark:text-white mb-4 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                    FAQ
                </h4>
                <Faq />
            </motion.div>
        </motion.section>
    )
}

export default FAQSection
