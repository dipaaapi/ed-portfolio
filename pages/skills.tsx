import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link' 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Skills: NextPage = () => {
    // 1. DATA STRUCTURES WITH ACQUIRED DATES
    const googleBadges = [
        { 
            title: "Gemini Certified Educator", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/06a4296f-1abd-4f63-b7af-af9f2a7aa6dd", 
            acquired: "Dec 11, 2024",
            expiry: "Dec 11, 2028" 
        },
        { 
            title: "Google Certified Educator L1", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/6f511405-693a-49b9-b238-559c29601dcf", 
            acquired: "Dec 9, 2024",
            expiry: "Dec 9, 2028" 
        },
        { 
            title: "Google Certified Educator L2", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/93199c60-3906-4e90-9060-628b3de9793c", 
            acquired: "Dec 9, 2024",
            expiry: "Dec 9, 2028" 
        }
    ];

    const techSkills = [
        { label: "User Experience", desc: "Crafting functional, user-friendly digital products through HCD and accessibility standards.", icon: "📱" },
        { label: "Graphic Arts", desc: "Communicating visual ideas via digital media with a strong eye for detail and software mastery.", icon: "🎨" },
        { label: "Web Design", desc: "Creating aesthetically pleasing, accessible sites using HTML, CSS, and JavaScript technologies.", icon: "🌐" },
        { label: "Quality Assurance", desc: "Evaluating functionality and performance to identify and resolve bugs through systematic testing.", icon: "🛡️" },
        { label: "Game Development", desc: "Building engaging interactive experiences using Unity C# and core game design principles.", icon: "🎮" }
    ];

    const certifications = [
        { title: "Visual Graphic Design NC III", body: "TESDA National Certificate", icon: "💎" },
        { title: "Teaching Methodology Level 1", body: "Competency-Based Training (CBT)", icon: "🎓" },
        { title: "NTTC Level 1", body: "National TVET Trainer Certificate", icon: "🎖️" }
    ];

    const designerskills = [
        { name: "Adobe Photoshop", image: "/adobePs.png" },
        { name: "Adobe Illustrator", image: "/adobeAi.png" },
        { name: "Balsamiq", image: "/balsamiq.png" },
        { name: "Canva", image: "/canva.png" },
        { name: "Figma", image: "/figma.png" },
        { name: "Google Sites", image: "/siteGoogle.png" }
    ];

    const webskills = [
        { name: "HTML5", image: "/html5.png" },
        { name: "CSS", image: "/css.png" },
        { name: "Javascript", image: "/javascript.png" },
        { name: "Php", image: "/php.png" },
        { name: "MySQL", image: "/mysql.png" },
        { name: "ReactJs", image: "/react.png" },
        { name: "NextJs", image: "/next.png" },
        { name: "Bootstrap", image: "/bootstrap.png" },
        { name: "Material UI", image: "/materialUi.png" }
    ];

    const unityskills = ["animation", "asset management", "audio", "editor interface", "lighting", "materials", "physics", "programming", "UI"];

    return (
        <div className={styles.container}>
            <Head>
                <title>Professional Expertise Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth pb-20 bg-gray-50'>
                {/* MODERN HERO SECTION */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 py-20 text-white text-center shadow-inner">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>Professional Expertise</h1>
                    <div className="h-1 w-24 bg-white mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-widest opacity-80 uppercase">Educator | Designer | Developer</p>
                </div>

                {/* 1. DYNAMIC TECHNICAL SKILLS OVERVIEW */}
                <section className="w-10/12 mx-auto -mt-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techSkills.map((skill, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-500 hover:scale-105 transition-transform duration-300">
                                <span className="text-4xl">{skill.icon}</span>
                                <h3 className="text-xl font-bold mt-4 text-gray-800">{skill.label}</h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed text-justify italic">"{skill.desc}"</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. GOOGLE CREDENTIALS (WITH ACQUIRED DATES) */}
                <section className="w-10/12 mx-auto mb-20">
                    <h2 className="text-2xl font-black uppercase text-blue-600 mb-8 flex items-center gap-3">
                        Google for Education <span className="h-[2px] flex-grow bg-blue-100"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {googleBadges.map((badge, index) => (
                            <Link key={index} href={badge.link}>
                                <a target="_blank" className="block group">
                                    <div className="bg-white p-6 rounded-3xl border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-2xl transition-all text-center">
                                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform text-3xl">🎓</div>
                                        <h4 className="font-extrabold text-blue-900 mb-2">{badge.title}</h4>
                                        <div className="text-[10px] space-y-1 font-bold text-gray-400">
                                            <p className="bg-blue-50 text-blue-600 py-1 rounded-full uppercase">Acquired: {badge.acquired}</p>
                                            <p className="bg-red-50 text-red-600 py-1 rounded-full uppercase">Expires: {badge.expiry}</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 3. VOCATIONAL CREDENTIALS (TESDA/NTTC) */}
                <section className="w-10/12 mx-auto mb-20">
                    <h2 className="text-2xl font-black uppercase text-red-600 mb-8 flex items-center gap-3">
                        Vocational Credentials <span className="h-[2px] flex-grow bg-red-100"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="relative overflow-hidden group bg-gray-900 p-8 rounded-xl text-white shadow-2xl">
                                <div className="absolute -right-4 -bottom-4 opacity-10 text-8xl group-hover:scale-150 transition-transform">{cert.icon}</div>
                                <h3 className="font-bold text-lg uppercase tracking-wider z-10 relative">{cert.title}</h3>
                                <p className="text-xs text-red-400 mt-2 z-10 relative uppercase font-bold">{cert.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. SOFTWARE STACK GRID */}
                <section className="w-10/12 mx-auto mb-20">
                    <h2 className="text-xl font-bold uppercase text-gray-400 mb-8 text-center tracking-[0.3em]">Software Mastery</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 grayscale hover:grayscale-0 transition-all duration-500">
                        {designerskills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <Image src={skill.image} width={60} height={60} objectFit="contain" alt={skill.name} />
                                <p className="mt-3 text-[9px] font-bold uppercase text-gray-400">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. DEVELOPMENT CAROUSEL */}
                <section className="w-full bg-white py-20 border-y border-gray-200">
                    <div className="w-10/12 mx-auto">
                        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className="max-w-xs mx-auto">
                            {webskills.map((skill, index) => (
                                <div key={index} className="pb-10">
                                    <Image src={skill.image} width={100} height={100} objectFit="contain" alt={skill.name} />
                                    <h3 className="text-gray-900 font-black mt-6 uppercase tracking-widest">{skill.name}</h3>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </section>

                {/* 6. UNITY SKILLS PILLS */}
                <section className="w-10/12 mx-auto my-20 text-center">
                    <Image src='/unityBadge.png' width={120} height={120} alt="Unity" className='mx-auto mb-8 animate-pulse' />
                    <div className="flex flex-wrap justify-center gap-3">
                        {unityskills.map((skill, index) => (
                            <span key={index} className="px-6 py-2 bg-white border-2 border-gray-100 rounded-full text-[10px] uppercase font-black text-gray-800 hover:border-black transition-all">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Skills;