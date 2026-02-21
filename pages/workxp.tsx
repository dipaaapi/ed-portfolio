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
            highlight: true, // We'll use this to make your current role stand out
            responsibilities: [
                "Spearheaded the development of targeted web and local game applications, increasing user and student engagement.",
                "Instructed foundational to advanced technology tracks, bridging the gap between theoretical knowledge and industry application.",
                "Integrated modern tech stacks into government initiatives, improving process efficiency and digital footprint."
            ]
        },
        {
            company: 'aipaygo inc.',
            position: 'front-end developer',
            date: 'April 26, 2021 - June 2022',
            logoSquare: '/aipaygo_logo_square.png',
            logoLandscape: '/aipaygo_logo_landscape.png',
            responsibilities: [
                "Engineered responsive and dynamic user interfaces for fintech applications using React and Next.js.",
                "Collaborated with backend engineers to consume RESTful APIs, reducing data fetch times and improving UI state management.",
                "Orchestrated cross-browser compatibility and responsive design, ensuring a seamless experience across all device platforms."
            ]
        },
        {
            company: 'vertex digital entertainment technologies inc.',
            position: 'ui/ux designer',
            date: 'May 26, 2020 - November 30, 2020',
            logoSquare: '/vertex_logo_square.png',
            logoLandscape: '/vertex_logo_landscape.png',
            responsibilities: [
                "Designed intuitive wireframes, mockups, and high-fidelity prototypes for digital entertainment platforms.",
                "Conducted user research and translated demographic feedback into actionable design iterations, boosting user retention metrics.",
                "Established unified design systems and UI component libraries to accelerate the development lifecycle."
            ]
        },
        {
            company: 'vanity health and welness',
            position: 'graphic artist | product designer',
            date: 'January 2020 - March 2020',
            logoSquare: '/vanity_logo_square.png',
            logoLandscape: '/vanity_logo_landscape.png',
            responsibilities: [
                "Produced comprehensive visual branding and marketing collateral, directly enhancing the clinic's digital branding.",
                "Developed engaging social media graphical content, increasing online interactions and brand awareness.",
                "Designed packaging and promotional materials to support new product launches and service expansions."
            ]
        },
        {
            company: 'digima web solutions inc.',
            position: 'quality assurance | web tester',
            date: 'June 18, 2018 - August 30, 2019',
            logoSquare: '/digima_logo_square.png',
            logoLandscape: '/digima_logo_landscape.png',
            responsibilities: [
                "Executed rigorous manual testing protocols across various client web applications.",
                "Identified, documented, and tracked software defects, collaborating tightly with the development team for prompt resolution.",
                "Assessed UI/UX consistency and functional integrity prior to major deployment phases."
            ]
        }
    ];

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Career Journey Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='scroll-smooth bg-gray-50 pb-20'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 py-32 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-50 blur-3xl"></div>
                    <div className="relative z-10">
                        <h1 className='text-5xl font-black uppercase tracking-tighter drop-shadow-2xl'>Career Journey</h1>
                        <div className="h-1.5 w-32 bg-red-500 mx-auto my-6 rounded-full shadow-lg"></div>
                        <p className="text-lg font-light tracking-[0.3em] opacity-90 uppercase">Experience | Growth | Impact</p>
                    </div>
                </div>

                <div className="w-11/12 md:w-8/12 mx-auto mt-8 relative z-20">
                    <div className="space-y-8">
                        {experiences.map((job, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col md:flex-row items-center bg-white p-8 rounded-[2rem] shadow-xl transition-all duration-500 hover:shadow-2xl border-l-[12px] ${job.highlight ? 'border-red-600 scale-[1.02] z-10 hover:border-red-500' : 'border-gray-200 hover:border-red-400 hover:-translate-y-2'}`}
                            >
                                {/* Left Side: Logos */}
                                <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-gray-50 rounded-[1.5rem] overflow-hidden group-hover:bg-red-50 transition-colors">
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
                                        <h3 className={`text-2xl font-black uppercase tracking-tight ${job.highlight ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600 transition-colors'}`}>
                                            {job.company}
                                        </h3>
                                        <span className="text-[9px] font-black bg-gray-100 text-gray-500 px-3 py-1 rounded-full mt-2 md:mt-0 uppercase tracking-widest">
                                            {job.date}
                                        </span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4 inline-block md:block w-full">
                                        {job.position}
                                    </h4>

                                    <ul className="text-sm text-gray-500 leading-relaxed text-left list-none space-y-3">
                                        {job.responsibilities && job.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-red-400 font-black mt-0.5">•</span>
                                                <span className="italic">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                <section className="w-10/12 md:w-8/12 mx-auto mt-20 p-12 bg-white border border-gray-100 rounded-[3rem] text-center shadow-xl mb-20 relative overflow-hidden">
                    <h3 className="text-3xl font-black uppercase mb-6 text-gray-900 tracking-tight flex flex-col items-center gap-4">
                        Industry Exposure
                        <span className="h-1.5 w-16 bg-red-500 rounded-full"></span>
                    </h3>
                    <p className="text-sm font-medium text-gray-500 leading-loose italic max-w-3xl mx-auto px-4">
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