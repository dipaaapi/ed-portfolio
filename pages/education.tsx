/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer';
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
        <div className={styles.container}>
            <Head>
                <title>Educational Journey Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth bg-gray-50 pb-20'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 py-20 text-white text-center shadow-xl">
                    <h1 className='text-4xl md:text-5xl font-black uppercase tracking-tighter'>Educational Journey</h1>
                    <div className="h-1 w-24 bg-red-500 mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-[0.3em] opacity-80 uppercase">Academic & Professional Foundation</p>
                </div>

                {/* 2. TIMELINE SECTION */}
                <section className="w-11/12 md:w-10/12 mx-auto -mt-10">
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all">
                                {/* Logo Box */}
                                <div className="w-full md:w-1/4 bg-gray-100 p-8 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                                        <Image 
                                            src={edu.logo} 
                                            alt={edu.school} 
                                            layout="fill" 
                                            objectFit="contain" 
                                            className="group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="w-full md:w-3/4 p-8 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <span className="text-xs font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full w-max mx-auto md:mx-0">
                                            {edu.level}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 md:mt-0">
                                            Graduated: {edu.date}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase leading-tight group-hover:text-red-700 transition-colors">
                                        {edu.school}
                                    </h2>
                                    <h3 className="text-md font-bold text-gray-500 mt-1 italic">
                                        {edu.course}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-widest border-t pt-4">
                                        📍 {edu.address}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. PHYSICAL CERTIFICATES SHOWCASE */}
                <section className="w-10/12 mx-auto mt-20">
                    <h2 className="text-center text-2xl font-black uppercase text-gray-800 mb-10 tracking-widest">Digital Credentials & Licenses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certificates.map((cert, i) => (
                            <div key={i} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:border-red-500 transition-all">
                                <Image 
                                    src={cert.src} 
                                    alt={cert.alt} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-bold uppercase tracking-widest border-2 border-white px-4 py-2">{cert.alt}</p>
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