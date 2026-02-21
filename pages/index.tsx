import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from "react"

const Home: NextPage = () => {
  const [selectedThought, setSelectedThought] = useState<any>(null);

  const roles = [
    "Computer Instructor",
    "Web Developer",
    "UI/UX Designer",
    "Visual Graphic Designer",
    "Game Developer",
    "Quality Assurance"
  ];

  const [index, setIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const getArticle = (word: string) => {
    const firstLetter = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';
  };

  const sections = [
    { title: "Technical Skills", path: "/skills", content: "Expertise in Front-end development (React/NextJS) and UI Design. Certified Instruction based on TESDA Training Regulations." },
    { title: "Personal Hobbies", path: "/hobbies", content: "A balance of creativity and tech: Gaming, Anime, and Manga. These interests fuel my design inspiration and keep logic sharp." },
    { title: "Project Gallery", path: "/projects", content: "A showcase of LGU systems, marketing websites, and video presentations built for industry impact and efficiency." },
    { title: "Work Experience", path: "/workxp", content: "From Tondo to Camarines Sur—a career journey of growth, technical execution, and instructional leadership." },
    { title: "Personal Info", path: "/personal", content: "Get to know me: A dedicated IT professional and Computer Instructor based in Pili, Camarines Sur." },
    { title: "Education", path: "/education", content: "Academic foundation from Informatics College Manila and vocational certifications from TESDA and Google." }
  ];

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
        <section className="h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"></div>

          <div className="z-10 text-center px-4 w-full">
            <h2 className="text-sm md:text-xl font-light tracking-[0.5em] uppercase mb-6 opacity-70">ElevatED by Code | IllustratED by Design</h2>

            <div className="font-black text-3xl md:text-5xl tracking-tighter mb-8 leading-none">
              Hi, I&lsquo;m <span className="text-red-500">ED</span>. I am {getArticle(roles[index])}
              <br />
              <div className="flex flex-col items-center mt-6">
                <div className="relative w-full max-w-4xl h-24 overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out italic text-red-500"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {roles.map((role, i) => (
                      <div key={i} className="min-w-full flex items-center justify-center text-center">
                        <p className="text-3xl md:text-5xl whitespace-nowrap px-4 leading-tight">
                          {role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
              <div className="flex gap-4">
                <Link href="https://github.com/dipaaapi" target="_blank">
                  <a className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 md:px-8 rounded-full border border-gray-600 transition-all shadow-xl flex items-center gap-2">
                    <svg className='fill-current w-5 h-5 text-white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View GitHub
                  </a>
                </Link>
                <div className="relative group">
                  <div className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-all shadow-xl hover:shadow-red-500/50 flex items-center gap-2 cursor-pointer">
                    Download CV
                    <svg className="w-4 h-4 ml-1 transform group-hover:-rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <div className="absolute top-full left-0 mt-4 w-full bg-white text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 z-50">
                    <a href="/PDS-ED.pdf" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 hover:bg-red-50 hover:text-red-600 font-black text-sm tracking-widest uppercase border-b border-gray-100 transition-colors text-center">
                      PDS-ED
                    </a>
                    <div className="px-6 py-4 bg-gray-50/50 text-gray-300 font-black text-sm tracking-widest uppercase cursor-not-allowed text-center relative group/tooltip">
                      RESUME
                      <div className="absolute hidden group-hover/tooltip:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-gray-900 text-white text-[9px] py-1 px-3 rounded">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/john-edward-cabrera-956bba147/" target="_blank">
                  <a className='hover:scale-125 transition-transform bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10'>
                    <svg className='fill-current w-5 h-5 text-white' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </Link>
                <Link href="https://www.facebook.com/MasterEd28/" target="_blank">
                  <a className='hover:scale-125 transition-transform bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10'>
                    <svg className='fill-current w-5 h-5 text-white' viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO TILES SECTIONS */}
        <section className="w-11/12 md:w-10/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, i) => (
            <Link key={i} href={item.path}>
              <a className="group bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl border border-gray-100 hover:border-red-500 transition-all duration-500 h-full flex flex-col items-center text-center hover:-translate-y-3">
                <h3 className="text-red-600 font-black text-2xl mb-4 uppercase tracking-tighter group-hover:text-red-500 transition-colors">{item.title}</h3>
                <div className="h-0.5 w-12 bg-red-100 mb-6 group-hover:bg-red-400 transition-colors"></div>
                <p className="text-sm text-gray-500 leading-relaxed italic flex-grow px-2">{item.content}</p>
                <div className="mt-8 text-[10px] font-black text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-[0.2em]">Explore More →</div>
              </a>
            </Link>
          ))}
        </section>

        {/* FEATURED WORK SECTION */}
        <section className="w-11/12 md:w-10/12 mx-auto py-10 pb-20">
          <div className="flex flex-col items-center text-center justify-center mb-16">
            <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-widest text-gray-900 drop-shadow-sm">Featured Work</h2>
            <div className="h-1.5 w-32 bg-red-500 rounded-full mt-6 shadow-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href="/projects">
              <a className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block border border-gray-100">
                <Image src="/projects/aipaygo/aviso1md.png" layout="fill" objectFit="cover" alt="AIVSO" className="transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-red-500 font-black text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">Web Development</span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">Advance Vehicle Inspection Service</h3>
                  <p className="text-gray-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">A portal for LTO third-party providers in the Philippines.</p>
                </div>
              </a>
            </Link>
            <Link href="/projects">
              <a className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block border border-gray-100">
                <Image src="/projects/aipaygo/booyamd1.PNG" layout="fill" objectFit="cover" alt="BOOYA" className="transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-indigo-400 font-black text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">UI/UX Design</span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">Booya Donuts & Bagels</h3>
                  <p className="text-gray-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Modern e-commerce interface for a food services brand.</p>
                </div>
              </a>
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
        <section className="bg-gray-100 py-20 border-y border-gray-200">
          <div className="w-10/12 mx-auto">
            <div className="flex flex-col items-center text-center justify-center mb-16">
              <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-widest text-gray-900 drop-shadow-sm">Core Values & Philosophy</h2>
              <div className="h-1.5 w-32 bg-red-500 rounded-full mt-6 shadow-sm"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {thoughts.map((item, i) => (
                <div key={i} onClick={() => setSelectedThought(item)} className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center rounded-[2rem] shadow-xl hover:shadow-2xl hover:border-red-500 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h4 className="text-red-600 font-black uppercase text-sm tracking-widest mb-4">{item.category}</h4>
                  <div className="h-0.5 w-12 bg-gray-100 mb-4"></div>
                  <p className="text-sm text-gray-500 leading-relaxed italic">"{item.text}"</p>
                  <div className="mt-6 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Learn More</div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      {/* CORE VALUE MODAL */}
      {selectedThought && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSelectedThought(null)}></div>
          <div className="relative bg-white rounded-[3rem] p-10 md:p-14 w-full max-w-2xl shadow-2xl border-4 border-gray-100 transform transition-all text-center">
            <button
              onClick={() => setSelectedThought(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="text-7xl mb-6 drop-shadow-md bg-red-50 w-32 h-32 mx-auto rounded-full flex items-center justify-center">{selectedThought.icon}</div>
            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{selectedThought.category}</h3>
            <div className="h-1.5 w-16 bg-red-500 rounded-full mx-auto mb-8"></div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 mb-8 items-center text-center">
              <p className="text-gray-900 font-medium italic leading-relaxed">"{selectedThought.text}"</p>
            </div>

            <div className="text-left bg-white px-2">
              <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">Deep Philosophy</h4>
              <p className="text-gray-600 leading-loose text-sm">{selectedThought.detailedText}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Home;