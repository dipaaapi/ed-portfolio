import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";

const Navigation = () => {
    const [time, setTime] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // 1. Digital Clock Timer
        const timer = setInterval(() => setTime(new Date()), 1000);

        // 2. Scroll-to-Top Visibility Logic
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const formatPST = (date: Date): string => {
        return date.toLocaleTimeString("en-US", {
            timeZone: "Asia/Manila",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full sticky top-0 z-50">
            {/* GLASSMORPHISM NAVBAR */}
            <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6 shadow-sm'>
                <ul className='flex items-center justify-between max-w-7xl mx-auto'>
                    
                    {/* LOGO & BRAND */}
                    <li className='font-semibold'>
                        <Link href="/">
                            <a className='flex items-center group'>
                                <div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all">
                                    <Image src="/edLogo.png" alt="Edward Logo" width={45} height={45} className='flex-shrink-0' />
                                </div>
                                <div className="ml-3 hidden md:block">
                                    <p className="text-xs uppercase font-black tracking-tighter text-red-600">Ed Cabrera</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Portfolio 2025</p>
                                </div>
                            </a>
                        </Link>
                    </li>
                    
                    {/* PST CLOCK & FLAG */}
                    <li className="flex items-center gap-4">
                        <div className="hidden lg:flex gap-6 mr-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            <Link href="/skills"><a className="hover:text-red-500 transition-colors">Skills</a></Link>
                            <Link href="/projects"><a className="hover:text-red-500 transition-colors">Projects</a></Link>
                            <Link href="/workxp"><a className="hover:text-red-500 transition-colors">Experience</a></Link>
                        </div>
                        
                        <div className="font-mono text-[11px] md:text-xs bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-3 border border-gray-700">
                            <div className="relative w-5 h-3 overflow-hidden rounded-sm">
                                <Image src="/flag.gif" layout="fill" objectFit="cover" alt="PH Flag" />
                            </div>
                            <span className="tracking-widest">
                                {isMounted ? formatPST(time) : "00:00:00 AM"}
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>

            {/* AUTO SCROLL UP BUTTON */}
            <button
                onClick={scrollTop}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-red-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                    showScroll ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                aria-label="Scroll to top"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    );
}

export default Navigation;