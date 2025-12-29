import type { NextPage } from 'next'
import React, { useState, useRef } from 'react'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Hobbies: NextPage = () => {
    // 1. DATA ARRAYS
    const games = [
        { name: "League of Legends", link: "https://leagueoflegends.com/", img: "/leagueoflegends.png" },
        { name: "Terraria", link: "https://terraria.org/", img: "/terraria.png" },
        { name: "Honor of King", link: "https://www.honorofkings.com/", img: "/hok.png" },
        { name: "Clash of Clans", link: "https://supercell.com/en/games/clashofclans/", img: "/coc.webp" },
        { name: "Wuthering Waves", link: "https://wutheringwaves.kurogames.com/en/", img: "/wuwaNew.png" },
        { name: "The Sims 4", link: "https://www.ea.com/games/the-sims/the-sims-4", img: "/theSims4.png" },
        { name: "Yuri's Revenge", link: "https://cncnz.com/games/yuris-revenge/", img: "/yuri.png" },
        { name: "Tales Series", link: "https://en.wikipedia.org/wiki/Tales_(video_game_series)", img: "/talesofseries.png" },
        { name: "Ragnarok Online", link: "http://iro.ragnarokonline.com/", img: "/ragnarok.png" }
    ];

    const animes = [
        { name: "Dragon Ball Super", link: "https://en.wikipedia.org/wiki/Dragon_Ball_Super", img: "/dragonball.png" },
        { name: "One Piece", link: "https://en.wikipedia.org/wiki/One_Piece", img: "/onepiece.jpg" },
        { name: "Naruto", link: "https://en.wikipedia.org/wiki/Naruto", img: "/naruto.png" },
        { name: "YuYu Hakusho", link: "https://en.wikipedia.org/wiki/YuYu_Hakusho", img: "/yuyuhakusho.jpg" },
        { name: "Fushigi Yûgi", link: "https://en.wikipedia.org/wiki/Fushigi_Y%C3%BBgi", img: "/fushigi.jpg" },
        { name: "Fullmetal Alchemist", link: "https://en.wikipedia.org/wiki/Fullmetal_Alchemist", img: "/fullmetal.jpg" },
        { name: "Demon Slayer", link: "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba", img: "/kimetsunoYaiba.jpg" },
        { name: "Campfire Cooking in Another World with My Absurd Skill", link: "https://en.wikipedia.org/wiki/Campfire_Cooking_in_Another_World_with_My_Absurd_Skill", img: "/campfireCooking.jpg" },
        { name: "Tokyo Ghoul", link: "https://en.wikipedia.org/wiki/Tokyo_Ghoul", img: "/tokyoGhoul.jpg" },
        { name: "Dr. Stone", link: "https://en.wikipedia.org/wiki/Dr._Stone", img: "/drstone.jpg" },
        { name: "One Punch Man", link: "https://en.wikipedia.org/wiki/One-Punch_Man", img: "/onepunch.png" },
        { name: "My Hero Academia", link: "https://en.wikipedia.org/wiki/My_Hero_Academia", img: "/myheroacademia.png" },
        { name: "The Seven Deadly Sins", link: "https://en.wikipedia.org/wiki/The_Seven_Deadly_Sins_(manga)", img: "/7deadlysins.png" },
    ];

    const mangaGenres = [
        { name: "Isekai", icon: "🌌", desc: "Transported to another world, starting over in a fantasy realm." },
        { name: "Fantasy", icon: "🔮", desc: "Magic, supernatural events, and mythical creatures in imaginary lands." },
        { name: "Adventure", icon: "🗺️", desc: "Epic journeys, exploration, and character growth through travel." },
        { name: "Comedy", icon: "😂", desc: "Designed to entertain through humor and funny character interactions." },
        { name: "Magic", icon: "✨", desc: "Centered around supernatural powers and arcane schools." }
    ];

    // 2. CAROUSEL LOGIC
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="scroll-smooth bg-gray-50 font-main">
            <Head>
                <title>Personal Interests Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className="pb-20">
                {/* HERO HEADER */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-600 py-20 text-white text-center shadow-xl">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>Personal Interests</h1>
                    <div className="h-1 w-24 bg-white mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-[0.4em] opacity-80 uppercase">Games | Anime | Manga</p>
                </div>

                {/* SECTION 1: GAMING GRID (Clean Glassmorphism) */}
                <section className="w-10/12 mx-auto -mt-10 mb-20">
                    <div className="bg-gray-100 p-10 rounded-3xl shadow-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                             <h2 className="text-2xl font-black uppercase text-gray-800">Gaming Library</h2>
                             <div className="h-1 flex-grow bg-blue-500 rounded-full hidden md:block"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {games.map((game, i) => (
                                <Link key={i} href={game.link}>
                                    <a target="_blank" className="hover:scale-110 transition-transform duration-300 flex justify-center grayscale hover:grayscale-0">
                                        <Image src={game.img} alt={game.name} width={200} height={100} objectFit="contain" />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: ANIME CAROUSEL (Dark Mode Aesthetic) */}
                <section className="w-full bg-gray-900 py-20 text-white shadow-2xl relative overflow-hidden">
                    <div className="w-10/12 mx-auto relative">
                        <h2 className="text-center font-black text-3xl uppercase mb-12 tracking-widest text-blue-400">Anime Collection</h2>
                        
                        {/* Custom Buttons */}
                        <button onClick={() => scroll('left')} className="absolute -left-6 md:-left-12 top-1/2 z-20 bg-blue-600/20 backdrop-blur-md p-4 rounded-full hover:bg-blue-600 transition-all text-xl">❮</button>
                        <button onClick={() => scroll('right')} className="absolute -right-6 md:-right-12 top-1/2 z-20 bg-blue-600/20 backdrop-blur-md p-4 rounded-full hover:bg-blue-600 transition-all text-xl">❯</button>

                        <div ref={scrollRef} className="flex overflow-x-hidden space-x-8 pb-10 scroll-smooth snap-x">
                            {animes.map((anime, i) => (
                                <Link key={i} href={anime.link}>
                                    <a target="_blank" className="min-w-[220px] md:min-w-[280px] snap-center group">
                                        <div className="relative h-[320px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent group-hover:border-blue-500 transition-all">
                                            <Image src={anime.img} alt={anime.name} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <p className="font-bold uppercase tracking-widest text-sm">{anime.name}</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: MANGA GENRE (Modern Cards) */}
                <section className="w-10/12 mx-auto py-20">
                    <h2 className="text-3xl font-black uppercase text-gray-800 mb-10 flex items-center gap-4">
                        Manga Genres <span className="h-1 flex-grow bg-red-100"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {mangaGenres.map((genre, i) => (
                            <div key={i} className="group bg-white p-6 rounded-2xl shadow-lg border-b-4 border-red-500 hover:bg-red-500 transition-all duration-300">
                                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{genre.icon}</div>
                                <h3 className="font-bold text-lg text-red-600 group-hover:text-white mb-2">{genre.name}</h3>
                                <p className="text-xs text-gray-500 group-hover:text-red-100 italic leading-relaxed">{genre.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4: PROGRESS BARS (The 45/35/20 Split) */}
                <section className="w-10/12 mx-auto p-12 bg-gray-900 text-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-black uppercase mb-6 border-l-4 border-red-500 pl-4 tracking-tighter">Lifestyle Balance</h3>
                        <p className="text-gray-400 text-sm leading-loose text-justify italic font-light">
                            "As an NC III Instructor, these hobbies fuel my design perspective. Gaming sharpens logic, Anime inspires visual storytelling, and Manga explores character-driven narratives."
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Gaming */}
                        <div>
                            <div className="flex justify-between text-xs font-black mb-2 tracking-[0.2em] text-orange-400"><span>GAMING</span><span>45%</span></div>
                            <div className="bg-gray-800 w-full h-4 rounded-full p-1">
                                <div className="bg-orange-500 h-full rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" style={{width: '45%'}}></div>
                            </div>
                        </div>
                        {/* Anime */}
                        <div>
                            <div className="flex justify-between text-xs font-black mb-2 tracking-[0.2em] text-blue-400"><span>ANIME</span><span>35%</span></div>
                            <div className="bg-gray-800 w-full h-4 rounded-full p-1">
                                <div className="bg-blue-500 h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{width: '35%'}}></div>
                            </div>
                        </div>
                        {/* Manga */}
                        <div>
                            <div className="flex justify-between text-xs font-black mb-2 tracking-[0.2em] text-red-400"><span>MANGA</span><span>20%</span></div>
                            <div className="bg-gray-800 w-full h-4 rounded-full p-1">
                                <div className="bg-red-500 h-full rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]" style={{width: '20%'}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Hobbies;