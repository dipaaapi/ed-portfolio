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
    // UPDATED GOOGLE BADGES WITH COMPREHENSIVE VARIABLES
    const googleBadges = [
        { 
            title: "Gemini Certified Educator", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/06a4296f-1abd-4f63-b7af-af9f2a7aa6dd", 
            acquired: "Dec 11, 2024", 
            expiry: "Dec 11, 2028", 
            skills: ["Artificial Intelligence", "Generative AI"], 
            badgeImage: "/skills/gemini_certified_educator.png" 
        },
        { 
            title: "Google Certified Educator L1", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/6f511405-693a-49b9-b238-559c29601dcf", 
            acquired: "Dec 9, 2024", 
            expiry: "Dec 9, 2028", 
            skills: ["Google Classroom", "Google Search", "Google Workspace"], 
            badgeImage: "/skills/certified_educator_level1.png" 
        },
        { 
            title: "Google Certified Educator L2", 
            link: "https://api.accredible.com/v1/obi/badge_assertions/93199c60-3906-4e90-9060-628b3de9793c", 
            acquired: "Dec 9, 2024", 
            expiry: "Dec 9, 2028", 
            skills: ["Google Classroom", "Google Search", "Google Workspace", "Technology Adoption Lifecycle"], 
            badgeImage: "/skills/certified_educator_level2.png" 
        }
    ];

    const technicalInsights = [
        { label: "User Experience Design", icon: "📱", desc: "User experience design involves creating digital products that are functional and user-friendly. This requires a deep understanding of human-computer interaction, accessibility, and user research. UX designers must have excellent problem-solving skills and be able to communicate their ideas effectively through wireframing and prototyping." },
        { label: "Graphic Arts", icon: "🎨", desc: "Graphic arts is the process of using digital and traditional media to communicate visual ideas and concepts. This field requires a strong eye for design, attention to detail, and proficiency in graphic design software to create images, logos, and designs that effectively convey the intended message." },
        { label: "Web Design", icon: "🌐", desc: "Web design involves creating websites that are aesthetically pleasing and accessible to a wide range of users. Web designers must understand technologies like HTML, CSS, and JavaScript, ensuring interfaces are user-friendly across different devices and screen sizes." },
        { label: "Quality Assurance", icon: "🛡️", desc: "Quality assurance is a critical process in software development involving testing and evaluating functionality and performance. QA specialists identify and report bugs, working closely with developers to ensure the final product meets high standards for optimal performance." },
        { label: "Associate Unity Game Development", icon: "🎮", desc: "Unity game development involves using the Unity engine to create interactive and engaging games. This field requires knowledge of programming languages such as C# and an understanding of game design principles to create, test, and refine games for optimal performance and user experience." }
    ];

    // EXPANDED SOFT SKILLS BASED ON TESDA NC III & IT INDUSTRY STANDARDS
    const softSkills = [
        { label: "Instructional Communication", desc: "As a Computer Instructor, I translate complex technical jargon into understandable terms for students. This involves active listening, verbal clarity, and effective non-verbal cues in a classroom setting." },
        { label: "Creative Problem Solving", desc: "Viewing design briefs or coding bugs as problems to be solved. I approach challenges from multiple angles, exploring innovative solutions through critical and dialectical thinking." },
        { label: "Collaborative Leadership", desc: "Leading small teams and workplace discussions. I facilitate an environment where diverse perspectives are embraced to achieve common project or institutional goals." },
        { label: "Agile Adaptability", desc: "The tech and design landscape evolves rapidly. I maintain a mindset of continuous learning, quickly adopting new tools (like Generative AI) and adapting to changes in curricula or industry trends." },
        { label: "Strategic Organization", desc: "Managing multiple projects and student assessments simultaneously. This requires high-level time management, goal-setting, and systematic documentation to meet strict deadlines." },
        { label: "Empathy & Accessibility", desc: "In UX and Education, putting myself in the user's or student's shoes is vital. I design and teach with a focus on inclusivity and fulfilling the diverse needs of the audience." }
    ];

    const designerskills = [
        { name: "Adobe Photoshop", image: "/adobePs.png" },
        { name: "Adobe Illustrator", image: "/adobeAi.png" },
        { name: "Figma", image: "/figma.png" },
        { name: "Balsamiq", image: "/balsamiq.png" },
        { name: "Canva", image: "/canva.png" },
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
                <title>Expertise & Mastery Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth pb-20 bg-gray-50'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 py-24 text-white text-center shadow-inner">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>Expertise & Mastery</h1>
                    <div className="h-1.5 w-32 bg-white mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-[0.4em] opacity-80 uppercase italic">Code | Design | Industry Leadership</p>
                </div>

                {/* 1. TECHNICAL EXPERTISE OVERVIEW */}
                <section className="w-10/12 mx-auto -mt-10 mb-20 bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                    <h2 className="text-3xl font-black uppercase text-red-500 mb-8 border-b-2 border-red-50 pb-4">Technical Core</h2>
                    <p className="text-sm text-gray-700 mb-12 text-justify italic leading-loose">
                        My technical foundation is built on the intersection of instructional pedagogy and industry-standard production. These core areas represent my ability to deliver both high-quality digital products and effective technical education.
                    </p>

                    <div className="space-y-12">
                        {technicalInsights.map((insight, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
                                <div className="text-5xl p-6 bg-red-50 rounded-3xl group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                                    {insight.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-black uppercase text-gray-800 mb-3 tracking-tighter">{insight.label}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed text-justify border-l-4 border-red-100 pl-6 group-hover:border-red-500 transition-colors duration-500">
                                        {insight.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. WEB DEVELOPMENT STACK */}
                <section className="w-full bg-gray-900 py-20 mb-20">
                    <div className="w-10/12 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black uppercase text-blue-400 mb-4 tracking-widest">Web Development Stack</h2>
                            <p className="text-gray-400 text-sm italic">Full-Stack engineering and Responsive UI architecture.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                            {webskills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center group">
                                    <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500 p-4">
                                        <Image src={skill.image} width={60} height={60} objectFit="contain" alt={skill.name} className="group-hover:scale-110 transition-transform" />
                                    </div>
                                    <p className="mt-4 text-[10px] font-bold uppercase text-gray-500 tracking-widest group-hover:text-blue-400 transition-colors">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. UPDATED GOOGLE CREDENTIALS SECTION */}
                <section className="w-10/12 mx-auto mb-20">
                    <h2 className="text-3xl font-black uppercase text-blue-600 mb-10">Google for Education Credentials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {googleBadges.map((badge, index) => (
                            <Link key={index} href={badge.link} target="_blank">
                                <a className="block p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl hover:-translate-y-3 transition-transform flex flex-col items-center text-center h-full">
                                    <div className="relative w-24 h-24 mb-6">
                                        <Image src={badge.badgeImage} layout="fill" objectFit="contain" alt={badge.title} />
                                    </div>
                                    <h4 className="font-black text-blue-900 mb-3 text-lg uppercase tracking-tighter leading-tight">{badge.title}</h4>
                                    <div className="flex flex-wrap justify-center gap-1 mb-6">
                                        {badge.skills.map((s, i) => (
                                            <span key={i} className="text-[8px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase">{s}</span>
                                        ))}
                                    </div>
                                    <div className="mt-auto w-full border-t border-gray-50 pt-4 flex justify-between text-[10px] font-black uppercase">
                                        <span className="text-gray-400">Acquired: {badge.acquired}</span>
                                        <span className="text-red-500">Exp: {badge.expiry}</span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 4. EXPANDED SOFT SKILLS (TRANSVERSAL COMPETENCIES) */}
                <section className="w-10/12 mx-auto mb-20 p-12 bg-white rounded-[3rem] shadow-xl">
                    <h2 className="text-3xl font-black uppercase text-red-500 mb-10 text-center">Instructional & Transversal Soft Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="border-l-4 border-red-100 pl-6 hover:border-red-500 transition-colors group">
                                <h3 className="text-lg font-black uppercase text-gray-800 mb-2 group-hover:text-red-600">{skill.label}</h3>
                                <p className="text-xs text-gray-500 text-justify leading-relaxed italic">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SOFTWARE MASTERY LOGOS */}
                <section className="w-10/12 mx-auto mb-20 text-center">
                    <h2 className="text-xl font-bold uppercase text-gray-400 mb-10 tracking-[0.5em]">Creative Software Mastery</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                        {designerskills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all grayscale hover:grayscale-0">
                                    <Image src={skill.image} width={50} height={50} objectFit="contain" alt={skill.name} />
                                </div>
                                <p className="mt-3 text-[9px] font-bold uppercase text-gray-400 tracking-widest">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Skills;