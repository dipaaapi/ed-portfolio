import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from "react"
import { projects, Project } from '../data/projects'
import Reveal from '../components/Reveal'

// Random projects from different rows, each with a cover image.
const pickFeatured = (count: number): Project[] => {
  const pool = projects.filter(p => p.image).sort(() => Math.random() - 0.5);
  const picked: Project[] = [];
  for (const p of pool) {
    if (picked.length === count) break;
    if (!picked.some(q => q.type === p.type)) picked.push(p);
  }
  return picked;
}

const Home: NextPage = () => {
  const [openThought, setOpenThought] = useState<number | null>(null);
  // Picked after mount so the server render and the first client render match.
  const [featured, setFeatured] = useState<Project[]>([]);
  useEffect(() => setFeatured(pickFeatured(2)), []);

  const roles = [
    "Computer Instructor",
    "Web Developer",
    "UI/UX Designer",
    "Visual Graphic Designer",
    "Game Developer",
    "Quality Assurance Tester"
  ];

  const [index, setIndex] = useState(0);
  const yearsBuilding = new Date().getFullYear() - 2018;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: ""
  });

  // Advance the role every 4s; restarting on each change means a clicked role chip gets its full 4s.
  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % roles.length), 4000);
    return () => clearTimeout(timer);
  }, [index, roles.length]);

  const getArticle = (word: string) => {
    const firstLetter = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';
  };


  const thoughts = [
    { category: "Work", text: "Consistency is the bridge between goals and accomplishment. In design and code, the smallest details often hold the most weight.", icon: "💼", detailedText: "My approach to work involves breaking down complex institutional challenges into clear, manageable systems. I believe that sustainable growth in software engineering comes from building readable, well-architected solutions that respect both the machine executing them and the engineers maintaining them in the future. I lead by example, fostering a collaborative environment where every line of code serves a well-defined purpose." },
    { category: "Self-Improvement", text: "Education is a lifelong journey. As an instructor, I learn as much from my students as they learn from me.", icon: "🌱", detailedText: "The tech industry evolves blindly and rapidly. Staying relevant means adopting a perpetual student mindset. Outside of my professional projects, I allocate consistent hours toward exploring new frameworks, refining my pedagogical approaches, and pushing my UI designs beyond my previous limits. Mentoring others inadvertently sharpens my own fundamentals, making instruction one of my greatest tools for self-improvement." },
    { category: "Family & Life", text: "Family is my anchor. Everything I build and every milestone I reach is dedicated to them.", icon: "🏠", detailedText: "Behind every late-night coding session, sprint deadline, and curriculum planning is my family. They provide the necessary contrast to the digital noise of development, reminding me of what truly holds value. I actively cultivate a strong work-life integration that ensures the professional sacrifices I make translate into greater stability and joy for the people I care about the most." },
    { category: "Existence", text: "We are the architects of our own reality. Life is about finding the balance between logic and beauty.", icon: "✨", detailedText: "I approach my existence the same way I approach UI/UX development: as an orchestration of form and function. Logically, we must solve the functional necessities of survival, but the beauty and passion we inject into our daily lives is what makes that survival meaningful. By consciously designing my daily habits, I ensure that my trajectory always aligns with my core values." }
  ];

  // EMAIL HANDLER
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailTo = "cabrerajohnedward@gmail.com";
    const subject = encodeURIComponent(`Project Query: ${formData.title}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nProject Title/Purpose: ${formData.title}\n\nDescription:\n${formData.description}`
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen font-main">
      <Head>
        <title>Portfolio | John Edward Cabrera | Code & Design</title>
        <meta name="description" content="Portfolio of John Edward Cabrera. ElevatED by Code | IllustratED by Design. A dedicated IT professional and Computer Instructor." />
        <meta property="og:title" content="Portfolio | John Edward Cabrera" />
        <meta property="og:description" content="ElevatED by Code | IllustratED by Design. A dedicated IT professional and Computer Instructor." />
        <meta property="og:image" content="/edLogo.png" />
      </Head>
      <Header />

      <main className='scroll-smooth'>

        {/* HERO SECTION */}
        {/* Same brand banner treatment as components/PageHero.tsx, sized to fit the role slider and CTAs */}
        <section className="hero-curve -mt-20 pt-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
          <div className="min-h-[24rem] md:min-h-[30rem] w-11/12 md:w-10/12 mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center pt-8 pb-20 relative z-10">

            {/* INTRO */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] bg-white/10 border border-white/25 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                ElevatED by Code <span className="text-red-400">|</span> IllustratED by Design
              </span>

              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                Hi, I&rsquo;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">Ed.</span>
              </h1>

              <p className="mt-5 text-xl sm:text-3xl font-black tracking-tight text-gray-300 min-h-[2.5rem] sm:min-h-[3rem]">
                {getArticle(roles[index]) === 'an' ? 'An' : 'A'}{' '}
                <span key={index} className="role-in inline-block text-white italic">{roles[index]}</span>
                <span className="inline-block w-[3px] h-[0.9em] bg-red-500 ml-1 align-middle caret-blink" aria-hidden="true"></span>
              </p>

              <p className="mt-5 text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Teaching, building and designing for the web and for games since 2018, from Camarines Sur, Philippines.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link href="/projects">
                  <a className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-colors">
                    Explore projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </Link>
                <Link href="/workxp">
                  <a className="bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-full shadow-lg transition-colors">
                    Experience &amp; CV
                  </a>
                </Link>
              </div>

              {/* ROLE CHIPS: highlight the current role; click to jump to one */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-2 mt-8">
                {roles.map((role, i) => (
                  <button
                    key={role}
                    onClick={() => setIndex(i)}
                    className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${i === index ? 'bg-white text-red-600 border-white shadow-lg' : 'bg-white/5 text-gray-300 border-white/15 hover:bg-white/15'}`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* GLASS PROFILE CARD */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-xl backdrop-saturate-150 shadow-2xl p-6">
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-red-500/20 pointer-events-none"></div>
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/20 shadow-xl">
                  <Image src="/ed2025.jpg" layout="fill" objectFit="cover" priority alt="John Edward Cabrera" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-gray-900/60 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Open to projects &amp; training</span>
                  </div>
                </div>
                <div className="relative mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    { value: `${yearsBuilding}+`, label: 'Years' },
                    { value: projects.length, label: 'Projects' },
                    { value: roles.length, label: 'Roles' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 py-3">
                      <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID: tiles of different sizes that show their content instead of describing it */}
        <section className="w-11/12 md:w-10/12 mx-auto py-20">
          <Reveal className="flex flex-col items-center text-center mb-12">
            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">Explore</span>
            <h2 className="font-black text-3xl lg:text-4xl uppercase tracking-tight text-gray-900">Everything in one place</h2>
            <div className="h-1.5 w-24 bg-red-500 rounded-full mt-5"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[14rem] gap-5">

            {/* PROJECTS: 2x2, collage of real project covers */}
            <Reveal className="md:col-span-2 lg:row-span-2 h-80 lg:h-full">
              <Link href="/projects">
                <a className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl bg-gray-900">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                    {projects.filter(p => p.image).slice(0, 4).map((p) => (
                      <div key={p.title} className="relative overflow-hidden">
                        <Image src={p.image!} layout="fill" objectFit="cover" alt="" className="group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-red-600 text-white px-3 py-1 rounded-full">{projects.length} projects</span>
                    <h3 className="mt-4 text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white">Project Gallery</h3>
                    <p className="mt-2 text-sm text-gray-300 max-w-md">Games, tools, government systems, e-commerce and brand work.</p>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-red-400 group-hover:translate-x-2 transition-transform">Browse projects &rarr;</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* SKILLS: 2x1, tech logos */}
            <Reveal delay={80} className="md:col-span-2 h-56 lg:h-full">
              <Link href="/skills">
                <a className="group relative flex flex-col justify-between h-full rounded-[2rem] p-7 bg-gray-900 shadow-xl overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-600 rounded-full blur-[90px] opacity-30"></div>
                  <div className="relative flex flex-wrap gap-3">
                    {['html5', 'css', 'javascript', 'react', 'next', 'php', 'laravel', 'figma'].map((logo, i) => (
                      <div key={logo} style={{ transitionDelay: `${i * 40}ms` }} className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-2 group-hover:-translate-y-1 group-hover:bg-white/15 transition-all">
                        <Image src={`/${logo}.png`} width={28} height={28} objectFit="contain" alt={logo} />
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Technical Skills</h3>
                    <p className="text-xs text-gray-400 mt-1">Front-end, back-end, UI/UX and TESDA-certified instruction.</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* EXPERIENCE: current role */}
            <Reveal delay={120} className="h-56 lg:h-full">
              <Link href="/workxp">
                <a className="group relative flex flex-col justify-between h-full rounded-[2rem] p-7 bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-xl overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <span className="relative self-start text-[10px] font-black uppercase tracking-widest bg-white/15 border border-white/25 px-3 py-1 rounded-full">Now</span>
                  <div className="relative">
                    <h3 className="text-lg font-black uppercase tracking-tight leading-tight">Computer Instructor</h3>
                    <p className="text-xs text-red-100 mt-1">Provincial Government of Camarines Sur</p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">Career journey &rarr;</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* CERTIFICATIONS: Google badges */}
            <Reveal delay={160} className="h-56 lg:h-full">
              <Link href="/certifications">
                <a className="group flex flex-col justify-between h-full rounded-[2rem] p-7 bg-white border border-gray-100 shadow-xl hover:border-blue-300 transition-colors">
                  <div className="flex -space-x-3">
                    {['gemini_certified_educator', 'certified_educator_level1', 'certified_educator_level2'].map((b) => (
                      <div key={b} className="relative w-14 h-14 rounded-full bg-white border-2 border-white shadow-md group-hover:-translate-y-1 transition-transform">
                        <Image src={`/skills/${b}.png`} layout="fill" objectFit="contain" alt="" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-gray-900">Certifications</h3>
                    <p className="text-xs text-gray-500 mt-1">Google, TESDA, DICT and more.</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* PERSONAL: photo */}
            <Reveal delay={80} className="h-56 lg:h-full">
              <Link href="/personal">
                <a className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="/ed2025.jpg" layout="fill" objectFit="cover" alt="John Edward Cabrera" className="group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">Get to know me</h3>
                    <p className="text-xs text-gray-300 mt-1">Based in Pili, Camarines Sur</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* EDUCATION: school logos */}
            <Reveal delay={120} className="h-56 lg:h-full">
              <Link href="/education">
                <a className="group flex flex-col justify-between h-full rounded-[2rem] p-7 bg-white border border-gray-100 shadow-xl hover:border-red-300 transition-colors">
                  <div className="flex gap-3">
                    {['informatics', 'tesda'].map((logo) => (
                      <div key={logo} className="relative w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 p-2 group-hover:-translate-y-1 transition-transform">
                        <Image src={`/education/${logo}.png`} layout="fill" objectFit="contain" alt="" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-gray-900">Education</h3>
                    <p className="text-xs text-gray-500 mt-1">Informatics College Manila and TESDA vocational training.</p>
                  </div>
                </a>
              </Link>
            </Reveal>

            {/* HOBBIES: 2x1, anime art strip */}
            <Reveal delay={160} className="md:col-span-2 h-56 lg:h-full">
              <Link href="/hobbies">
                <a className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl bg-indigo-900">
                  <div className="absolute inset-0 flex">
                    {['onepiece.jpg', 'kimetsunoYaiba.jpg', 'fullmetal.jpg', 'drstone.jpg'].map((img) => (
                      <div key={img} className="relative flex-1 overflow-hidden">
                        <Image src={`/hobbies/anime/${img}`} layout="fill" objectFit="cover" alt="" className="group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-indigo-900/20"></div>
                  <div className="absolute inset-y-0 left-0 p-7 flex flex-col justify-end">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Off the clock</h3>
                    <p className="text-xs text-indigo-200 mt-1">Games, anime and manga that fuel the design side.</p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-indigo-300 group-hover:translate-x-2 transition-transform">See hobbies &rarr;</p>
                  </div>
                </a>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FEATURED WORK SECTION */}
        <section className="w-11/12 md:w-10/12 mx-auto py-10 pb-20">
          <div className="flex flex-col items-center text-center justify-center mb-16">
            <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-widest text-gray-900 drop-shadow-sm">Featured Work</h2>
            <div className="h-1.5 w-32 bg-red-500 rounded-full mt-6 shadow-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featured.length === 0 ? (
              [0, 1].map((i) => <div key={i} className="h-80 rounded-3xl bg-gray-200 animate-pulse"></div>)
            ) : featured.map((project) => (
              <Link key={project.title} href={{ pathname: '/projects', query: { project: project.title } }}>
                <a className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block border border-gray-100">
                  <Image src={project.image!} layout="fill" objectFit="cover" alt={project.title} className="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-red-400 font-black text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">{project.type} &middot; {project.category}</span>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">{project.fullTitle}</h3>
                    <p className="text-gray-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{project.description}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <a className="inline-block bg-gray-900 hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-colors">View all projects</a>
            </Link>
          </div>
        </section>

        {/* --- NEW QUERY FORM SECTION --- */}
        <section className="w-full bg-gray-900 py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center justify-center mb-16">
              <span className="text-red-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">Get In Touch</span>
              <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-widest text-white drop-shadow-lg">Connect with Me</h2>
              <div className="h-1.5 w-32 bg-red-500 rounded-full mt-6 shadow-lg shadow-red-500/50"></div>
              <p className="text-gray-400 mt-6 max-w-2xl italic text-sm leading-relaxed">Have a project in mind or need training? Send a query below.</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Juan Dela Cruz"
                    className="bg-gray-800 border-none text-white rounded-xl p-4 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Purpose / Title</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Website Design Project"
                    className="bg-gray-800 border-none text-white rounded-xl p-4 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Description</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me more about your project or inquiry..."
                  className="bg-gray-800 border-none text-white rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] py-5 rounded-2xl shadow-lg hover:shadow-red-500/20 transition-all transform active:scale-95"
              >
                Launch Direct Query
              </button>
            </form>

            <div className="flex justify-center mt-12 mb-8">
              <Link href="/specialthanks">
                <a className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-emerald-600 text-white font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl border border-gray-700 hover:border-emerald-500 hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  View Project Acknowledgments
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 py-24 text-white">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative w-11/12 md:w-10/12 mx-auto">
            <Reveal className="text-center mb-14">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] bg-white/10 border border-white/25 backdrop-blur-md px-4 py-2 rounded-full">What I stand for</span>
              <h2 className="mt-5 font-black text-3xl lg:text-5xl uppercase tracking-tight">Core Values &amp; Philosophy</h2>
              <div className="h-1.5 w-24 bg-red-500 rounded-full mt-5 mx-auto shadow-lg shadow-red-500/50"></div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {thoughts.map((item, i) => {
                const open = openThought === i;
                return (
                  <Reveal key={item.category} delay={i * 90}>
                    <article className={`h-full rounded-[2rem] border p-7 sm:p-9 transition-colors duration-300 ${open ? 'bg-white/15 border-white/40' : 'bg-white/5 border-white/15 hover:bg-white/10'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">{item.icon}</span>
                          <h3 className="text-sm font-black uppercase tracking-widest text-red-400">{item.category}</h3>
                        </div>
                        <span className="text-4xl font-black text-white/10 leading-none">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <blockquote className="mt-6 text-lg sm:text-xl font-bold leading-snug text-white">
                        &ldquo;{item.text}&rdquo;
                      </blockquote>
                      <div className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
                        <p className="overflow-hidden text-sm text-gray-300 leading-loose">{item.detailedText}</p>
                      </div>
                      <button
                        onClick={() => setOpenThought(open ? null : i)}
                        aria-expanded={open}
                        className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                      >
                        {open ? 'Show less' : 'Read the philosophy'}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>


      </main>


      <Footer />
    </div>
  )
}

export default Home;