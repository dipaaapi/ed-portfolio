/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const WorkXP = () => {
    const experiences = [
        {
            company: 'Provincial Government of Camarines Sur',
            position: 'Computer Instructor / Game Developer / Web Developer',
            date: 'September 2022 - Present',
            logoSquare: '/camarines_sur.png',
            logoLandscape: '/camarines_sur.png',
            highlight: true // We'll use this to make your current role stand out
        },
        {
            company: 'aipaygo inc.',
            position: 'front-end developer',
            date: 'April 26, 2021 - June 2022',
            logoSquare: '/aipaygo_logo_square.png',
            logoLandscape: '/aipaygo_logo_landscape.png',
        },
        {
            company: 'vertex digital entertainment technologies inc.',
            position: 'ui/ux designer',
            date: 'May 26, 2020 - November 30, 2020',
            logoSquare: '/vertex_logo_square.png',
            logoLandscape: '/vertex_logo_landscape.png',
        },
        {
            company: 'vanity health and welness',
            position: 'graphic artist | product designer',
            date: 'January 2020 - March 2020',
            logoSquare: '/vanity_logo_square.png',
            logoLandscape: '/vanity_logo_landscape.png',
        },
        {
            company: 'digima web solutions inc.',
            position: 'quality assurance | web tester',
            date: 'June 18, 2018 - August 30, 2019',
            logoSquare: '/digima_logo_square.png',
            logoLandscape: '/digima_logo_landscape.png',
        }
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Career Journey Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth bg-gray-50 pb-20'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 py-24 text-white text-center shadow-2xl">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>Career Journey</h1>
                    <div className="h-1 w-24 bg-red-500 mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-[0.3em] opacity-80 uppercase">Experience | Growth | Impact</p>
                </div>

                <div className="w-11/12 md:w-8/12 mx-auto -mt-12">
                    <div className="space-y-8">
                        {experiences.map((job, index) => (
                            <div 
                                key={index} 
                                className={`group relative flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl border-l-8 ${job.highlight ? 'border-red-600 scale-105 z-10' : 'border-gray-200 hover:border-red-400'}`}
                            >
                                {/* Left Side: Logos */}
                                <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-gray-50 rounded-2xl overflow-hidden">
                                        {/* Square Logo - Default */}
                                        <Image 
                                            src={job.logoSquare} 
                                            alt={job.company}
                                            layout='fill' 
                                            objectFit='contain'
                                            className="p-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" 
                                        />
                                        {/* Landscape Logo - Hover */}
                                        <Image 
                                            src={job.logoLandscape} 
                                            alt={job.company}
                                            layout='fill' 
                                            objectFit='contain'
                                            className="p-4 opacity-0 scale-150 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" 
                                        />
                                    </div>
                                </div>

                                {/* Right Side: Info */}
                                <div className="flex-grow text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className={`text-xl font-black uppercase tracking-tight ${job.highlight ? 'text-red-600' : 'text-gray-800'}`}>
                                            {job.company}
                                        </h3>
                                        <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full mt-2 md:mt-0 uppercase tracking-widest">
                                            {job.date}
                                        </span>
                                    </div>
                                    <h4 className="text-md font-bold text-gray-600 uppercase mb-4 italic">
                                        {job.position}
                                    </h4>
                                    
                                    {/* Instructional Background Touch */}
                                    <div className="h-[2px] w-12 bg-red-200 mb-4 mx-auto md:mx-0"></div>
                                    <p className="text-xs text-gray-400 leading-relaxed uppercase font-semibold tracking-wider">
                                        Professional Industry Contribution
                                    </p>
                                </div>

                                {/* Background Decoration for Current Job */}
                                {job.highlight && (
                                    <div className="absolute top-4 right-6">
                                        <span className="flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUMMARY SECTION */}
                <section className="w-10/12 md:w-6/12 mx-auto mt-20 p-10 bg-gray-900 text-white rounded-3xl text-center shadow-2xl">
                    <h3 className="text-2xl font-black uppercase mb-4 text-red-500">Industry Exposure</h3>
                    <p className="text-sm font-light leading-loose italic opacity-80">
                        "From ensuring digital quality in Pasay to instructing the next generation of designers in Camarines Sur, 
                        my career has been a balance of technical execution and creative leadership."
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default WorkXP;