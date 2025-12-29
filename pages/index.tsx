import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"

const Home: NextPage = () => {
  const roles = [
    "Computer Instructor",
    "Web Developer",
    "UI/UX Designer",
    "Visual Graphic Designer",
    "Game Developer",
    "Quality Assurance"
  ];

  const [index, setIndex] = useState(0);

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

  // RESTORED ALL SIX SECTIONS
  const sections = [
    { title: "Technical Skills", path: "/skills", content: "Expertise in Front-end development (React/NextJS) and UI Design. Certified Instruction based on TESDA Training Regulations." },
    { title: "Personal Hobbies", path: "/hobbies", content: "A balance of creativity and tech: Gaming, Anime, and Manga. These interests fuel my design inspiration and keep logic sharp." },
    { title: "Project Gallery", path: "/projects", content: "A showcase of LGU systems, marketing websites, and video presentations built for industry impact and efficiency." },
    { title: "Work Experience", path: "/workxp", content: "From Tondo to Camarines Sur—a career journey of growth, technical execution, and instructional leadership." },
    { title: "Personal Info", path: "/personal", content: "Get to know me: A dedicated IT professional and Computer Instructor based in Pili, Camarines Sur." },
    { title: "Education", path: "/education", content: "Academic foundation from Informatics College Manila and vocational certifications from TESDA and Google." }
  ];

  const thoughts = [
    { category: "Work", text: "Consistency is the bridge between goals and accomplishment. In design and code, the smallest details often hold the most weight.", icon: "💼" },
    { category: "Self-Improvement", text: "Education is a lifelong journey. As an instructor, I learn as much from my students as they learn from me.", icon: "🌱" },
    { category: "Family & Life", text: "Family is my anchor. Everything I build and every milestone I reach is dedicated to them.", icon: "🏠" },
    { category: "Existence", text: "We are the architects of our own reality. Life is about finding the balance between logic and beauty.", icon: "✨" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-main">
      <Header />

      <main className='scroll-smooth'>
        
        {/* HERO SECTION - NEW HORIZONTAL SLIDE ANIMATION */}
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

            <div className="flex justify-center gap-6 mt-6">
              <Link href="https://www.linkedin.com/in/john-edward-cabrera-956bba147/" target="_blank">
                <a className='hover:scale-125 transition-transform bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/10'>
                    <svg className='fill-current w-6 h-6 text-white' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </Link>
              <Link href="https://www.facebook.com/MasterEd28/" target="_blank">
                <a className='hover:scale-125 transition-transform bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/10'>
                    <svg className='fill-current w-6 h-6 text-white' viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ALL 6 SECTIONS DISPLAYED AS BENTO TILES */}
        <section className="w-11/12 md:w-10/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((item, i) => (
                <Link key={i} href={item.path}>
                    <a className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border-b-4 border-transparent hover:border-red-500 transition-all duration-300 h-full flex flex-col">
                        <h3 className="text-red-500 font-black text-2xl mb-4 group-hover:underline uppercase tracking-tighter">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed italic text-justify flex-grow">
                            {item.content}
                        </p>
                        <div className="mt-6 text-xs font-bold text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-[0.2em]">Explore More →</div>
                    </a>
                </Link>
            ))}
        </section>

        {/* PERSONAL EXPRESSIONS SECTION */}
        <section className="bg-gray-100 py-20 border-y border-gray-200">
            <div className="w-10/12 mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-black uppercase text-gray-900">Core Values & Philosophy</h2>
                    <div className="h-1 flex-grow bg-red-200"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {thoughts.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h4 className="text-red-500 font-bold uppercase text-xs tracking-widest mb-3">{item.category}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed text-justify italic">"{item.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="py-20 text-center bg-white">
            <p className="text-[10px] font-black tracking-[0.5em] text-gray-400 mb-10 uppercase">Special Thanks To</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
                <Link href="https://vercel.com/dipaaapi/ed-portfolio" target="_blank">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <Image src="/favicon.ico" alt="Vercel" width={24} height={24} />
                        <span className="font-black text-xl group-hover:text-blue-600 transition-colors">Vercel</span>
                    </div>
                </Link>
                <Link href="https://jsonplaceholder.typicode.com/" target="_blank">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <Image src="/jsonPlaceholder.png" alt="JSON" width={24} height={24} />
                        <span className="font-bold text-xl uppercase tracking-tighter group-hover:text-blue-600 transition-colors">JSON Placeholder</span>
                    </div>
                </Link>
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}

export default Home;