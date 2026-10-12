import type { NextPage } from 'next'
import React, { useState, useRef } from 'react'
import Footer from '../components/footer'
import PageHero from '../components/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/Seo'

const Hobbies: NextPage = () => {
    const games = [
        { name: "League of Legends", link: "https://leagueoflegends.com/", img: "/hobbies/games/leagueoflegends.png", genre: "MOBA", reason: "Strategic teamwork and fast-paced mechanics keep my logic sharp." },
        { name: "Mobile Legends", link: "https://m.mobilelegends.com/", img: "/hobbies/games/ML_logo.png", genre: "MOBA", reason: "A popular mobile competitive game that requires fast coordination and strategy." },
        { name: "Terraria", link: "https://terraria.org/", img: "/hobbies/games/terraria.png", genre: "Sandbox Survival", reason: "Building ecosystems and pixel art architecture sparks my design creativity." },
        { name: "Honor of King", link: "https://www.honorofkings.com/", img: "/hobbies/games/hok.png", genre: "MOBA", reason: "Quick decision-making and mechanical execution under intense pressure." },
        { name: "Clash of Clans", link: "https://supercell.com/en/games/clashofclans/", img: "/hobbies/games/coc.webp", genre: "Strategy", reason: "Complex resource management, base design, and long-term planning." },
        { name: "Wuthering Waves", link: "https://wutheringwaves.kurogames.com/en/", img: "/hobbies/games/wuwaNew.png", genre: "Action RPG", reason: "Appreciating high-fidelity animation, VFX, and immersive open worlds." },
        { name: "The Sims 4", link: "https://www.ea.com/games/the-sims/the-sims-4", img: "/hobbies/games/thesims4.png", genre: "Simulation", reason: "Interior architectural design and meticulously simulating life's variables." },
        { name: "Yuri's Revenge", link: "https://cncnz.com/games/yuris-revenge/", img: "/hobbies/games/yuri.png", genre: "RTS", reason: "A nostalgic classic that developed my strategic and preemptive thinking early on." },
        { name: "Tales Series", link: "https://en.wikipedia.org/wiki/Tales_(video_game_series)", img: "/hobbies/games/talesofseries.png", genre: "JRPG", reason: "Rich storytelling combined with character development and action." },
        { name: "Ragnarok Online", link: "http://iro.ragnarokonline.com/", img: "/hobbies/games/ragnarok.png", genre: "MMORPG", reason: "Understanding online economies, guilds, and community building." },
        { name: "Arknights: Endfield", link: "https://endfield.gryphline.com/en-us", img: "/hobbies/games/endfiled.png", genre: "Action RPG", reason: "Innovative UI design and base-building mechanics in a sci-fi setting." },
        { name: "Frostpunk", link: "https://frostpunkgame.com/", img: "/hobbies/games/frostPunk.jpg", genre: "Strategy", reason: "Challenging moral decisions and atmospheric city-building." },
        { name: "R.E.P.O.", link: "https://store.steampowered.com/app/2693930/REPO/", img: "/hobbies/games/R.E.P.O..jpg", genre: "Co-op Horror", reason: "An exhilarating multiplayer experience focusing on teamwork and tense scenarios." },
        { name: "Necrosmith 2", link: "https://store.steampowered.com/app/2277320/Necrosmith_2/", img: "/hobbies/games/necrosmith2.png", genre: "Simulation", reason: "Creative combination of parts and management strategy." },
        { name: "Torchlight III", link: "https://www.torchlight3.com/", img: "/hobbies/games/torchlight3.webp", genre: "Action RPG", reason: "Fast-paced combat and engaging loot systems." }
    ];

    const animes = [
        { name: "Dragon Ball Super", link: "https://en.wikipedia.org/wiki/Dragon_Ball_Super", img: "/hobbies/anime/dragonball.png", desc: "Classic action pushing boundaries and surpassing limits.", publishDate: "July 5, 2015", fullInfo: "Dragon Ball Super is a Japanese anime television series produced by Toei Animation. It follows the adventures of Goku and his friends after defeating Majin Buu and bringing peace to Earth once again." },
        { name: "One Piece", link: "https://en.wikipedia.org/wiki/One_Piece", img: "/hobbies/anime/onepiece.jpg", desc: "An epic, lifelong adventure on the grand line.", publishDate: "October 20, 1999", fullInfo: "The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as 'One Piece' in order to become the next King of the Pirates." },
        { name: "Naruto", link: "https://en.wikipedia.org/wiki/Naruto", img: "/hobbies/anime/naruto.png", desc: "A nostalgic journey of resilience and overcoming odds.", publishDate: "October 3, 2002", fullInfo: "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village." },
        { name: "YuYu Hakusho", link: "https://en.wikipedia.org/wiki/YuYu_Hakusho", img: "/hobbies/anime/yuyuhakusho.jpg", desc: "Pioneering spirit detective action.", publishDate: "October 10, 1992", fullInfo: "The series tells the story of Yusuke Urameshi, a teenage delinquent who is struck and killed by a car while attempting to save a child's life but is revived to become an Underworld Detective." },
        { name: "Fushigi Yûgi", link: "https://en.wikipedia.org/wiki/Fushigi_Y%C3%BBgi", img: "/hobbies/anime/fushigi.jpg", desc: "Classic Isekai fantasy and romance.", publishDate: "April 6, 1995", fullInfo: "The story is about two teenage girls, Miaka and Yui, who are pulled into 'The Universe of the Four Gods', a mysterious book at the National Diet Library, and become priestesses of opposing gods." },
        { name: "Fullmetal Alchemist", link: "https://en.wikipedia.org/wiki/Fullmetal_Alchemist", img: "/hobbies/anime/fullmetal.jpg", desc: "Phenomenal magic system, alchemy, and brotherhood.", publishDate: "October 4, 2003", fullInfo: "Two brothers lose their bodies upon attempting to resurrect their mother using alchemy and venture out to find the Philosopher's Stone to restore themselves." },
        { name: "Demon Slayer", link: "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba", img: "/hobbies/anime/kimetsunoYaiba.jpg", desc: "Breathtaking visual effects and animation quality.", publishDate: "April 6, 2019", fullInfo: "The story follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, is turned into a demon." },
        { name: "Campfire Cooking", link: "https://en.wikipedia.org/wiki/Campfire_Cooking_in_Another_World_with_My_Absurd_Skill", img: "/hobbies/anime/campfireCooking.jpg", desc: "A relaxing, humorous slice of life in a fantasy world.", publishDate: "January 11, 2023", fullInfo: "Tsuyoshi Mukouda is transported to a fantasy world to save it, but his only skill is 'Online Grocery', allowing him to buy modern food, which surprisingly tames mythical beasts." },
        { name: "Tokyo Ghoul", link: "https://en.wikipedia.org/wiki/Tokyo_Ghoul", img: "/hobbies/anime/tokyoGhoul.jpg", desc: "Intense psychological narrative and dark graphic fantasy.", publishDate: "July 4, 2014", fullInfo: "The story follows Ken Kaneki, a college student who barely survives a deadly encounter with a ghoul and is transformed into a half-ghoul, forcing him to adapt to his new life." },
        { name: "Dr. Stone", link: "https://en.wikipedia.org/wiki/Dr._Stone", img: "/hobbies/anime/drstone.jpg", desc: "Rebuilding civilization with pure scientific application.", publishDate: "July 5, 2019", fullInfo: "Following a mysterious flash of light that petrifies all of humanity for 3,700 years, a brilliant boy named Senku Ishigami awakens and decides to rebuild civilization using science." },
        { name: "One Punch Man", link: "https://en.wikipedia.org/wiki/One-Punch_Man", img: "/hobbies/anime/onepunch.png", desc: "Hilarious overpowered hero comedy and action.", publishDate: "October 5, 2015", fullInfo: "The story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge." },
        { name: "My Hero Academia", link: "https://en.wikipedia.org/wiki/My_Hero_Academia", img: "/hobbies/anime/myheroacademia.png", desc: "An inspiring take on hero academies and evolving superpowers.", publishDate: "April 3, 2016", fullInfo: "In a world where 80% of the population has superpowers called 'Quirks', a quirkless boy named Izuku Midoriya is chosen by the world's greatest hero to inherit his power." },
        { name: "The Seven Deadly Sins", link: "https://en.wikipedia.org/wiki/The_Seven_Deadly_Sins_(manga)", img: "/hobbies/anime/7deadlysins.png", desc: "A grand scale fantasy adventure with deep lore.", publishDate: "October 5, 2014", fullInfo: "The story follows a band of knights in the land of Britannia known as the Seven Deadly Sins, who must clear their names after being framed for plotting a coup against the Liones Kingdom." },
        { name: "Farming Life in Another World", link: "https://en.wikipedia.org/wiki/Farming_Life_in_Another_World", img: "/hobbies/anime/farmingLifeInAnotherWorld.jpg", desc: "A great slice-of-life that focuses on community building and agriculture.", publishDate: "January 6, 2023", fullInfo: "After dying from an illness, Hiraku Machio is reincarnated into a fantasy world by a god. Equipped with an almighty farming tool, he slowly builds a thriving agricultural village." },
        { name: "Mushoku Tensei", link: "https://en.wikipedia.org/wiki/Mushoku_Tensei", img: "/hobbies/anime/Mushoku_Tensei.png", desc: "A pioneer of the modern Isekai reincarnation genre.", publishDate: "January 11, 2021", fullInfo: "A 34-year-old underachiever is run over by a truck and reincarnated as a baby in a fantasy world. Renamed Rudeus Greyrat, he vows to live his new life to the fullest without regrets." }
    ];

    const mangaGenres = [
        { name: "Isekai", icon: "🌌", desc: "Transported to another world, starting over in a fantasy realm. It highlights adaptability.", detailedDesc: "In Japanese Manga, 'Isekai' often involves a protagonist being reincarnated into an RPG-like fantasy world. In Korean Manhwa, similar themes are called 'Returner' or 'Transmigration' stories where players enter a game or return to the past. In Chinese Manhua, it's frequently tied to cultivation where a soul occupies a different body." },
        { name: "Fantasy", icon: "🔮", desc: "Magic, supernatural events, and mythical creatures in imaginary lands. Sparks creative design.", detailedDesc: "Manga fantasy usually centers on medieval European settings or Japanese folklore. Manhwa fantasy often integrates modern UI elements like system windows, guilds, and real-world dungeons (Urban Fantasy). Manhua fantasy heavily features cultivation, immortality, and martial arts mastery in mystical realms." },
        { name: "Adventure", icon: "🗺️", desc: "Epic journeys, exploration, and character growth through travel. Constantly drives curiosity.", detailedDesc: "Manga adventures are classic shonen quests exploring varied lands with a party. Manhwa adventures often focus on climbing massive 'Towers' or delving into endless dungeons for strength. Manhua adventures involve wandering vast empires to find rare artifacts and defeat powerful sects." },
        { name: "Comedy", icon: "😂", desc: "Designed to entertain through humor and funny interactions. Essential for work-life balance.", detailedDesc: "Manga comedy relies on expressive visual gags, chibis, and slapstick. Manhwa comedy leans into situational irony, modern web culture, and exaggerated reactions. Manhua comedy plays with misunderstandings and face-slapping tropes where the protagonist repeatedly shocks arrogant foes." },
        { name: "Magic", icon: "✨", desc: "Centered around supernatural powers and arcane mechanics. Feeds imagination and wonder.", detailedDesc: "Magic in Manga is often systematic (alchemy, elemental) requiring academic study. In Manhwa, magic is tied to 'Classes', 'Awakenings', or specific 'Constellations'. In Manhua, magic is conceptually linked to Qi (life energy), soul manipulation, and breaking mortal limits." }
    ];

    // 2. CAROUSEL & FILTER LOGIC
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const [activeGenre, setActiveGenre] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAnime, setSelectedAnime] = useState<any>(null);
    const [selectedMangaGenre, setSelectedMangaGenre] = useState<any>(null);
    const [selectedGame, setSelectedGame] = useState<any>(null);

    const searchStr = searchQuery.toLowerCase();

    const filteredGames = games.filter(g => {
        const matchesCategory = activeGenre === 'All' ? true : g.genre === activeGenre;
        const matchesSearch = g.name.toLowerCase().includes(searchStr) || g.genre.toLowerCase().includes(searchStr) || g.reason.toLowerCase().includes(searchStr);
        return matchesCategory && matchesSearch;
    });

    const filteredAnimes = animes.filter(a =>
        a.name.toLowerCase().includes(searchStr) || a.desc.toLowerCase().includes(searchStr)
    );

    const filteredMangas = mangaGenres.filter(m =>
        m.name.toLowerCase().includes(searchStr) || m.desc.toLowerCase().includes(searchStr)
    );

    const gameGenres = ['All', ...Array.from(new Set(games.map(g => g.genre)))];

    return (
        <div className="scroll-smooth bg-gray-50 relative">
            <Seo path="/hobbies" title="Hobbies" description="The games, anime and manga that inspire John Edward Cabrera's design and game development work." />

            <main className="pb-20">
                {/* HERO HEADER */}
                <PageHero
                    eyebrow="Off the clock"
                    title="Hobbies"
                    subtitle="Games | Anime | Manga"
                    search={{ value: searchQuery, onChange: setSearchQuery, placeholder: 'Explore Games, Anime, or Manga genres...' }}
                />

                {/* THE 45/35/20 SPLIT & PHILOSOPHY */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-12 mb-24 p-12 bg-white text-gray-800 rounded-[3rem] shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20 border border-gray-100">
                    <div>
                        <h3 className="text-3xl font-black uppercase mb-8 border-l-4 border-indigo-500 pl-6 tracking-tighter">Lifestyle Balance</h3>
                        <p className="text-gray-600 text-[15px] leading-loose text-justify italic font-light bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
                            "As an NC III Instructor and Developer, these hobbies are more than just pastimes—they directly fuel my design perspective. Gaming sharpens logic and strategy, Anime inspires high-fidelity visual storytelling, and Manga explores character-driven narratives that shape my UX empathy."
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Gaming */}
                        <div className="group cursor-default">
                            <div className="flex justify-between text-xs font-black mb-3 tracking-[0.2em] text-indigo-600 group-hover:text-indigo-500 transition-colors"><span>GAMING (LOGIC & STRATEGY)</span><span>45%</span></div>
                            <div className="bg-gray-100 w-full h-4 rounded-full overflow-hidden shadow-inner">
                                <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 shadow-[0_0_15px_rgba(99,102,241,0.5)]" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        {/* Anime */}
                        <div className="group cursor-default">
                            <div className="flex justify-between text-xs font-black mb-3 tracking-[0.2em] text-blue-600 group-hover:text-blue-500 transition-colors"><span>ANIME (VISUAL ARTS)</span><span>35%</span></div>
                            <div className="bg-gray-100 w-full h-4 rounded-full overflow-hidden shadow-inner">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                        {/* Manga */}
                        <div className="group cursor-default">
                            <div className="flex justify-between text-xs font-black mb-3 tracking-[0.2em] text-purple-600 group-hover:text-purple-500 transition-colors"><span>MANGA (NARRATIVE UX)</span><span>20%</span></div>
                            <div className="bg-gray-100 w-full h-4 rounded-full overflow-hidden shadow-inner">
                                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.5)]" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: GAMING LIBRARY */}
                {filteredGames.length > 0 && (
                    <section className="w-11/12 md:w-10/12 mx-auto mb-24 bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                            <div className="flex text-center md:text-left flex-col gap-2">
                                <h2 className="text-4xl font-black uppercase text-gray-900 tracking-tight flex items-center gap-4">
                                    Gaming Library
                                    <span className="h-1 w-16 bg-indigo-500 rounded-full hidden md:block"></span>
                                </h2>
                                <p className="text-gray-400 text-sm italic font-medium">Interactive systems that cultivate my problem-solving skills.</p>
                            </div>

                            {/* Game Filter */}
                            <div className="flex flex-wrap items-center justify-center gap-3 bg-gray-50 p-3 rounded-2xl shadow-inner border border-gray-100">
                                {gameGenres.map(genre => (
                                    <button
                                        key={genre}
                                        onClick={() => setActiveGenre(genre)}
                                        className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeGenre === genre ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-white text-gray-500 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'}`}
                                    >
                                        {genre}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGames.map((game, i) => (
                                <div key={i} onClick={() => setSelectedGame(game)} className="group relative block h-48 rounded-[2rem] overflow-hidden bg-gray-50 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 cursor-pointer">
                                    <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-10 group-hover:scale-95 grayscale group-hover:grayscale-0">
                                        <Image src={game.img} alt={game.name} width={180} height={100} style={{ objectFit: 'contain' }} />
                                    </div>
                                    <div className="absolute inset-0 bg-indigo-900/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                                        <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2 drop-shadow-md">{game.name}</h3>
                                        <span className="bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 shadow-sm">{game.genre}</span>
                                        <p className="text-indigo-100 text-xs italic opacity-90 leading-relaxed font-light line-clamp-2">"{game.reason}"</p>
                                        <div className="mt-4 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:translate-y-1 transition-transform border border-white/20 px-4 py-2 rounded-full hover:bg-white/10">
                                            <span>View Details</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm shadow-md text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest text-indigo-600 group-hover:opacity-0 transition-opacity">
                                        {game.genre}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* SECTION 2: ANIME CAROUSEL */}
                {filteredAnimes.length > 0 && (
                    <section className="w-full bg-gray-900 py-32 text-white shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-24">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[180px] opacity-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

                        <div className="w-full relative z-10">
                            <div className="flex flex-col items-center text-center justify-center mb-16 px-4">
                                <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">Visual Storytelling & Animation</span>
                                <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-widest text-white drop-shadow-lg">Anime Collection</h2>
                                <div className="h-1.5 w-32 bg-blue-500 rounded-full mt-8 shadow-lg shadow-blue-500/50"></div>
                                <p className="text-gray-400 mt-6 max-w-2xl italic text-sm leading-relaxed px-4">The art of pacing, dynamic visuals, and creative direction from the finest animation studios consistently serves as an immense well of inspiration for my UI transitions and designs.</p>
                            </div>

                            <div className="w-full overflow-hidden mt-8">
                                <div className="animate-scroll-anime space-x-6 md:space-x-10 pb-12 pt-4 px-2">
                                    {Array(8).fill(filteredAnimes).flat().map((anime, i) => (
                                        <div key={i} onClick={() => setSelectedAnime(anime)} className="min-w-[260px] md:min-w-[340px] snap-center group cursor-pointer inline-block">
                                            <div className="relative h-[380px] md:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-blue-500 transition-all duration-700 group-hover:-translate-y-4">
                                                <Image src={anime.img} alt={anime.name} fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <div className="absolute bottom-0 w-full p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                    <div className="h-0.5 w-12 bg-blue-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <p className="font-black uppercase tracking-widest text-xl text-white mb-2 leading-tight drop-shadow-md">{anime.name}</p>
                                                    <p className="text-blue-200 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 leading-relaxed truncate">{anime.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 3: MANGA GENRE (Modern Cards) */}
                {filteredMangas.length > 0 && (
                    <section className="w-11/12 md:w-10/12 mx-auto pb-20">
                        <div className="text-center mb-20 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 max-w-4xl mx-auto">
                            <span className="text-purple-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Narrative UX & Worldbuilding</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Manga Genres
                                <span className="h-1 w-24 bg-purple-500 rounded-full"></span>
                            </h2>
                            <p className="text-gray-500 mt-6 italic text-sm leading-loose">Manga provides a masterclass in layout and storytelling flow. The arrangement of panels directly relates to visual hierarchy and guiding a user's attention across an interface.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {filteredMangas.map((genre, i) => (
                                <div key={i} onClick={() => setSelectedMangaGenre(genre)} className="group bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:border-purple-500 hover:bg-purple-600 hover:shadow-purple-500/20 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-4 cursor-pointer">
                                    <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 drop-shadow-md">{genre.icon}</div>
                                    <h3 className="font-black text-xl text-gray-900 group-hover:text-white mb-4 uppercase tracking-tighter transition-colors">{genre.name}</h3>
                                    <div className="h-0.5 w-8 bg-purple-200 mb-4 group-hover:bg-purple-400 transition-colors"></div>
                                    <p className="text-xs text-gray-500 group-hover:text-purple-100 italic leading-relaxed transition-colors">{genre.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* ANIME MODAL */}
            {selectedAnime && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSelectedAnime(null)}></div>
                    <div className="relative bg-white rounded-[3rem] p-8 md:p-12 w-full max-w-2xl shadow-2xl border-4 border-gray-100 transform transition-all flex flex-col items-center">
                        <button
                            onClick={() => setSelectedAnime(null)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl mb-6 border border-gray-200">
                            <Image src={selectedAnime.img} fill style={{ objectFit: 'cover' }} alt={selectedAnime.name} />
                        </div>

                        <h3 className="text-3xl font-black text-center text-gray-900 uppercase tracking-tighter mb-2">{selectedAnime.name}</h3>
                        <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 text-center">Published: {selectedAnime.publishDate}</p>
                        <div className="h-1.5 w-16 bg-blue-500 rounded-full mb-6 mx-auto"></div>

                        <div className="w-full text-left bg-gray-50 p-6 rounded-[2rem] border border-gray-100 mb-8">
                            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-3 border-l-4 border-blue-500 pl-3">Full Information</h4>
                            <p className="text-gray-600 font-medium italic leading-relaxed text-sm mb-4">"{selectedAnime.desc}"</p>
                            <p className="text-gray-700 leading-loose text-sm font-light">{selectedAnime.fullInfo}</p>
                        </div>

                        <Link href={selectedAnime.link} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-blue-500/50 uppercase tracking-widest text-sm flex items-center gap-3">
                            View Wikipedia
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </Link>
                    </div>
                </div>
            )}

            {/* MANGA MODAL */}
            {selectedMangaGenre && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSelectedMangaGenre(null)}></div>
                    <div className="relative bg-white rounded-[3rem] p-8 md:p-12 w-full max-w-3xl shadow-2xl border-4 border-gray-100 transform transition-all text-center">
                        <button
                            onClick={() => setSelectedMangaGenre(null)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="text-8xl mb-6 drop-shadow-md">{selectedMangaGenre.icon}</div>
                        <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedMangaGenre.name}</h3>
                        <div className="h-1.5 w-24 bg-purple-500 rounded-full mx-auto mb-8"></div>

                        <div className="bg-purple-50 p-6 md:p-8 rounded-[2rem] border border-purple-100 mb-8 items-center text-center">
                            <p className="text-purple-900 font-medium italic leading-relaxed">{selectedMangaGenre.desc}</p>
                        </div>

                        <div className="text-left bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100">
                            <h4 className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4">Manga vs. Manhwa vs. Manhua</h4>
                            <p className="text-gray-600 leading-loose text-sm">{selectedMangaGenre.detailedDesc}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* GAME MODAL */}
            {selectedGame && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSelectedGame(null)}></div>
                    <div className="relative bg-white rounded-[3rem] p-8 md:p-12 w-full max-w-2xl shadow-2xl border-4 border-gray-100 transform transition-all flex flex-col items-center">
                        <button
                            onClick={() => setSelectedGame(null)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-inner mb-6 border border-gray-100 bg-gray-50 flex items-center justify-center p-6">
                            <Image src={selectedGame.img} fill style={{ objectFit: 'contain' }} alt={selectedGame.name} className="p-4" />
                        </div>

                        <h3 className="text-3xl font-black text-center text-gray-900 uppercase tracking-tighter mb-2">{selectedGame.name}</h3>
                        <p className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4 text-center">{selectedGame.genre}</p>
                        <div className="h-1.5 w-16 bg-indigo-500 rounded-full mb-6 mx-auto"></div>

                        <div className="w-full text-left bg-gray-50 p-6 rounded-[2rem] border border-gray-100 mb-8">
                            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-3 border-l-4 border-indigo-500 pl-3">Design Influence</h4>
                            <p className="text-gray-700 leading-loose text-sm font-light">"{selectedGame.reason}"</p>
                        </div>

                        <Link href={selectedGame.link} target="_blank" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-indigo-500/50 uppercase tracking-widest text-sm flex items-center gap-3">
                            Visit Game Site
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </Link>
                    </div>
                </div>
            )}

            <Footer />
            <style jsx global>{`
                @keyframes autoScrollAnime {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-anime {
                    display: flex;
                    width: max-content;
                    animation: autoScrollAnime 40s linear infinite;
                }
                .animate-scroll-anime:hover {
                    animation-play-state: paused;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </div>
    );
}

export default Hobbies;