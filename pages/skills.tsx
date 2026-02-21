import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Skills: NextPage = () => {
    const [selectedUnitySkill, setSelectedUnitySkill] = useState<any>(null);
    const [selectedSoftSkill, setSelectedSoftSkill] = useState<any>(null);
    const [selectedSoftware, setSelectedSoftware] = useState<any>(null);
    const [selectedWebSkill, setSelectedWebSkill] = useState<any>(null);
    const [selectedTechnicalCore, setSelectedTechnicalCore] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const searchStr = searchQuery.toLowerCase();

    // UPDATED GOOGLE BADGES WITH COMPREHENSIVE VARIABLES
    const googleBadges = [
        {
            title: "Gemini Certified Educator",
            link: "https://www.credential.net/06a4296f-1abd-4f63-b7af-af9f2a7aa6dd",
            acquired: "Dec 11, 2024",
            expiry: "Dec 11, 2028",
            skills: ["Artificial Intelligence", "Generative AI"],
            badgeImage: "/skills/gemini_certified_educator.png"
        },
        {
            title: "Google Certified Educator L1",
            link: "https://www.credential.net/6f511405-693a-49b9-b238-559c29601dcf",
            acquired: "Dec 9, 2024",
            expiry: "Dec 9, 2028",
            skills: ["Google Classroom", "Google Search", "Google Workspace"],
            badgeImage: "/skills/certified_educator_level1.png"
        },
        {
            title: "Google Certified Educator L2",
            link: "https://www.credential.net/93199c60-3906-4e90-9060-628b3de9793c",
            acquired: "Dec 9, 2024",
            expiry: "Dec 9, 2028",
            skills: ["Google Classroom", "Google Search", "Google Workspace", "Technology Adoption Lifecycle"],
            badgeImage: "/skills/certified_educator_level2.png"
        }
    ];

    const technicalInsights = [
        { label: "User Experience Design", icon: "📱", desc: "Creating digital products that are functional and user-friendly through human-computer interaction and user research.", detailedDesc: "Why is this here? Because a website or app is useless if people don't know how to use it. I design platforms so that anyone, regardless of tech skills, can casually navigate them without frustration." },
        { label: "Graphic Arts", icon: "🎨", desc: "Using digital and traditional media to communicate visual ideas and concepts through beautiful graphical compositions.", detailedDesc: "Why is this here? Visuals speak instantly before a user reads any text. I use graphic arts to establish identity, convey emotion, and make digital environments actually pleasant and professional to look at." },
        { label: "Web Design", icon: "🌐", desc: "Creating websites that are aesthetically pleasing and accessible across all devices and screen sizes.", detailedDesc: "Why is this here? It represents my ability to actually build the structure of the web. This means putting together HTML, styling it uniquely with CSS, and ensuring it automatically fits perfectly on both your smartphone and your desktop monitor." },
        { label: "Quality Assurance", icon: "🛡️", desc: "Testing and evaluating functionality repeatedly to identify bugs and ensure optimal software performance.", detailedDesc: "Why is this here? Because software breaks. Quality Assurance means I rigorously test everything before it reaches the public to ensure it won't crash when you click a button or submit a form." }
    ];

    // EXPANDED SOFT SKILLS BASED ON TESDA NC III & IT INDUSTRY STANDARDS
    const softSkills = [
        { label: "Instructional Communication", icon: "🗣️", desc: "As a Computer Instructor, I translate complex technical jargon into understandable terms for students.", detailedDesc: "By actively listening and paying attention to both verbal and non-verbal cues, I ensure that my instruction lands effectively. Excellent communication bridges the gap between novice learners and advanced IT concepts." },
        { label: "Creative Problem Solving", icon: "🧠", desc: "Viewing design briefs or coding bugs as problems to be solved. I approach challenges from multiple angles.", detailedDesc: "I employ critical, analytical, and dialectical thinking to evaluate all possible solutions. Whether it's optimizing a React hook or redesigning a clunky UI layout, I systematically dissect the problem until the optimal solution presents itself." },
        { label: "Collaborative Leadership", icon: "🤝", desc: "Leading small teams and workplace discussions. I facilitate an environment where diverse perspectives are embraced.", detailedDesc: "Leadership isn't about dictating orders; it's about synthesizing the best ideas from the group. I take pride in organizing workflows, motivating peers, and guiding collaborative projects to meet our institutional objectives efficiently." },
        { label: "Agile Adaptability", icon: "🔄", desc: "The tech and design landscape evolves rapidly. I maintain a mindset of continuous learning, quickly adopting new tools.", detailedDesc: "From the rise of Generative AI to shifting framework standards, my agility allows me to pivot quickly. I integrate new methodologies without disrupting existing production pipelines, ensuring my skill set never stagnates." },
        { label: "Strategic Organization", icon: "📊", desc: "Managing multiple projects and student assessments simultaneously. This requires high-level time management.", detailedDesc: "I rely on strict documentation, milestone tracking, and prioritized goal-setting. Structuring my day strategically ensures that strict educational deadlines and personal development sprints are consistently met." },
        { label: "Empathy & Accessibility", icon: "❤️", desc: "In UX and Education, putting myself in the user's or student's shoes is vital. I design and teach with a focus on inclusivity.", detailedDesc: "A product is only successful if it can be accessed and understood by its intended audience. I routinely advocate for accessibility standards, ensuring my code is semantic and my interfaces are empathetic to users of all backgrounds." }
    ];

    const designerskills = [
        { name: "Adobe Photoshop", image: "/adobePs.png", desc: "Advanced raster graphics editing and digital painting.", detailedDesc: "I use Photoshop for comprehensive image manipulation, precise color correction, and crafting complex UI assets. Its robust layer and masking systems are critical for my high-fidelity mockups." },
        { name: "Adobe Illustrator", image: "/adobeAi.png", desc: "Precision vector graphics and scalable logo design.", detailedDesc: "My go-to tool for typography, iconography, and scalable vector assets. Illustrator ensures that all of my graphical resources remain crisp across every device resolution." },
        { name: "Figma", image: "/figma.png", desc: "Collaborative UI/UX design and interactive prototyping.", detailedDesc: "Figma anchors my entire design process. I use it to establish design systems, wireframe layouts rapidly, and create high-fidelity interactive prototypes before writing a single line of code." },
        { name: "Balsamiq", image: "/balsamiq.png", desc: "Rapid low-fidelity wireframing and initial conceptualization.", detailedDesc: "Balsamiq allows me to focus purely on layout and structure without getting derailed by visual aesthetics. It's essential for rapid brainstorming and initial client pitches." },
        { name: "Canva", image: "/canva.png", desc: "Quick-turnaround marketing materials and presentation assets.", detailedDesc: "When I need professional, visually appealing graphics on a tight deadline, Canva streamlines my workflow for social media updates, slide decks, and basic promotional content." },
        { name: "Google Sites", image: "/siteGoogle.png", desc: "Rapid development of internal wikis and educational portals.", detailedDesc: "Perfect for integrating seamlessly with the Google Workspace ecosystem. I deploy Google Sites to host curriculum materials, classroom hubs, and internal documentation quickly." }
    ];

    const webskills = [
        { name: "HTML5", image: "/html5.png", desc: "The standard markup language for documents designed to be displayed in a web browser.", detailedDesc: "Purpose: It provides the basic structure (the skeleton) of every single web page on the internet. Without it, there is no website." },
        { name: "CSS", image: "/css.png", desc: "Cascading Style Sheets used for describing the presentation of a document written in HTML.", detailedDesc: "Purpose: It provides the visual styling (colors, layouts, fonts) to make a boring HTML skeleton into a beautiful graphical page." },
        { name: "Javascript", image: "/javascript.png", desc: "A programming language that allows you to implement complex features and interactivity on web pages.", detailedDesc: "Purpose: It adds behavior and logic. Whenever something moves, updates rapidly, or reacts to your clicks without reloading the page, Javascript is doing the work." },
        { name: "Php", image: "/php.png", desc: "A general-purpose scripting language that is especially suited to backend server web development.", detailedDesc: "Purpose: It runs on the server (behind the scenes) to connect websites to databases, process form submissions, and handle logical calculations secretly." },
        { name: "MySQL", image: "/mysql.png", desc: "An open-source relational database management system.", detailedDesc: "Purpose: It is the digital filing cabinet where all website data (like user accounts, passwords, and submitted posts) is securely stored, organized, and retrieved." },
        { name: "ReactJs", image: "/react.png", desc: "A front-end JavaScript library for building user interfaces based on UI components.", detailedDesc: "Purpose: It allows me to build extremely fast, app-like websites by breaking the design down into reusable 'components' rather than building massive, slow, individual pages." },
        { name: "NextJs", image: "/next.png", desc: "A React framework that gives you building blocks to create extremely fast web applications.", detailedDesc: "Purpose: It powers this very portfolio! It optimizes React websites so they load instantly on search engines and are incredibly fast for users to interact with." },
        { name: "Bootstrap", image: "/bootstrap.png", desc: "A CSS framework directed at responsive, mobile-first front-end web development.", detailedDesc: "Purpose: It provides pre-built buttons, layouts, and menus so I can rapidly construct a standard, mobile-friendly website without coding every style from scratch." },
        { name: "Material UI", image: "/materialUi.png", desc: "An open-source React component library that implements Google's Material Design visually.", detailedDesc: "Purpose: It provides highly polished, professional-looking buttons, sliders, and interactive elements straight out of the box, imitating standard Google application designs." }
    ];

    const unityskills = [
        { name: "animation", desc: "Creating and controlling animations using Animator Controllers, Blend Trees, and timeline sequencing to bring characters and UI to life." },
        { name: "asset management", desc: "Organizing project structures, utilizing prefabs, and optimizing textures, models, and audio to maintain performance and scale." },
        { name: "audio", desc: "Implementing 2D and 3D spatial sound, mixing audio, and triggering sound effects via scripts to enhance immersion." },
        { name: "editor interface", desc: "Customizing the Unity Editor environment, creating custom inspectors, and developing editor scripts to improve team workflow." },
        { name: "lighting", desc: "Baking lightmaps, configuring real-time global illumination, setting up reflection probes, and optimizing rendering performance." },
        { name: "materials", desc: "Building shaders, assigning textures, and understanding Physically Based Rendering (PBR) pipelines to achieve visual fidelity." },
        { name: "physics", desc: "Applying Rigidbody mechanics, configuring colliders, and utilizing raycasts for accurate collision detection and movement." },
        { name: "programming", desc: "Writing clean, modular C# code for game logic, managing state, handling input, and designing robust system architectures." },
        { name: "UI", desc: "Designing responsive Canvas layouts, anchoring UI elements, and scripting interactive elements like buttons, sliders, and menus." }
    ];

    const filteredTechnicalInsights = technicalInsights.filter(item => item.label.toLowerCase().includes(searchStr) || item.desc.toLowerCase().includes(searchStr));
    const filteredWebSkills = webskills.filter(skill => skill.name.toLowerCase().includes(searchStr));
    const filteredUnitySkills = unityskills.filter(skill => skill.name.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr));
    const filteredGoogleBadges = googleBadges.filter(badge => badge.title.toLowerCase().includes(searchStr) || badge.skills.some(s => s.toLowerCase().includes(searchStr)));
    const filteredSoftSkills = softSkills.filter(skill => skill.label.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr));
    const filteredDesignerSkills = designerskills.filter(skill => skill.name.toLowerCase().includes(searchStr));

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Expertise & Mastery Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth pb-20 bg-gray-50'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 py-32 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-50 blur-3xl"></div>
                    <div className="relative z-10">
                        <h1 className='text-5xl font-black uppercase tracking-tighter drop-shadow-2xl'>Expertise & Mastery</h1>
                        <div className="h-1.5 w-32 bg-white mx-auto my-6 rounded-full shadow-lg"></div>
                        <p className="text-lg font-light tracking-[0.4em] opacity-90 uppercase italic">Code | Design | Industry Leadership</p>
                    </div>
                </div>

                {/* SEARCH BAR */}
                <div className="w-11/12 md:w-8/12 mx-auto mt-[-2.5rem] relative z-30 mb-20">
                    <div className="bg-white rounded-full shadow-2xl p-2 flex items-center border border-gray-100 hover:border-red-500 transition-colors duration-500 group">
                        <div className="bg-red-50 p-4 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search skills, software, keywords..."
                            className="w-full bg-transparent border-none text-gray-700 px-6 py-4 outline-none text-lg font-bold tracking-wide placeholder-gray-300 focus:ring-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* 1. TECHNICAL EXPERTISE OVERVIEW */}
                {filteredTechnicalInsights.length > 0 && (
                    <section className="w-11/12 md:w-10/12 mx-auto mt-8 mb-20 bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative z-20">
                        <div className="text-center mb-12">
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Foundation</span>
                            <h2 className="text-3xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Technical Core
                                <span className="h-1.5 w-24 bg-red-500 rounded-full"></span>
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 mb-12 text-center max-w-4xl mx-auto italic leading-loose">
                            My technical foundation is built on the intersection of instructional pedagogy and industry-standard production. These core areas represent my ability to deliver both high-quality digital products and effective technical education.
                        </p>

                        <div className="space-y-12">
                            {filteredTechnicalInsights.map((insight, index) => (
                                <div key={index} onClick={() => setSelectedTechnicalCore(insight)} className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer bg-white p-6 rounded-[2.5rem] hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300">
                                    <div className="text-6xl p-6 bg-red-50 rounded-[2rem] group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:-translate-y-2">
                                        {insight.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">{insight.label}</h3>
                                        <div className="h-0.5 w-12 bg-red-100 mb-4 group-hover:bg-red-400 transition-colors"></div>
                                        <p className="text-sm text-gray-500 leading-relaxed italic line-clamp-2">
                                            {insight.desc}
                                        </p>
                                        <div className="mt-4 text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                            <span>Read Explanation</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 2. WEB DEVELOPMENT STACK */}
                {filteredWebSkills.length > 0 && (
                    <section className="w-full bg-gray-900 py-20 mb-20">
                        <div className="w-10/12 mx-auto">
                            <div className="flex flex-col items-center text-center justify-center mb-16">
                                <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Languages & Frameworks</span>
                                <h2 className="text-4xl lg:text-5xl font-black uppercase text-white tracking-widest drop-shadow-lg">Web Development Stack</h2>
                                <div className="h-1.5 w-32 bg-blue-500 rounded-full mt-6 shadow-lg shadow-blue-500/50"></div>
                                <p className="text-gray-400 mt-6 max-w-2xl italic text-sm leading-relaxed">Full-Stack engineering and Responsive UI architecture.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                                {filteredWebSkills.map((skill, index) => (
                                    <div key={index} onClick={() => setSelectedWebSkill(skill)} className="flex flex-col items-center group cursor-pointer relative">
                                        <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500 p-4 shadow-lg group-hover:shadow-blue-500/30 group-hover:-translate-y-3">
                                            <Image src={skill.image} width={60} height={60} objectFit="contain" alt={skill.name} className="group-hover:scale-110 transition-transform" />
                                        </div>
                                        <p className="mt-4 text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-blue-400 transition-colors">{skill.name}</p>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[-20px] bg-blue-600 text-white text-[9px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg uppercase font-bold tracking-widest z-10 w-max">Why use this?</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. ASSOCIATE UNITY GAME DEVELOPER */}
                {filteredUnitySkills.length > 0 && (
                    <section className="w-full bg-indigo-900 py-20 mb-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                        <div className="w-10/12 mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 flex justify-center flex-shrink-0">
                                <div className="relative w-48 h-48 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                    <Image src="/unityBadge.png" layout="fill" objectFit="contain" alt="Unity Certified Associate Badge" />
                                </div>
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-4 tracking-widest drop-shadow-md">Unity Game Development</h2>
                                <p className="text-indigo-200 text-sm italic mb-10 text-justify max-w-2xl">Certified Associate Unity Game Developer core competencies. Click on a skill to explore its practical application in my workflow.</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    {filteredUnitySkills.map((skill, index) => (
                                        <button onClick={() => setSelectedUnitySkill(skill)} key={index} className="px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:border-indigo-400 hover:bg-indigo-500 transition-all duration-300 shadow-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                            <p className="text-sm font-bold uppercase text-indigo-100 tracking-widest group-hover:text-white transition-colors">{skill.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. UPDATED GOOGLE CREDENTIALS SECTION */}
                {filteredGoogleBadges.length > 0 && (
                    <section className="w-10/12 mx-auto mb-20">
                        <h2 className="text-3xl font-black uppercase text-blue-600 mb-10">Google for Education Credentials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredGoogleBadges.map((badge, index) => (
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
                )}

                {/* 5. EXPANDED SOFT SKILLS (TRANSVERSAL COMPETENCIES) */}
                {filteredSoftSkills.length > 0 && (
                    <section className="w-11/12 md:w-10/12 mx-auto mb-20 p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100 relative">
                        <div className="text-center mb-16">
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Interpersonal</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Transversal Soft Skills
                                <span className="h-1.5 w-24 bg-red-500 rounded-full"></span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredSoftSkills.map((skill, index) => (
                                <div key={index} onClick={() => setSelectedSoftSkill(skill)} className="group bg-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 hover:border-red-500 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-3 cursor-pointer">
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{skill.icon}</div>
                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-red-600 mb-4 uppercase tracking-tighter transition-colors">{skill.label}</h3>
                                    <div className="h-0.5 w-8 bg-red-200 mb-4 group-hover:bg-red-400 transition-colors"></div>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700 italic leading-relaxed transition-colors line-clamp-3">{skill.desc}</p>
                                    <div className="mt-6 text-[10px] font-bold text-red-400 uppercase tracking-widest group-hover:text-red-600 transition-colors">Learn More</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 6. SOFTWARE MASTERY LOGOS */}
                {filteredDesignerSkills.length > 0 && (
                    <section className="w-11/12 md:w-10/12 mx-auto mb-20 text-center">
                        <div className="text-center mb-16">
                            <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Design Stack</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Creative Software Mastery
                                <span className="h-1.5 w-24 bg-gray-300 rounded-full"></span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {filteredDesignerSkills.map((skill, index) => (
                                <div key={index} onClick={() => setSelectedSoftware(skill)} className="flex flex-col items-center group bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-400 transition-all duration-500 hover:-translate-y-3 cursor-pointer relative">
                                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white transition-all duration-500 mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 flex items-center justify-center w-20 h-20 shadow-inner group-hover:shadow-md">
                                        <Image src={skill.image} width={50} height={50} objectFit="contain" alt={skill.name} />
                                    </div>
                                    <p className="mt-3 text-[10px] font-black uppercase text-gray-400 tracking-widest group-hover:text-gray-900 transition-colors">{skill.name}</p>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[-20px] bg-gray-800 text-white text-[9px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg uppercase font-bold tracking-widest z-10">View Details</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* UNITY SKILL MODAL */}
            {selectedUnitySkill && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedUnitySkill(null)}>
                    <div className="relative w-full max-w-lg bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl p-8" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 bg-indigo-900/50 rounded-2xl flex items-center justify-center border border-indigo-500/30 shadow-inner">
                                <Image src="/unityBadge.png" width={40} height={40} objectFit="contain" alt="Unity Logo" />
                            </div>
                            <button className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full outline-none focus:ring-2 focus:ring-indigo-500" onClick={() => setSelectedUnitySkill(null)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 flex items-center gap-3">
                            {selectedUnitySkill.name}
                        </h3>
                        <div className="h-1 w-16 bg-indigo-500 rounded-full mb-6"></div>
                        <p className="text-gray-300 leading-relaxed text-justify font-light text-sm">
                            {selectedUnitySkill.desc}
                        </p>
                    </div>
                </div>
            )}

            {/* SOFT SKILL MODAL */}
            {selectedSoftSkill && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedSoftSkill(null)}>
                    <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border-4 border-gray-100 text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors" onClick={() => setSelectedSoftSkill(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="text-7xl mb-6 drop-shadow-md bg-red-50 w-32 h-32 rounded-full flex items-center justify-center">{selectedSoftSkill.icon}</div>
                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedSoftSkill.label}</h3>
                        <div className="h-1.5 w-16 bg-red-500 rounded-full mb-8"></div>
                        <p className="text-gray-900 font-medium italic leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 w-full">"{selectedSoftSkill.desc}"</p>
                        <div className="text-left w-full px-2">
                            <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">In Practice</h4>
                            <p className="text-gray-600 leading-loose text-sm">{selectedSoftSkill.detailedDesc}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* SOFTWARE MODAL */}
            {selectedSoftware && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedSoftware(null)}>
                    <div className="relative w-full max-w-xl bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border-4 border-gray-100 text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors" onClick={() => setSelectedSoftware(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="p-6 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center w-32 h-32 shadow-inner border border-gray-100">
                            <Image src={selectedSoftware.image} width={80} height={80} objectFit="contain" alt={selectedSoftware.name} />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedSoftware.name}</h3>
                        <div className="h-1.5 w-16 bg-gray-400 rounded-full mb-8"></div>
                        <p className="text-gray-900 font-medium italic leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 w-full">"{selectedSoftware.desc}"</p>
                        <div className="text-left w-full px-2">
                            <h4 className="text-gray-500 font-black uppercase tracking-widest text-xs mb-4">Workflow Application</h4>
                            <p className="text-gray-600 leading-loose text-sm">{selectedSoftware.detailedDesc}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* TECHNICAL CORE MODAL */}
            {selectedTechnicalCore && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedTechnicalCore(null)}>
                    <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border-4 border-gray-100 text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors" onClick={() => setSelectedTechnicalCore(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="text-7xl mb-6 drop-shadow-md bg-red-50 w-32 h-32 rounded-full flex items-center justify-center">{selectedTechnicalCore.icon}</div>
                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedTechnicalCore.label}</h3>
                        <div className="h-1.5 w-16 bg-red-500 rounded-full mb-8"></div>
                        <p className="text-gray-900 font-medium italic leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 w-full">"{selectedTechnicalCore.desc}"</p>
                        <div className="text-left w-full px-4 py-6 bg-red-50/50 rounded-3xl border border-red-50">
                            <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Layman's Explanation
                            </h4>
                            <p className="text-gray-700 leading-loose text-sm font-medium">{selectedTechnicalCore.detailedDesc}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* WEB SKILL MODAL */}
            {selectedWebSkill && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedWebSkill(null)}>
                    <div className="relative w-full max-w-xl bg-gray-900 border border-gray-800 rounded-[3rem] p-10 md:p-14 shadow-2xl text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-500 transition-colors" onClick={() => setSelectedWebSkill(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="p-6 bg-white/5 rounded-3xl mb-8 flex items-center justify-center w-32 h-32 shadow-inner border border-white/5">
                            <Image src={selectedWebSkill.image} width={80} height={80} objectFit="contain" alt={selectedWebSkill.name} />
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{selectedWebSkill.name}</h3>
                        <div className="h-1.5 w-16 bg-blue-500 rounded-full mb-8"></div>
                        <p className="text-gray-300 font-medium italic leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 w-full">"{selectedWebSkill.desc}"</p>
                        <div className="text-left w-full px-6 py-6 border border-blue-500/20 bg-blue-900/20 rounded-3xl">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Technology Purpose
                            </h4>
                            <p className="text-gray-300 leading-loose text-sm">{selectedWebSkill.detailedDesc}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Skills;