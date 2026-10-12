import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/Seo'
import { absoluteUrl, site } from '../lib/site'
import { useState, useEffect } from "react"
import { projects, Project } from '../data/projects'
import Reveal from '../components/Reveal'
import HeroBackdrop from '../components/HeroBackdrop'
import { ArrowRightIcon, Button, Card, Input, SectionHeading, Select, Textarea, ToggleChip } from '../components/ui'

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

// Structured data so search engines can show a profile card for Ed.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.author,
  alternateName: 'Ed Cabrera',
  url: absoluteUrl('/'),
  image: absoluteUrl('/ed2025.jpg'),
  jobTitle: 'Computer Instructor, Web & Game Developer, UI/UX Designer',
  worksFor: { '@type': 'Organization', name: 'Provincial Government of Camarines Sur' },
  address: { '@type': 'PostalAddress', addressLocality: 'Pili', addressRegion: 'Camarines Sur', addressCountry: 'PH' },
  sameAs: site.sameAs,
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
    title: "Website Project",
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
    <div className="bg-gray-50 min-h-screen">
      <Seo path="/" title="John Edward Cabrera | Web & Game Developer, UI/UX Designer" description="Portfolio of John Edward Cabrera (Ed): computer instructor, web and game developer, and UI/UX designer from Camarines Sur, Philippines. ElevatED by Code | IllustratED by Design." jsonLd={personJsonLd} />
      <Header />

      <main className='scroll-smooth'>

        {/* HERO SECTION */}
        {/* Same brand banner treatment as components/PageHero.tsx, sized to fit the role slider and CTAs */}
        <section className="hero-curve -mt-20 pt-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 text-white relative overflow-hidden shadow-2xl">
          <HeroBackdrop />
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
                <Button href="/projects" iconRight={<ArrowRightIcon />}>Explore projects</Button>
                <Button href="/workxp" variant="glass">Experience &amp; CV</Button>
              </div>

              {/* ROLE CHIPS: highlight the current role; click to jump to one */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-2 mt-8">
                {roles.map((role, i) => (
                  <ToggleChip key={role} tone="dark" active={i === index} onClick={() => setIndex(i)}>{role}</ToggleChip>
                ))}
              </div>
            </div>

            {/* GLASS PROFILE CARD */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-xl backdrop-saturate-150 shadow-2xl p-6">
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-red-500/20 pointer-events-none"></div>
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/20 shadow-xl">
                  <Image src="/ed2025.jpg" fill style={{ objectFit: 'cover' }} priority alt="John Edward Cabrera" />
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
          <Reveal className="mb-12">
            <SectionHeading eyebrow="Explore" title="Everything in one place" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[14rem] gap-5">

            {/* PROJECTS: 2x2, collage of real project covers */}
            <Reveal className="md:col-span-2 lg:row-span-2 h-80 lg:h-full">
              <Link
                href="/projects"
                className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl bg-gray-900">

                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                  {projects.filter(p => p.image).slice(0, 4).map((p) => (
                    <div key={p.title} className="relative overflow-hidden">
                      <Image src={p.image!} fill style={{ objectFit: 'cover' }} alt="" className="group-hover:scale-110 transition-transform duration-700" />
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

              </Link>
            </Reveal>

            {/* SKILLS: 2x1, tech logos */}
            <Reveal delay={80} className="md:col-span-2 h-56 lg:h-full">
              <Link
                href="/skills"
                className="group relative flex flex-col justify-between h-full rounded-[2rem] p-7 bg-gray-900 shadow-xl overflow-hidden">

                <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-600 rounded-full blur-[90px] opacity-30"></div>
                <div className="relative flex flex-wrap gap-3">
                  {['html5', 'css', 'javascript', 'react', 'next', 'php', 'laravel', 'figma'].map((logo, i) => (
                    <div key={logo} style={{ transitionDelay: `${i * 40}ms` }} className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-2 group-hover:-translate-y-1 group-hover:bg-white/15 transition-all">
                      <Image src={`/${logo}.png`} width={28} height={28} style={{ objectFit: 'contain' }} alt={logo} />
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Technical Skills</h3>
                  <p className="text-xs text-gray-400 mt-1">Front-end, back-end, UI/UX and TESDA-certified instruction.</p>
                </div>

              </Link>
            </Reveal>

            {/* EXPERIENCE: current role */}
            <Reveal delay={120} className="h-56 lg:h-full">
              <Link
                href="/workxp"
                className="group relative flex flex-col justify-between h-full rounded-[2rem] p-7 bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-xl overflow-hidden">

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <span className="relative self-start text-[10px] font-black uppercase tracking-widest bg-white/15 border border-white/25 px-3 py-1 rounded-full">Now</span>
                <div className="relative">
                  <h3 className="text-lg font-black uppercase tracking-tight leading-tight">Computer Instructor</h3>
                  <p className="text-xs text-red-100 mt-1">Provincial Government of Camarines Sur</p>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">Career journey &rarr;</p>
                </div>

              </Link>
            </Reveal>

            {/* CERTIFICATIONS: Google badges */}
            <Reveal delay={160} className="h-56 lg:h-full">
              <Link
                href="/certifications"
                className="group flex flex-col justify-between h-full rounded-[2rem] p-7 bg-white border border-gray-100 shadow-xl hover:border-blue-300 transition-colors">

                <div className="flex -space-x-3">
                  {['gemini_certified_educator', 'certified_educator_level1', 'certified_educator_level2'].map((b) => (
                    <div key={b} className="relative w-14 h-14 rounded-full bg-white border-2 border-white shadow-md group-hover:-translate-y-1 transition-transform">
                      <Image src={`/skills/${b}.png`} fill style={{ objectFit: 'contain' }} alt="" />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900">Certifications</h3>
                  <p className="text-xs text-gray-500 mt-1">Google, TESDA, DICT and more.</p>
                </div>

              </Link>
            </Reveal>

            {/* PERSONAL: photo */}
            <Reveal delay={80} className="h-56 lg:h-full">
              <Link
                href="/personal"
                className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl">

                <Image src="/ed2025.jpg" fill style={{ objectFit: 'cover' }} alt="John Edward Cabrera" className="group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white">Get to know me</h3>
                  <p className="text-xs text-gray-300 mt-1">Based in Pili, Camarines Sur</p>
                </div>

              </Link>
            </Reveal>

            {/* EDUCATION: school logos */}
            <Reveal delay={120} className="h-56 lg:h-full">
              <Link
                href="/education"
                className="group flex flex-col justify-between h-full rounded-[2rem] p-7 bg-white border border-gray-100 shadow-xl hover:border-red-300 transition-colors">

                <div className="flex gap-3">
                  {['informatics', 'tesda'].map((logo) => (
                    <div key={logo} className="relative w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 p-2 group-hover:-translate-y-1 transition-transform">
                      <Image src={`/education/${logo}.png`} fill style={{ objectFit: 'contain' }} alt="" />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900">Education</h3>
                  <p className="text-xs text-gray-500 mt-1">Informatics College Manila and TESDA vocational training.</p>
                </div>

              </Link>
            </Reveal>

            {/* HOBBIES: 2x1, anime art strip */}
            <Reveal delay={160} className="md:col-span-2 h-56 lg:h-full">
              <Link
                href="/hobbies"
                className="group relative block h-full rounded-[2rem] overflow-hidden shadow-xl bg-indigo-900">

                <div className="absolute inset-0 flex">
                  {['onepiece.jpg', 'kimetsunoYaiba.jpg', 'fullmetal.jpg', 'drstone.jpg'].map((img) => (
                    <div key={img} className="relative flex-1 overflow-hidden">
                      <Image src={`/hobbies/anime/${img}`} fill style={{ objectFit: 'cover' }} alt="" className="group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-indigo-900/20"></div>
                <div className="absolute inset-y-0 left-0 p-7 flex flex-col justify-end">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Off the clock</h3>
                  <p className="text-xs text-indigo-200 mt-1">Games, anime and manga that fuel the design side.</p>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-indigo-300 group-hover:translate-x-2 transition-transform">See hobbies &rarr;</p>
                </div>

              </Link>
            </Reveal>
          </div>
        </section>

        {/* FEATURED WORK SECTION */}
        <section className="w-11/12 md:w-10/12 mx-auto py-10 pb-20">
          <SectionHeading eyebrow="Selected" title="Featured Work" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featured.length === 0 ? (
              [0, 1].map((i) => <div key={i} className="h-80 rounded-3xl bg-gray-200 animate-pulse"></div>)
            ) : featured.map((project) => (
              <Link
                key={project.title}
                href={{ pathname: '/projects', query: { project: project.title } }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block border border-gray-100">

                <Image src={project.image!} fill style={{ objectFit: 'cover' }} alt={project.title} className="transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-red-400 font-black text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">{project.type} &middot; {project.category}</span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">{project.fullTitle}</h3>
                  <p className="text-gray-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{project.description}</p>
                </div>

              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/projects" variant="dark" size="lg">View all projects</Button>
          </div>
        </section>

        {/* --- NEW QUERY FORM SECTION --- */}
        <section className="w-full bg-gray-900 py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading tone="light" eyebrow="Get In Touch" title="Connect with Me" description="Have a project in mind or need training? Send a query below." className="mb-16" />

            <Card as="form" variant="glass" onSubmit={handleEmailSubmit} className="p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input label="Full Name" required placeholder="Juan Dela Cruz" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <Select
                  label="Purpose"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  options={['Website Project', 'Game Project', 'UI/UX Design', 'Branding & Graphics', 'Training / Workshop', 'Other']}
                />
              </div>
              <Textarea label="Description" required rows={5} wrapperClassName="mb-8" placeholder="Tell me more about your project or inquiry..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              <Button type="submit" size="lg" fullWidth className="rounded-2xl py-5 tracking-[0.3em]">Launch Direct Query</Button>
            </Card>

            <div className="flex justify-center mt-12 mb-8">
              <Button href="/specialthanks" variant="glass" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} className="hover:bg-emerald-600 hover:border-emerald-500">
                View Project Acknowledgments
              </Button>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 py-24 text-white">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative w-11/12 md:w-10/12 mx-auto">
            <Reveal className="mb-14">
              <SectionHeading tone="light" eyebrow="What I stand for" title="Core Values & Philosophy" />
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
  );
}

export default Home;