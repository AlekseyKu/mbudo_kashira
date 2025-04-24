// src\app\index-five\page.tsx
import React from 'react'
import { useMemo } from 'react'
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

interface CoachesData{
    id: number;
    name: string;
    sport: string;
    category: string;
    experience: number;    
}

interface TrainingsData{
    id: number;
    image: string;
    title: string;
    desc: string;
}


interface CounterData{
    value: number;
    symbol: string;
    title: string;
}
interface CoursesData{
    id: number;
    image: string;
    tag1: string;
    tag2: string;
    amount: number;
    lessons: number;
    students: number;
    title: string;
    desc: string;
    user: string;
    name: string;
}

export default function Page() {
    const shuffledCoaches = useMemo(() => {
        return coachesData
          .sort(() => Math.random() - 0.5) // перемешка
          .slice(0, 8)                     // только 8
      }, [])
    return (
        <>
            {/* <Tagline/> */}
            <Navbar tagline={false} navlight={false}/>

            {/* MAIN */}
            <section className="relative overflow-hidden md:py-32 py-30">
                <div className="container relative md:mt-16 mt-6">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-7">
                            <h6 className="text-primary-blue dark:text-slate-500 font-semibold mb-3 uppercase">Cпортивная школа «Кашира»</h6>
                            <h1 className="font-bold text-primary-blue dark:text-white lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">МЕСТО СИЛЫ. <br/>  <span className="bg-gradient-to-l from-accent-red to-primary-blue dark:to-white text-transparent bg-clip-text">ПРОСТРАНСТВО БУДУЩИХ ПОБЕД.</span></h1>
                            <p className="text-slate-500 text-lg max-w-xl">Наша миссия — воспитывать чемпионов <br/> и сильных личностей через спорт.</p>
                            
                        <VideoModalTwo/>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="relative md:shrink-0">
                                    <Image src='/images/main/1.webp' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-s-full" alt=""/>

                                    <div className="overflow-hidden after:content-[''] after:absolute after:size-12 after:bg-accent-red after:top-0 after:-start-6 after:-z-1 after:rounded-full"></div>
                                </div>
                                
                                <div className="relative md:shrink-0">
                                    <Image src='/images/main/2.webp' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-full" alt=""/>
                                    
                                    <div className="overflow-hidden after:content-[''] after:absolute after:size-24 after:bg-primary-blue/40 after:-top-10 after:-end-0 after:-z-1 after:rounded-lg after:rotate-[36deg]"></div>
                                </div>
                                
                                <div className="relative md:shrink-0">
                                    <Image src='/images/main/5.webp' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-xl" alt=""/>
                                    
                                    <div className="overflow-hidden after:content-[''] after:absolute after:size-40 after:bg-primary-blue after:-bottom-10 after:-start-10 after:-z-1 after:rounded-full"></div>
                                </div>
                                
                                <div className="relative md:shrink-0">
                                    <Image src='/images/main/4.webp' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-e-full" alt=""/>
                                    
                                    <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-primary-blue after:bottom-10 after:-end-12 after:-z-1 after:rounded-md"></div>
                                    <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-accent-red/60 after:-bottom-12 after:start-10 after:-z-1 after:rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK LINE INFO */}
            <section className="relative py-12 bg-primary-blue">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center gap-6">

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                <Counter className="counter-value" value="5"></Counter>
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Объектов</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                <Counter className="counter-value" value={trainingsData.length}></Counter>
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Видов спорта</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                <Counter className="counter-value" value={coachesData.length}></Counter>
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Тренеров</h5>
                            </div>

                            <div className="counter-box text-center">
                                <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2">
                                <Counter className="counter-value" value="1000"></Counter>
                                +
                                </h1>
                                <h5 className="counter-head text-white uppercase font-medium">Спортсменов</h5>
                            </div>
                            </div>

                            </div>
                        </div>
                    </div>
            </section>

            <section className="relative md:py-24 py-16">
            {/* BLOCK НАШИ ТРЕНИРОВКИ */}
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="text-primary-blue  dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">НАШИ ТРЕНИРОВКИ</h4>

                    <p className="text-slate-500 max-w-xl mx-auto">Откройте для себя разнообразие спортивных направлений и возможностей с нашей школой.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {trainingsData.slice(0, 6).map((item, index) => (
                        <TrainingCard item={item} key={index} />
                    ))}
                </div>
            
                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {coursesData.slice(0,6).map((item:TrainingsData,index:number)=>{
                    return(
                        <CoursesOne item={item} key={index}/>
                    )
                    })}
                </div> */}

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link href="/trainings" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">ВСЕ ТРЕНИРОВКИ <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
                </div>
            </div>
            
            {/* BLOCK НАШИ ТРЕНЕРЫ */}                    
            <div className="container relative lg:mt-24 mt-16" >

                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="text-primary-blue  dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">НАШИ ТРЕНЕРЫ</h4>

                    <p className="text-slate-500 max-w-xl mx-auto">Познакомьтесь с нашими профессиональными тренерами, которые помогут вам достичь спортивных высот.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6 justify-center">
                    {shuffledCoaches.map((coach, index) => (
                        <CoachCard2
                        key={index}
                        item={{
                            id: coach.id,
                            image: coach.image,
                            title: coach.name,
                            sport: coach.sport,
                            category: coach.category,
                            experience: coach.experience,
                            // desc: `${coach.sport} · ${coach.category} · ${coach.experience} лет опыта`
                        }}
                        />
                    ))}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link href="/coaches" className="text-slate-400 hover:text-accent-red duration-500 ease-in-out">ВСЕ ТРЕНЕРЫ <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
                </div>

            </div>

            {/* BLOCK НАШ БЛОГ */}
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="text-primary-blue dark:text-accent-red mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">НАШ БЛОГ</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>

                <Blog/>
            </div>
            
            {/* BLOCK ОТЗЫВЫ */}
            {/* <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <Client/>
            </div> */}

            {/* BLOCK FAQ */}
            <div className="container relative md:mt-24 mt-16">

                <div className="lg:col-span-6 md:col-span-5">
                    <h4 className="text-primary-blue dark:text-white mb-4 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">FAQ</h4>

                    <Faq/>
                </div>
            </div>

        </section>

        <Footer/>
        <ScrollToTop/>
        <Switcher/>
        </>
    )
}
