'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import BuyBtn from './buy-btn';
import Image from 'next/image';

export default function Navbar({navlight,tagline}:{navlight:any, tagline:any}) {
    let [toggle, setToggle] = useState<Boolean | undefined>(false)
    let [manu, setManu] = useState<any>(false);
    let [subManu, setSubManu] = useState<any>();
    let[scroll,setScroll] = useState<boolean>(false)

    const pathname = usePathname()

    const toggleMenu = () =>{
        setToggle(!toggle)
    }

    useEffect(()=>{
        setManu(pathname)
        window.scrollTo(0,0)

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }
        window.addEventListener('scroll',handlerScroll)

        return () => {
            window.removeEventListener('scroll',handlerScroll)
          };
    },[])

  return (
    <>
        <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''} ${tagline ? 'tagline-height' : ''}`}>
            <div className="container relative">
                {!navlight && 
                    <Link className="logo" href="/">
                        <Image src='/images/logo_h.png' width={300} height={75} className="inline-block dark:hidden" alt=""/>
                        <Image src='/images/logo_h_dark.png' width={300} height={75} className="hidden dark:inline-block" alt=""/>
                    </Link>
                }
                {navlight && 
                    <Link className="logo" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo_h.png' width={300} height={75} className="l-dark" alt=""/>
                            <Image src='/images/logo_h_dark.png' width={300} height={75} className="l-light" alt=""/>
                        </span>
                        <Image src='/images/logo_h_dark.png' width={300} height={75} className="hidden dark:inline-block" alt=""/>
                    </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href='' className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <BuyBtn navlight={navlight}/> */}

                <div id="navigation" className={`${toggle ? 'block' : 'none'}`}>
                    <ul className={`navigation-menu justify-end ${navlight ? 'nav-light' : ''}`}>
                        <li className={`has-submenu parent-parent-menu-item ${['/','/index-two','/index-three','/index-four','/index-five'].includes(manu) ? 'active' : ''}`}>
                            <Link href="/" onClick={()=>setSubManu(subManu === '/index-item' ? '' : '/index-item')}>
                                ГЛАВНАЯ
                            </Link>
                        </li>

                        <li>
                            <Link href="/aboutus" className={`sub-menu-item ${manu === '/aboutus' ? 'text-accent-red' : ''}`}>
                                О НАС
                            </Link>
                        </li>


                        {/* === ТРЕНИРОВКИ === */}
                        <li className={`has-submenu parent-parent-menu-item ${['/trainings', '/coaches'].includes(manu) ? 'active' : ''}`}>
                            <Link
                                href="#"
                                onClick={() => setSubManu(subManu === '/cours-item' ? '' : '/cours-item')}
                                className={`${['/trainings', '/coaches'].includes(manu) ? 'text-accent-red' : ''}`}
                            >
                                ТРЕНИРОВКИ
                            </Link>
                            <span className="menu-arrow"></span>
                            <ul className={`submenu ${['/cours-item'].includes(subManu) ? 'open' : ''}`}>
                                <li>
                                    <Link href="/trainings" className={`sub-menu-item ${manu === '/trainings' ? 'text-accent-red' : ''}`}>
                                        НАШИ ТРЕНИРОВКИ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/coaches" className={`sub-menu-item ${manu === '/coaches' ? 'text-accent-red' : ''}`}>
                                        НАШИ ТРЕНЕРЫ
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/blog" className={`sub-menu-item ${manu === '/blog' ? 'text-accent-red' : ''}`}>
                                НАШ БЛОГ
                            </Link>
                        </li>
                

                        {/* <li className={`has-submenu parent-parent-menu-item ${['/features','/pricing','/instructors','/faqs','/blogs','/blog-sidebar','/blog-detail'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(subManu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/auth-item','/blog-item','/special-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={manu === '/features' ? 'active' : ''}><Link href="/features" className="sub-menu-item">Features</Link></li>
                                <li className={manu === '/pricing' ? 'active' : ''}><Link href="/pricing" className="sub-menu-item">Pricing</Link></li>
                                <li className={manu === '/instructors' ? 'active' : ''}><Link href="/instructors" className="sub-menu-item">Instructors</Link></li>
                                <li className={manu === '/faqs' ? 'active' : ''}><Link href="/faqs" className="sub-menu-item">Faqs</Link></li>
                                <li className="has-submenu parent-menu-item"><Link href="#" onClick={()=>setSubManu(subManu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link href="/login" className="sub-menu-item">Login</Link></li>
                                        <li><Link href="/signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link href="/forgot-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/blogs','/blog-sidebar','/blog-detail'].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={()=>setSubManu(subManu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blog-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/blogs' ? 'active' : ''}><Link href="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={manu === '/blog-sidebar' ? 'active' : ''}><Link href="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                        <li className={manu === '/blog-detail' ? 'active' : ''}><Link href="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#" onClick={()=>setSubManu(subManu === '/special-item' ? '' : '/special-item')}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/special-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link href="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link href="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link href="/404" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li> */}

                        <li>
                            <Link href="/contact" className={`sub-menu-item ${manu === '/contact' ? 'text-accent-red' : ''}`}>
                                КОНТАКТЫ
                            </Link>
                        </li>
                
                        {/* <li className={manu === '/contactus' ? 'active' : ''}><Link href="/contact" className="sub-menu-item">КОНТАКТЫ</Link></li> */}
                    </ul>
                </div>
            </div>
        </nav>
       
    </>
  )
}
