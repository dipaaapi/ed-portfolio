import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Seo from '../components/Seo'
import Footer from '../components/footer'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import StickyPillBar from '../components/StickyPillBar'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'
import useScrollLock from '../hooks/useScrollLock'

// Tailwind 3.0 has no line-clamp utility, so clamp with inline styles.
const clamp = (lines: number) => ({ display: '-webkit-box', WebkitLineClamp: lines, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' });

// Projects whose tech stack mentions any of the keywords, e.g. "React" -> AIVSO, HyperPocket.
const projectsUsing = (keywords: string[] = []) =>
    projects.filter(p => p.techStack?.some(t => keywords.some(k => t.toLowerCase().includes(k.toLowerCase()))));

// "Built with this" list inside the web-skill and software popups.
const BuiltWith = ({ keywords, dark = false }: { keywords?: string[], dark?: boolean }) => {
    const used = projectsUsing(keywords);
    if (used.length === 0) return null;
    return (
        <div className="w-full text-left mt-6">
            <h4 className={`font-black uppercase tracking-widest text-xs mb-3 ${dark ? 'text-blue-400' : 'text-red-600'}`}>Built with this ({used.length})</h4>
            <div className="flex flex-wrap gap-2">
                {used.map((p) => (
                    <Link
                        key={p.title}
                        href={{ pathname: '/projects', query: { project: p.title } }}
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-full border transition-colors ${dark ? 'border-white/15 bg-white/5 text-gray-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white' : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-red-600 hover:border-red-600 hover:text-white'}`}>

                        {p.title}→
                                                
                    </Link>
                ))}
            </div>
        </div>
    );
};

const sectionLinks = [
    { id: 'core', label: 'Technical Core' },
    { id: 'web', label: 'Web Stack' },
    { id: 'gamedev', label: 'Game Dev' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'design', label: 'Design Tools' },
];

const Skills: NextPage = () => {
    const [activeSection, setActiveSection] = useState('core');
    const [selectedUnitySkill, setSelectedUnitySkill] = useState<any>(null);
    const [activeSoft, setActiveSoft] = useState(0);
    const [selectedSoftware, setSelectedSoftware] = useState<any>(null);
    const [selectedWebSkill, setSelectedWebSkill] = useState<any>(null);
    const [selectedTechnicalCore, setSelectedTechnicalCore] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const searchStr = searchQuery.toLowerCase();

    // Highlight the section-jump pill for whichever section is on screen.
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sectionLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [searchQuery]);

    const jumpTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: 'smooth' });
    };

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
        { name: "Adobe Photoshop", keywords: ["Photoshop", "Adobe Core"], image: "/adobePs.png", desc: "Advanced raster graphics editing and digital painting.", detailedDesc: "I use Photoshop for comprehensive image manipulation, precise color correction, and crafting complex UI assets. Its robust layer and masking systems are critical for my high-fidelity mockups." },
        { name: "Adobe Illustrator", keywords: ["Illustrator", "Adobe Core"], image: "/adobeAi.png", desc: "Precision vector graphics and scalable logo design.", detailedDesc: "My go-to tool for typography, iconography, and scalable vector assets. Illustrator ensures that all of my graphical resources remain crisp across every device resolution." },
        { name: "Affinity by Canva", keywords: ["Affinity"], image: "/affinity.svg", desc: "All-in-one vector, photo and layout design suite.", detailedDesc: "Affinity combines vector illustration, photo editing and page layout in one app, so I can move between logo work, image retouching and print-ready layouts without switching tools. It's a fast, lightweight alternative to the Adobe workflow for branding and marketing materials." },
        { name: "Figma", keywords: ["Figma"], image: "/figma.png", desc: "Collaborative UI/UX design and interactive prototyping.", detailedDesc: "Figma anchors my entire design process. I use it to establish design systems, wireframe layouts rapidly, and create high-fidelity interactive prototypes before writing a single line of code." },
        { name: "Balsamiq", image: "/balsamiq.png", desc: "Rapid low-fidelity wireframing and initial conceptualization.", detailedDesc: "Balsamiq allows me to focus purely on layout and structure without getting derailed by visual aesthetics. It's essential for rapid brainstorming and initial client pitches." },
        { name: "Canva", image: "/canva.png", desc: "Quick-turnaround marketing materials and presentation assets.", detailedDesc: "When I need professional, visually appealing graphics on a tight deadline, Canva streamlines my workflow for social media updates, slide decks, and basic promotional content." },
        { name: "Google Sites", image: "/siteGoogle.png", desc: "Rapid development of internal wikis and educational portals.", detailedDesc: "Perfect for integrating seamlessly with the Google Workspace ecosystem. I deploy Google Sites to host curriculum materials, classroom hubs, and internal documentation quickly." }
    ];

    const webskills = [
        { name: "HTML5", keywords: ["HTML"], image: "/html5.png", desc: "The standard markup language for documents designed to be displayed in a web browser.", detailedDesc: "Purpose: It provides the basic structure (the skeleton) of every single web page on the internet. Without it, there is no website." },
        { name: "CSS", keywords: ["CSS"], image: "/css.png", desc: "Cascading Style Sheets used for describing the presentation of a document written in HTML.", detailedDesc: "Purpose: It provides the visual styling (colors, layouts, fonts) to make a boring HTML skeleton into a beautiful graphical page." },
        { name: "Javascript", keywords: ["JS", "JavaScript", "TypeScript", "Phaser"], image: "/javascript.png", desc: "A programming language that allows you to implement complex features and interactivity on web pages.", detailedDesc: "Purpose: It adds behavior and logic. Whenever something moves, updates rapidly, or reacts to your clicks without reloading the page, Javascript is doing the work." },
        { name: "Php", keywords: ["PHP", "Laravel"], image: "/php.png", desc: "A general-purpose scripting language that is especially suited to backend server web development.", detailedDesc: "Purpose: It runs on the server (behind the scenes) to connect websites to databases, process form submissions, and handle logical calculations secretly." },
        { name: "MySQL", keywords: ["MySQL"], image: "/mysql.png", desc: "An open-source relational database management system.", detailedDesc: "Purpose: It is the digital filing cabinet where all website data (like user accounts, passwords, and submitted posts) is securely stored, organized, and retrieved." },
        { name: "ReactJs", keywords: ["React"], image: "/react.png", desc: "A front-end JavaScript library for building user interfaces based on UI components.", detailedDesc: "Purpose: It allows me to build extremely fast, app-like websites by breaking the design down into reusable 'components' rather than building massive, slow, individual pages." },
        { name: "NextJs", keywords: ["Next.js"], image: "/next.png", desc: "A React framework that gives you building blocks to create extremely fast web applications.", detailedDesc: "Purpose: It powers this very portfolio! It optimizes React websites so they load instantly on search engines and are incredibly fast for users to interact with." },
        { name: "Bootstrap", keywords: ["Bootstrap"], image: "/bootstrap.png", desc: "A CSS framework directed at responsive, mobile-first front-end web development.", detailedDesc: "Purpose: It provides pre-built buttons, layouts, and menus so I can rapidly construct a standard, mobile-friendly website without coding every style from scratch." },
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
    const filteredWebSkills = webskills.filter(skill => skill.name.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr) || skill.keywords?.some(k => k.toLowerCase().includes(searchStr)));
    const filteredUnitySkills = unityskills.filter(skill => skill.name.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr));
    const filteredGoogleBadges = googleBadges.filter(badge => badge.title.toLowerCase().includes(searchStr) || badge.skills.some(s => s.toLowerCase().includes(searchStr)));
    const filteredSoftSkills = softSkills.filter(skill => skill.label.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr));
    const filteredDesignerSkills = designerskills.filter(skill => skill.name.toLowerCase().includes(searchStr) || skill.desc.toLowerCase().includes(searchStr));
    const totalMatches = filteredTechnicalInsights.length + filteredWebSkills.length + filteredUnitySkills.length + filteredGoogleBadges.length + filteredSoftSkills.length + filteredDesignerSkills.length;

    const stats = [
        { value: `${new Date().getFullYear() - 2018}+`, label: 'Years building' },
        { value: webskills.length + designerskills.length, label: 'Tools & languages' },
        { value: googleBadges.length + 1, label: 'Certified badges' },
        { value: projects.length, label: 'Portfolio projects' },
    ];
    const games = projects.filter(p => p.type === 'Games');
    // Clamp so the selected soft-skill tab stays valid when search shrinks the list.
    const activeSoftIndex = Math.min(activeSoft, Math.max(filteredSoftSkills.length - 1, 0));
    const activeSkill = filteredSoftSkills[activeSoftIndex];

    // Lock page scroll while a modal is open.
    useScrollLock(Boolean(selectedUnitySkill || selectedSoftware || selectedTechnicalCore || selectedWebSkill));

    return (
        <div className="scroll-smooth bg-gray-50 relative">
            <Seo path="/skills" title="Skills & Expertise" description="Front-end, back-end, game development and UI/UX skills of John Edward Cabrera, with Google and Unity certified credentials." />

            <main className='scroll-smooth pb-20 bg-gray-50'>
                {/* HERO HEADER */}
                <PageHero
                    eyebrow="Skills & Stack"
                    title="Expertise & Mastery"
                    subtitle="Code | Design | Industry Leadership"
                    search={{ value: searchQuery, onChange: setSearchQuery, placeholder: 'Search skills, software, keywords...' }}
                >
                    {/* AT-A-GLANCE STATS */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline justify-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-3 sm:px-4 py-2 shadow-lg">
                                <span className="text-lg sm:text-xl font-black tracking-tighter">{stat.value}</span>
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-300">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </PageHero>

                {/* SEARCH SUGGESTIONS / MATCH COUNT (the search bar itself lives in the banner) */}
                <div className="w-11/12 md:w-8/12 mx-auto mt-8 mb-6">
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        {searchQuery ? (
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{totalMatches} {totalMatches === 1 ? 'match' : 'matches'} for &ldquo;{searchQuery}&rdquo;</p>
                        ) : (
                            <>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Try:</span>
                                {['React', 'Unity', 'Figma', 'Google', 'Leadership'].map((term) => (
                                    <button key={term} onClick={() => setSearchQuery(term)} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:border-red-500 hover:text-red-600 transition-colors">{term}</button>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                {/* SECTION JUMP BAR */}
                <StickyPillBar items={sectionLinks} active={activeSection} onSelect={jumpTo} className="mb-12" />

                {totalMatches === 0 && (
                    <div className="text-center py-20 px-4">
                        <p className="text-5xl mb-4">🔍</p>
                        <p className="text-gray-500 font-bold">No skills match &ldquo;{searchQuery}&rdquo;.</p>
                        <button onClick={() => setSearchQuery('')} className="mt-6 text-xs font-black uppercase tracking-widest text-red-600 hover:underline">Clear search</button>
                    </div>
                )}

                {/* 1. TECHNICAL EXPERTISE OVERVIEW */}
                {filteredTechnicalInsights.length > 0 && (
                    <section id="core" className="w-11/12 md:w-10/12 mx-auto mb-24 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">
                        {/* Intro column stays in view while the cards scroll on desktop */}
                        <Reveal className="lg:sticky lg:top-40 text-center lg:text-left">
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Foundation</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight">Technical Core</h2>
                            <div className="h-1.5 w-20 bg-red-500 rounded-full mt-5 mx-auto lg:mx-0"></div>
                            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                                Where instructional pedagogy meets industry-standard production: the areas that let me ship quality digital products and teach others to do the same.
                            </p>
                            <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-gray-400">{filteredTechnicalInsights.length} core areas &middot; tap one for the plain-language version</p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {filteredTechnicalInsights.map((insight, index) => (
                                <Reveal key={insight.label} delay={index * 80} className="h-full">
                                    <button onClick={() => setSelectedTechnicalCore(insight)} className="group relative w-full h-full text-left bg-white p-7 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                        <span className="absolute top-0 left-7 right-7 h-1 rounded-b-full bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                                        <div className="flex items-start justify-between">
                                            <div className="text-3xl w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">{insight.icon}</div>
                                            <span className="text-3xl font-black text-gray-100 group-hover:text-red-100 transition-colors">{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                        <h3 className="mt-6 text-lg font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">{insight.label}</h3>
                                        <p className="mt-3 text-sm text-gray-500 leading-relaxed" style={clamp(3)}>{insight.desc}</p>
                                        <p className="mt-5 text-[10px] font-black uppercase tracking-widest text-red-500 group-hover:translate-x-1 transition-transform">Why it matters &rarr;</p>
                                    </button>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                )}

                {/* 2. WEB DEVELOPMENT STACK */}
                {filteredWebSkills.length > 0 && (
                    <section id="web" className="w-full bg-gray-900 py-20 relative overflow-hidden">
                        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                        <div className="w-11/12 md:w-10/12 mx-auto relative z-10">
                            <Reveal className="flex flex-col items-center text-center justify-center mb-16">
                                <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Languages & Frameworks</span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-widest drop-shadow-lg">Web Development Stack</h2>
                                <div className="h-1.5 w-32 bg-blue-500 rounded-full mt-6 shadow-lg shadow-blue-500/50"></div>
                                <p className="text-gray-400 mt-6 max-w-2xl italic text-sm leading-relaxed">Full-Stack engineering and Responsive UI architecture. Tap a technology to see why I use it and the projects I built with it.</p>
                            </Reveal>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
                                {filteredWebSkills.map((skill, index) => {
                                    const usedIn = projectsUsing(skill.keywords).length;
                                    return (
                                        <Reveal key={skill.name} delay={index * 60}>
                                            <button onClick={() => setSelectedWebSkill(skill)} className="w-full flex flex-col items-center group cursor-pointer relative focus:outline-none">
                                                <div className="relative w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 group-focus:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500 p-4 shadow-lg group-hover:shadow-blue-500/30 group-hover:-translate-y-3">
                                                    <Image src={skill.image} width={60} height={60} style={{ objectFit: 'contain' }} alt={skill.name} className="group-hover:scale-110 transition-transform" />
                                                    {usedIn > 0 && (
                                                        <span className="absolute -top-2 -right-2 min-w-[1.5rem] h-6 px-1.5 rounded-full bg-blue-500 text-white text-[10px] font-black flex items-center justify-center shadow-lg shadow-blue-500/40" title={`Used in ${usedIn} projects`}>{usedIn}</span>
                                                    )}
                                                </div>
                                                <p className="mt-4 text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-blue-400 transition-colors">{skill.name}</p>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-blue-300 transition-colors">{usedIn > 0 ? `${usedIn} ${usedIn === 1 ? 'project' : 'projects'}` : 'Why use this?'}</p>
                                            </button>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. ASSOCIATE UNITY GAME DEVELOPER */}
                {filteredUnitySkills.length > 0 && (
                    <section id="gamedev" className="w-full bg-indigo-900 py-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                        <div className="w-10/12 mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 flex justify-center flex-shrink-0">
                                <div className="relative w-48 h-48 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                    <Image src="/unityBadge.png" fill style={{ objectFit: 'contain' }} alt="Unity Certified Associate Badge" />
                                </div>
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-4 tracking-widest drop-shadow-md">Unity Game Development</h2>
                                <p className="text-indigo-200 text-sm italic mb-10 md:text-justify max-w-2xl">Certified Associate Unity Game Developer core competencies. Click on a skill to explore its practical application in my workflow.</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                                    {filteredUnitySkills.map((skill, index) => (
                                        <button onClick={() => setSelectedUnitySkill(skill)} key={index} className="px-5 sm:px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:border-indigo-400 hover:bg-indigo-500 transition-all duration-300 shadow-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                            <p className="text-xs sm:text-sm font-bold uppercase text-indigo-100 tracking-widest group-hover:text-white transition-colors">{skill.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* GAMES I'VE BUILT */}
                        <div className="w-11/12 md:w-10/12 mx-auto relative z-10 mt-16">
                            <p className="text-indigo-300 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 text-center md:text-left">Game dev in practice</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {games.map((game, index) => (
                                    <Reveal key={game.title} delay={index * 120}>
                                        <Link
                                            href={{ pathname: '/projects', query: { project: game.title } }}
                                            className="group relative block h-56 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

                                            <Image src={game.image!} fill style={{ objectFit: 'cover' }} alt={game.fullTitle} className="transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                                <h3 className="text-white text-xl font-black uppercase tracking-tight">{game.fullTitle}</h3>
                                                <div className="flex flex-wrap gap-1.5 mt-2">
                                                    {game.techStack?.slice(0, 3).map((t) => (
                                                        <span key={t} className="text-[9px] font-bold uppercase tracking-widest bg-white/15 backdrop-blur-md text-indigo-100 px-2.5 py-1 rounded-full">{t}</span>
                                                    ))}
                                                </div>
                                                <p className="text-indigo-200 text-[10px] font-black uppercase tracking-widest mt-3 group-hover:translate-x-2 transition-transform">View project &rarr;</p>
                                            </div>

                                        </Link>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. UPDATED GOOGLE CREDENTIALS SECTION */}
                {filteredGoogleBadges.length > 0 && (
                    <section id="credentials" className="w-11/12 md:w-10/12 mx-auto mt-20 mb-20">
                        <Reveal className="text-center mb-12">
                            <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Verified by Google</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Google for Education Credentials
                                <span className="h-1.5 w-24 bg-blue-500 rounded-full"></span>
                            </h2>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredGoogleBadges.map((badge, index) => (
                                <Reveal key={index} delay={index * 100} className="h-full">
                                    <a href={badge.link} target="_blank" rel="noreferrer" className="group p-8 bg-white rounded-[2.5rem] border border-gray-100 hover:border-blue-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 transition-all duration-300 flex flex-col items-center text-center h-full">
                                        <div className="relative w-24 h-24 mb-6">
                                            <Image src={badge.badgeImage} fill style={{ objectFit: 'contain' }} alt={badge.title} />
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
                                        <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:text-blue-700 transition-colors">Verify credential &#8599;</span>
                                    </a>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                )}

                {/* 5. EXPANDED SOFT SKILLS (TRANSVERSAL COMPETENCIES) */}
                {filteredSoftSkills.length > 0 && (
                    <section id="soft" className="w-11/12 md:w-10/12 mx-auto mb-24">
                        <Reveal className="text-center mb-10">
                            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Interpersonal</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight">Transversal Soft Skills</h2>
                            <div className="h-1.5 w-20 bg-red-500 rounded-full mt-5 mx-auto"></div>
                        </Reveal>

                        {/* Tab panel: pick a skill on the left, read it in full on the right */}
                        <Reveal className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] gap-5">
                            <div role="tablist" aria-label="Soft skills" className="min-w-0 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                                {filteredSoftSkills.map((skill, i) => (
                                    <button
                                        key={skill.label}
                                        role="tab"
                                        aria-selected={i === activeSoftIndex}
                                        onClick={() => setActiveSoft(i)}
                                        className={`flex-shrink-0 flex items-center gap-3 text-left px-4 py-3 rounded-2xl border transition-all duration-300 ${i === activeSoftIndex ? 'bg-gray-900 text-white border-gray-900 shadow-xl' : 'bg-white text-gray-600 border-gray-100 hover:border-red-300 hover:text-gray-900'}`}
                                    >
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap lg:whitespace-normal">{skill.label}</span>
                                    </button>
                                ))}
                            </div>

                            {activeSkill && (
                                <div role="tabpanel" key={activeSkill.label} className="role-in relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 shadow-xl p-7 sm:p-10">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                                    <div className="relative">
                                        <div className="flex items-center gap-4">
                                            <div className="text-4xl w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">{activeSkill.icon}</div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-red-500">{String(activeSoftIndex + 1).padStart(2, '0')} / {String(filteredSoftSkills.length).padStart(2, '0')}</p>
                                                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-gray-900">{activeSkill.label}</h3>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-base sm:text-lg text-gray-800 font-medium leading-relaxed border-l-4 border-red-500 pl-5">{activeSkill.desc}</p>
                                        <h4 className="mt-8 text-red-600 font-black uppercase tracking-widest text-xs">In practice</h4>
                                        <p className="mt-3 text-sm text-gray-600 leading-loose">{activeSkill.detailedDesc}</p>
                                    </div>
                                </div>
                            )}
                        </Reveal>
                    </section>
                )}

                {/* 6. SOFTWARE MASTERY LOGOS */}
                {filteredDesignerSkills.length > 0 && (
                    <section id="design" className="w-11/12 md:w-10/12 mx-auto mb-20 text-center">
                        <div className="text-center mb-16">
                            <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Design Stack</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                                Creative Software Mastery
                                <span className="h-1.5 w-24 bg-gray-300 rounded-full"></span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
                            {filteredDesignerSkills.map((skill, index) => {
                                const usedIn = projectsUsing(skill.keywords).length;
                                return (
                                    <Reveal key={skill.name} delay={index * 60} className="h-full">
                                        <button onClick={() => setSelectedSoftware(skill)} className="w-full h-full flex flex-col items-center group bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-400 transition-all duration-500 hover:-translate-y-3 cursor-pointer relative">
                                            <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white transition-all duration-500 mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 flex items-center justify-center w-20 h-20 shadow-inner group-hover:shadow-md">
                                                <Image src={skill.image} width={50} height={50} style={{ objectFit: 'contain' }} alt={skill.name} />
                                            </div>
                                            <p className="mt-3 text-[10px] font-black uppercase text-gray-400 tracking-widest group-hover:text-gray-900 transition-colors">{skill.name}</p>
                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-red-500 transition-colors">{usedIn > 0 ? `${usedIn} ${usedIn === 1 ? 'project' : 'projects'}` : 'View details'}</p>
                                        </button>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* CALL TO ACTION */}
                <Reveal className="w-11/12 md:w-10/12 mx-auto">
                    <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-900 to-red-900 p-8 sm:p-14 text-center shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
                        <div className="relative z-10">
                            <span className="text-red-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">See it in action</span>
                            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">These skills built {projects.length} projects</h2>
                            <p className="text-gray-400 text-sm italic mt-4 max-w-xl mx-auto">From government systems and e-commerce to games and desktop tools. Browse the work, or reach out to build something together.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                                <Link
                                    href="/projects"
                                    className="bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-red-600/30 transition-colors">
                                    Explore projects
                                </Link>
                                <Link
                                    href="/certifications"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full transition-colors">
                                    View certifications
                                </Link>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </main>

            {/* UNITY SKILL MODAL */}
            {selectedUnitySkill && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedUnitySkill(null)}>
                    <div className="relative w-full max-w-lg bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl p-8" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 bg-indigo-900/50 rounded-2xl flex items-center justify-center border border-indigo-500/30 shadow-inner">
                                <Image src="/unityBadge.png" width={40} height={40} style={{ objectFit: 'contain' }} alt="Unity Logo" />
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

            {/* SOFTWARE MODAL */}
            {selectedSoftware && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedSoftware(null)}>
                    <div className="relative w-full max-w-xl bg-white rounded-[3rem] p-10 md:p-14 max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-100 text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors" onClick={() => setSelectedSoftware(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="p-6 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center w-32 h-32 shadow-inner border border-gray-100">
                            <Image src={selectedSoftware.image} width={80} height={80} style={{ objectFit: 'contain' }} alt={selectedSoftware.name} />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedSoftware.name}</h3>
                        <div className="h-1.5 w-16 bg-gray-400 rounded-full mb-8"></div>
                        <p className="text-gray-900 font-medium italic leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 w-full">"{selectedSoftware.desc}"</p>
                        <div className="text-left w-full px-2">
                            <h4 className="text-gray-500 font-black uppercase tracking-widest text-xs mb-4">Workflow Application</h4>
                            <p className="text-gray-600 leading-loose text-sm">{selectedSoftware.detailedDesc}</p>
                        </div>
                        <BuiltWith keywords={selectedSoftware.keywords} />
                    </div>
                </div>
            )}

            {/* TECHNICAL CORE MODAL */}
            {selectedTechnicalCore && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm transition-all" onClick={() => setSelectedTechnicalCore(null)}>
                    <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 md:p-14 max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-100 text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
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
                    <div className="relative w-full max-w-xl bg-gray-900 border border-gray-800 rounded-[3rem] p-10 md:p-14 max-h-[90vh] overflow-y-auto shadow-2xl text-center flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-500 transition-colors" onClick={() => setSelectedWebSkill(null)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <div className="p-6 bg-white/5 rounded-3xl mb-8 flex items-center justify-center w-32 h-32 shadow-inner border border-white/5">
                            <Image src={selectedWebSkill.image} width={80} height={80} style={{ objectFit: 'contain' }} alt={selectedWebSkill.name} />
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
                        <BuiltWith keywords={selectedWebSkill.keywords} dark />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Skills;