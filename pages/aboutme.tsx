import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import Footer from '../components/footer'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

// Mosaic tiles. `span` sets the tile's size on large screens; the order fills a 4-column grid with no gaps.
const gallery = [
    { src: '/banner/school.jpg', title: 'School & Instruction', caption: 'With my students: cultivating pedagogy and IT leadership.', tag: 'Life', span: 'lg:col-span-2 lg:row-span-2', position: 'center' },
    { src: '/banner/gamesBg.png', title: 'Worlds That Inspire Me', caption: 'The fantasy worlds behind my love for games and game design.', tag: 'Life', span: 'lg:col-span-2', position: 'center' },
    { src: '/education/gameDev.jpg', title: 'Unity Certified Associate: Game Developer', caption: 'Unity Technologies, November 2022.', tag: 'Achievement', span: 'lg:col-span-2', position: 'center' },
    { src: '/education/vgdNC3.jpg', title: 'NC III: Visual Graphic Design', caption: 'TESDA National Certificate III, October 2023.', tag: 'Achievement', span: '', position: 'top' },
    { src: '/education/COC.jpg', title: 'Conduct Competency Assessment', caption: 'TESDA certificate toward Trainers Methodology I, August 2025.', tag: 'Achievement', span: '', position: 'top' },
    { src: '/education/tmLevel1.jpg', title: 'Trainers Methodology Certificate I', caption: 'TESDA, September 2025.', tag: 'Achievement', span: '', position: 'top' },
    { src: '/ed2025.jpg', title: 'The Person Behind the Portfolio', caption: 'Ed Cabrera, Computer Instructor based in Camarines Sur.', tag: 'Life', span: '', position: 'top' },
];

const quickFacts = [
    { label: 'Goes by', value: 'Ed / Jan-jan' },
    { label: 'Based in', value: 'Pili, Camarines Sur' },
    { label: 'Role', value: 'Computer Instructor' },
    { label: 'Building since', value: '2018' },
];

const AboutMe: NextPage = () => {
    const [active, setActive] = useState<number | null>(null);

    const step = useCallback((dir: number) => {
        setActive((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length));
    }, []);

    // Lightbox keyboard controls: Esc closes, arrows move between photos.
    useEffect(() => {
        if (active === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActive(null);
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [active, step]);

    const current = active === null ? null : gallery[active];

    return (
        <div className="scroll-smooth bg-gray-50 font-main min-h-screen flex flex-col">
            <Head>
                <title>About Me | ElevatED by Code</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>

            <main className="flex-grow pb-24">
                <PageHero eyebrow="Visual Resume & Gallery" title="About Me" subtitle="A curated gallery reflecting my journey and continuous learning." />

                {/* GALLERY MOSAIC */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-16 mb-20">
                    <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                        <div>
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Perspective</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight">Life &amp; Achievements</h2>
                            <div className="h-1.5 w-20 bg-red-500 rounded-full mt-4"></div>
                        </div>
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">{gallery.length} moments &middot; tap to enlarge</p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[15rem] gap-4">
                        {gallery.map((item, i) => (
                            <Reveal key={item.src} delay={(i % 4) * 70} className={`h-64 lg:h-full ${item.span}`}>
                                <button
                                    onClick={() => setActive(i)}
                                    className="group relative block w-full h-full rounded-[1.75rem] overflow-hidden shadow-xl bg-gray-200 text-left focus:outline-none focus:ring-4 focus:ring-red-500/40"
                                    aria-label={`Open ${item.title}`}
                                >
                                    <Image src={item.src} layout="fill" objectFit="cover" objectPosition={item.position} alt={item.title} className="group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                                    <span className={`absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border ${item.tag === 'Achievement' ? 'bg-red-600/80 border-red-400/50 text-white' : 'bg-white/20 border-white/30 text-white'}`}>{item.tag}</span>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <h3 className="text-white font-black uppercase tracking-tight leading-tight">{item.title}</h3>
                                        <p className="text-gray-300 text-xs mt-1">{item.caption}</p>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* QUICK FACTS + FAMILY */}
                <section className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
                    <Reveal className="h-full">
                        <div className="h-full bg-white rounded-[2rem] border border-gray-100 shadow-xl p-7 sm:p-10 flex flex-col">
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px]">At a glance</span>
                            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-gray-900">Quick Facts</h3>
                            <dl className="mt-6 grid grid-cols-2 gap-3">
                                {quickFacts.map((fact) => (
                                    <div key={fact.label} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                                        <dt className="text-[10px] font-black uppercase tracking-widest text-gray-400">{fact.label}</dt>
                                        <dd className="mt-1 font-black text-gray-900">{fact.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-auto pt-6">
                                <Link href="/personal">
                                    <a className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-full transition-colors">
                                        Full profile
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={100} className="h-full">
                        <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 text-white shadow-xl p-7 sm:p-10 flex flex-col">
                            <div className="absolute -top-16 -right-16 w-56 h-56 bg-red-600/30 rounded-full blur-3xl pointer-events-none"></div>
                            <span className="relative text-3xl">🏠</span>
                            <h3 className="relative mt-4 text-2xl font-black uppercase tracking-tight">Family &amp; Life</h3>
                            <blockquote className="relative mt-4 text-lg font-bold leading-snug text-gray-100">
                                &ldquo;Family is my anchor. Everything I build and every milestone I reach is dedicated to them.&rdquo;
                            </blockquote>
                            <p className="relative mt-auto pt-6 text-[10px] font-black uppercase tracking-widest text-gray-400">More about my family is coming in a future update</p>
                        </div>
                    </Reveal>
                </section>
            </main>

            {/* LIGHTBOX */}
            {current && active !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setActive(null)}>
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"></div>
                    <div className="relative w-full max-w-6xl h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-start justify-between gap-4 mb-4 text-white">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-red-400">{current.tag} &middot; {active + 1} / {gallery.length}</p>
                                <h3 className="mt-1 text-lg sm:text-2xl font-black uppercase tracking-tight">{current.title}</h3>
                                <p className="text-sm text-gray-400">{current.caption}</p>
                            </div>
                            <button onClick={() => setActive(null)} className="flex-shrink-0 bg-white/10 hover:bg-red-600 w-11 h-11 rounded-full flex items-center justify-center transition-colors" aria-label="Close">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="relative flex-grow rounded-2xl overflow-hidden">
                            <Image key={current.src} src={current.src} layout="fill" objectFit="contain" alt={current.title} className="role-in" />
                        </div>
                        <button onClick={() => step(-1)} className="absolute left-2 top-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-colors" aria-label="Previous photo">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={() => step(1)} className="absolute right-2 top-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-colors" aria-label="Next photo">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default AboutMe;
