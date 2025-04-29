import React from 'react'
import Link from 'next/link'

import { FiChevronRight, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { IconType } from 'react-icons'

import { footerLink1, footerLink2, footerSocial } from '../data'
import Image from 'next/image'

interface FooterSocial{
    link: string;
    icon: IconType;
}

const menuLinks = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/aboutus' },
    { name: 'Тренировки', href: '/trainings' },
    { name: 'Тенеры', href: '/coaches' },
    { name: 'Расписание', href: '/tables' },
    { name: 'Наш блог', href: '/blog' },
    { name: 'Документы', href: '/docs' },
    { name: 'Контакты', href: '/contact' },
]

export default function Footer() {
  return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-9 md:col-span-12">
                                    <Link href="#" className="text-[22px] focus:outline-none">
                                        <Image src='/images/logo_h_dark.png' width={300} height={100} alt=""/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Мы существуем, чтобы дети становились сильными — телом, духом и характером.
                                                                        Чтобы они учились побеждать, проигрывать, вставать и идти дальше.
                                                                        Чтобы спорт стал для них не кружком, а дорогой в настоящую жизнь.
                                    </p>

                                    <div className="flex mt-6">
                                        <FiMapPin className="iconoir-map-pin align-middle text-2xl text-accent-red me-2"/>
                                        <div className="">
                                            <h6 className="text-gray-300">Московская область, г.Кашира, ул.Металлургов, дом 7, корпус 2 </h6>
                                        </div>
                                    </div>
                            
                                    <div className="flex mt-4">
                                        <FiPhoneCall className="iconoir-phone align-middle text-2xl text-accent-red me-2"/>
                                        <div className="">
                                            <a href="tel:+152534-468-854" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">8 496-696-7689</a>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="lg:col-span-3 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">МЕНЮ</h5>

                                    <ul className="grid-cols-2 list-none footer-list mt-3">
                                        {menuLinks.map((item, index) => (
                                            <li key={index} className="mt-[10px] first:mt-0 flex items-center">
                                            <FiChevronRight className="text-gray-400 align-middle me-1" />
                                            <Link href={item.href} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                {item.name}
                                            </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        
                                {/* <div className="lg:col-span-2 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Our Institute</h5>

                                    <ul className="list-none footer-list mt-6">
                                        {footerLink2.map((item:any,index:number)=>{
                                            return(
                                                <li key={index} className="mt-[10px] first:mt-0 flex items-center"><FiChevronRight className="text-gray-400 align-middle me-1"></FiChevronRight><Link href="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{item}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div> */}
    
                                {/* <div className="lg:col-span-4 md:col-span-6">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Get In Touch</h5>
                            
                                    <div className="mt-6">
                                        <Link href="" className='mx-[2px]'><Image src='/images/app.png' width={151} height={48} className="h-12 inline-block mb-1" alt=""/></Link>
                                        <Link href="" className='mx-[2px]'><Image src='/images/play.png' width={151} height={48} className="h-12 inline-block mb-1" alt=""/></Link>
                                    </div>

                                    <ul className="list-none mt-4">
                                        {footerSocial.map((item:FooterSocial,index:number)=>{
                                            let Icon = item.icon
                                            return(
                                                <li className="inline mx-[2px]" key={index}><Link href={item.link} target="_blank" className="size-7 inline-flex justify-center items-center text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Icon /></Link></li>
                                                
                                            )
                                        })}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="md:text-start text-center">
                            {/* <p className="mb-0 text-gray-300">© {new Date().getFullYear()} МБУДО Cпортивная школа «Кашира» <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://dexstudioapp.site/" target="_blank" className="text-reset">DEXSA</Link>.</p> */}
                            <p className="mb-0 text-gray-300">{new Date().getFullYear()} © МБУДО Cпортивная школа «Кашира»</p>
                        </div>

                        {/* <ul className="list-disc footer-list md:text-end text-center space-x-3">
                            <li className="inline-block"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link href="/terms" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Terms</Link></li>
                            <li className="inline-block mt-[10px] md:mt-0"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link href="/privacy" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Privacy</Link></li>
                            <li className="inline-block mt-[10px] md:mt-0"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link href="/login" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Login</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </footer>
  )
}
