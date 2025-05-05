'use client'

import React from 'react'
import Counter from '@/app/components/counter'
import { trainingsData } from '@/app/data/data-sport'
import { coachesData } from '@/app/data/data-coaches'

const InfoLineSection = () => {
    return (
        <section className="relative py-12 bg-primary-blue">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center gap-6">

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                    <Counter className="counter-value" value="5" />
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Объектов</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                    <Counter className="counter-value" value={trainingsData.length} />
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Видов спорта</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                    <Counter className="counter-value" value={coachesData.length} />
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Тренеров</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                    <Counter className="counter-value" value="1000" />+
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Спортсменов</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoLineSection
