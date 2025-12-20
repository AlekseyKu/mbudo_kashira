'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HistorySection = () => {
    return (
        <motion.section
            className="relative md:pt-24 pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
        >
            <div className="container relative">
                <motion.div
                    className="grid grid-cols-1 pb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-primary-blue dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                        ИСТОРИЯ ШКОЛЫ
                    </h4>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-12 grid-cols-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                            <p>
                                Прежде чем начинать исторический экскурс о развитии нашей спортивной школы, следует вспомнить, что данная деятельность является одной из составляющих звеньев большой и очень важной системы внешкольного воспитания детей в нашей стране, начало которой было положено в период становления Советского Союза.
                            </p>
                            <p>
                                Началось все в 1948 году, когда в Кашире образовалась детско-юношеская спортивная школа. Возглавил ее Алексей Петрович Зайцев. Проработал он на этом посту недолго – всего год. Его сменил Лев Дмитриевич Ягодин, спортсмен-разрядник по спортивной гимнастике. Он был директором спортшколы 28 лет.
                            </p>
                            <p>
                                В те времена спортивная школа состояла всего из двух отделений: гимнастики и легкой атлетики совместно с лыжами. Спортшкола базировалась в общеобразовательных школах, а тренерами были в основном учителя физкультуры. Но время шло, и спортивная школа развивалась.
                            </p>
                            <p>
                                В процессе своего развития спортивная школа превратилась в мощную спортивную организацию дополнительного образования детей, юношества, молодежи. Спортшкола воспитала несколько поколений физкультурников и спортсменов, многие из которых достигли успеха на спортивных аренах нашей страны и мира.
                            </p>
                            <p>
                                Сегодня спортивная школа «КАШИРА» имеет девять отделений по различным видам спорта. У каждого отделения есть своя история и отдельная летопись побед. Много тренеров прошло через СШ, и каждый внёс свой вклад в работу школы. Всех не перечислить, но все они – профессионалы своего дела.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-12 grid-cols-1 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="md:col-span-12 text-center">
                        <Link href="/aboutus" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">
                            О ШКОЛЕ <i className="mdi mdi-arrow-right align-middle"></i>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HistorySection

