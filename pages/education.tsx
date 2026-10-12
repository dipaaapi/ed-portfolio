/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../components/footer';
import PageHero from '../components/PageHero'
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Education = () => {
    // 1. ORGANIZED DATA STRUCTURE
    const educationData = [
        {
            level: 'Tertiary',
            school: 'Informatics College Manila',
            course: 'BS Information Technology (BSIT)',
            date: 'April 28, 2018',
            address: '2070 BDO Building C.M. Recto, Manila',
            logo: '/education/informatics.png'
        },
        {
            level: 'Vocational',
            school: 'TESDA',
            course: 'CHS or CSS / Comp. Tech.',
            date: 'July 16, 2012',
            address: '#233 Lopez Bldg. Tayuman Street Tondo, Manila',
            logo: '/education/tesda.png'
        },
        {
            level: 'Vocational',
            school: 'ISCOM',
            course: 'Computer Literacy Basic and Advance',
            date: 'June 8, 2008',
            address: 'Plaza Morga corner Moriones St., Tondo, Manila',
            logo: '/education/iscom.png'
        },
        {
            level: 'Secondary',
            school: 'Dr. Juan G. Nolasco',
            course: 'High School',
            date: 'April 13, 2005',
            address: '#252 Tioco, Tondo, Manila',
            logo: '/education/nolasco.png'
        },
        {
            level: 'Primary',
            school: 'Amado V. Hernandez',
            course: 'Elementary School',
            date: 'April 25, 2001',
            address: 'Sto. Niño Street, Barrio Magsaysay, Tondo, Manila',
            logo: '/education/amado.png'
        }
    ];

    const certificates = [
        { src: "/education/tmLevel1.jpg", alt: "TM Level 1" },
        { src: "/education/vgdNC3.jpg", alt: "VGD NC III" },
        { src: "/education/gameDev.jpg", alt: "Game Development" }
    ];

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Educational Journey Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>

            <main className='scroll-smooth bg-gray-50 pb-20'>
                {/* HERO HEADER */}
                <PageHero eyebrow="Education" title="Educational Journey" subtitle="Academic & Professional Foundation" />

                {/* 2. AUTO-PLAY CAROUSEL SECTION */}
                <section className="w-full relative z-20 mt-8 mb-20 overflow-hidden">
                    <style jsx>{`
                        @keyframes autoScroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            display: flex;
                            width: max-content;
                            animation: autoScroll 30s linear infinite;
                        }
                        .animate-scroll:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="animate-scroll gap-6 md:gap-8 pb-12 pt-4 px-4">
                        {[...educationData, ...educationData].map((edu, index) => (
                            <div key={index} className="flex-shrink-0 w-[320px] md:w-[450px] flex flex-col bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl hover:border-red-500 hover:-translate-y-4 transition-all duration-500 cursor-default">
                                {/* Logo Box */}
                                <div className="w-full bg-gray-50 h-56 flex items-center justify-center group-hover:bg-red-50 transition-colors border-b border-gray-100 p-8">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={edu.logo}
                                            alt={edu.school}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="p-8 md:p-10 flex-grow flex flex-col items-center text-center">
                                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        {edu.level}
                                    </span>
                                    <h2 className="text-2xl font-black text-gray-900 uppercase leading-tight tracking-tight mb-2 group-hover:text-red-600 transition-colors flex-grow">
                                        {edu.school}
                                    </h2>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                                        {edu.course}
                                    </h3>
                                    <div className="mt-auto w-full pt-6 border-t border-gray-100">
                                        <p className="text-xs text-gray-500 leading-relaxed italic mb-4">
                                            📍 {edu.address}
                                        </p>
                                        <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-widest group-hover:text-gray-600">
                                            <span>Graduated:</span>
                                            <span className="text-red-500">{edu.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. PHYSICAL CERTIFICATES SHOWCASE */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-20 mb-20">
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Vocational Mastery</span>
                        <h2 className="text-4xl lg:text-5xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                            Licenses & Assessments
                            <span className="h-1.5 w-24 bg-red-500 rounded-full"></span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certificates.map((cert, i) => (
                            <div key={i} className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-3">
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                                    <p className="text-white font-black text-xl uppercase tracking-widest transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 border-b-2 border-red-500 pb-2">{cert.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Education;