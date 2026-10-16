import Link from 'next/link'
import Image from 'next/image'
import BrandLogo from './BrandLogo'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/workxp', label: 'Experience' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/aboutme', label: 'About Me' },
];

// Site-wide navbar, rendered once for every page from pages/_app.tsx.
const Navigation = () => {
    const router = useRouter();
    const [time, setTime] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const close = () => setMenuOpen(false);
        router.events.on('routeChangeStart', close);
        return () => router.events.off('routeChangeStart', close);
    }, [router.events]);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        const onScroll = () => setScrollY(window.scrollY);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

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

    const isActive = (href: string) => router.pathname === href;
    const scrolled = scrollY > 10;
    const showScroll = scrollY > 400;

    return (
        // Fixed h-20: PageHero and the home hero pull up by exactly this (-mt-20) to sit behind the glass bar.
        <div className="w-full h-20 sticky top-0 z-50 px-3 sm:px-4 pt-3">
            {/* GLASSMORPHISM NAVBAR */}
            <nav className={`max-w-7xl mx-auto rounded-2xl backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${scrolled || menuOpen
                ? 'bg-white/75 shadow-xl shadow-gray-900/10'
                : 'bg-white/70 shadow-md shadow-gray-900/5'
                }`}>
                <div className='flex items-center justify-between gap-3 py-2 pl-3 pr-2 sm:pl-4 sm:pr-3'>

                    {/* LOGO & BRAND */}
                    <Link href="/" aria-label="Ed Cabrera, home" className='group flex items-center flex-shrink-0 rounded-xl p-1 transition-all duration-300 hover:bg-white/80 hover:shadow-md'>
                        <BrandLogo className="h-10 sm:h-11" />
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-gray-900/5 text-[10px] font-black uppercase tracking-widest">
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive(href)
                                ? 'bg-white text-red-600 shadow-md shadow-gray-900/10'
                                : 'text-gray-700 hover:text-gray-950 hover:bg-white/60'
                                }`}>
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* PST CLOCK & MENU TOGGLE */}
                    <div className="flex items-center gap-2">
                        <div className="font-mono text-[11px] md:text-xs bg-gray-900/90 text-white px-3 sm:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 sm:gap-3">
                            <div className="relative w-5 h-3 overflow-hidden rounded-sm flex-shrink-0">
                                <Image src="/flag.gif" fill style={{ objectFit: 'cover' }} alt="PH Flag" />
                            </div>
                            <span className="tracking-widest whitespace-nowrap">
                                {isMounted ? formatPST(time) : "00:00:00 AM"}
                            </span>
                        </div>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-white/80 hover:text-red-600 transition-colors"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                {menuOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-2 text-xs font-black uppercase tracking-widest">
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${isActive(href)
                                ? 'bg-white text-red-600 shadow-md shadow-gray-900/10'
                                : 'text-gray-700 hover:bg-white/60 hover:text-gray-950'
                                }`}>
                                {label}
                                {isActive(href) && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* AUTO SCROLL UP BUTTON */}
            <button
                onClick={scrollTop}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-red-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${showScroll ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
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
