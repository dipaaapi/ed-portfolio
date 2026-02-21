import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '../components/nav'
import Footer from '../components/footer'

const AboutMe: NextPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="scroll-smooth bg-gray-50 font-main min-h-screen flex flex-col">
            <Head>
                <title>About Me | ElevatED by Code</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className="flex-grow pb-24">
                {/* HERO SECTION */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 py-32 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 blur-3xl"></div>
                    <div className="relative z-10 w-11/12 md:w-10/12 mx-auto">
                        <span className="text-red-200 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visual Resume & Gallery</span>
                        <h1 className='text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl'>About Me</h1>
                        <div className="h-1.5 w-32 bg-white mx-auto my-6 rounded-full shadow-lg"></div>
                        <p className="text-sm md:text-lg font-light tracking-[0.2em] opacity-90 uppercase max-w-2xl mx-auto italic">
                            A curated gallery reflecting my journey and continuous learning.
                        </p>
                    </div>
                </div>

                {/* GALLERY SECTION */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-[-3rem] relative z-20 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 mb-20">
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Perspective</span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                            Life & Achievements Gallery
                            <span className="h-1.5 w-24 bg-red-500 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {/* Image 1: school.jpg */}
                        <div onClick={() => setSelectedImage('/banner/school.jpg')} className="group rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-gray-50 aspect-video relative">
                            <Image src="/banner/school.jpg" layout="fill" objectFit="cover" alt="School Background" className="group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-2">School & Instruction</h3>
                                <p className="text-red-300 text-xs italic font-medium">Cultivating pedagogy and IT leadership.</p>
                                <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-4 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    Click to Enlarge
                                </p>
                            </div>
                        </div>

                        {/* Image 2: gamesBg.png */}
                        <div onClick={() => setSelectedImage('/banner/gamesBg.png')} className="group rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-gray-50 aspect-video relative">
                            <Image src="/banner/gamesBg.png" layout="fill" objectFit="cover" alt="Games Background" className="group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-2">Setup & Productivity</h3>
                                <p className="text-red-300 text-xs italic font-medium">My personalized development and gaming rig.</p>
                                <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-4 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    Click to Enlarge
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERSONAL INFO & FAMILY INFO PANELS */}
                <section className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 relative z-20">
                    {/* Personal Info Panel */}
                    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl">👤</div>
                            <div>
                                <h3 className="text-2xl font-black uppercase text-gray-900 tracking-tight">Personal Info</h3>
                                <div className="h-1 w-12 bg-blue-500 rounded-full mt-2"></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex-grow flex flex-col items-center justify-center text-center">
                            <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            <h4 className="font-bold text-gray-700 uppercase tracking-widest text-sm mb-2">Update in Progress</h4>
                            <p className="text-gray-500 text-xs italic leading-relaxed">Detailed personal information is currently being finalized and will be fully available to the public soon.</p>
                        </div>
                    </div>

                    {/* Family Info Panel */}
                    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 text-2xl">👨‍👩‍👧‍👦</div>
                            <div>
                                <h3 className="text-2xl font-black uppercase text-gray-900 tracking-tight">Family Info</h3>
                                <div className="h-1 w-12 bg-emerald-500 rounded-full mt-2"></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex-grow flex flex-col items-center justify-center text-center">
                            <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            <h4 className="font-bold text-gray-700 uppercase tracking-widest text-sm mb-2">Update in Progress</h4>
                            <p className="text-gray-500 text-xs italic leading-relaxed">Comprehensive family information is not yet complete and will be fully shown in an upcoming update.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* FULLSCREEN IMAGE MODAL */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"></div>
                    <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 md:-right-12 text-gray-400 hover:text-white transition-colors p-2"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src={selectedImage} layout="fill" objectFit="contain" alt="Fullscreen View" className="pointer-events-none" />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default AboutMe;
