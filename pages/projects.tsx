import type { NextPage } from 'next'
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import Image from 'next/image'
import Link from 'next/link' // Import Link for external links
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Project: NextPage = () => {

    // Enhanced project data structure with real images (or placeholders) and links
    const projects = [
        {
            title: "Advance Vehicle Inspection Service Online (AIVSO)",
            category: "Web Development",
            description: "Website for vehicle inspection co-related services provider a third party company for LTO (Land Transportation Office) in the Philippines.",
            image: "/projects/aipaygo/aviso1md.png", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "BOOYA",
            category: "Web Development / UI/UX",
            description: "Website for Donuts and Bagels food services.",
            image: "/projects/aipaygo/booyamd1.PNG", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "skytel",
            category: "Web Development / UI/UX",
            description: "A wifi community service provider.",
            image: "/projects/aipaygo/communifimd1.png", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "Golden Carabao Hospitality Group",
            category: "Web Development / UI/UX",
            description: "Website for a hospitality group where showcasing their food and services skill to another level and earned top-notch certifications for the qualified apprentice.",
            image: "/projects/aipaygo/goldencarabaomd1.png", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "HyperPocket",
            category: "Online System / E-Coins",
            description: "An autotrade e-coins system ment for etraiders just like bitcoins, litecoins, etc.",
            image: "/projects/aipaygo/hyperpocketdarkmd.png", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "Barangay Monitoring System (Pulilan, Bulacan)",
            category: "Government / Stand-alone system",
            description: "Developed a comprehensive monitoring system for local government, improving data management and operational efficiency.",
            image: "/projects/pulilan.png", // Placeholder - replace with real image
            link: "/projects"
        },
        {
            title: "Ant-Pay Video Presentation",
            category: "Graphic Design / Video Editing",
            description: "Created engaging video content to showcase Ant-Pay's features and benefits, enhancing user payroll system.",
            image: "/projects/antPay/antpay.png", // Placeholder
            link: "#"
        },
        {
            title: "Cheroniel",
            category: "UI design / Side Project",
            description: "I personally design the UI and prepare the product design that will be used for the website of this project.",
            image: "/projects/cheroniel/main_logo.png", // Placeholder
            link: "#"
        },
        {
            title: "Vanity Health and Wellness Branding",
            category: "Graphic Design / Branding / Side Project",
            description: "Developed comprehensive branding guidelines and marketing materials for Vanity Health and Wellness.",
            image: "/projects/vanity/fbCover.jpg", // Placeholder
            link: "#"
        },
        {
            title: "Jam Jam Baronda IloIlo free Wifi featuring Skytel",
            category: "Web Development / UI Design",
            description: "Created a personalized portfolio website for Rodell Ramos, showcasing his work and professional journey.",
            image: "/projects/aipaygo/skyteliloilomd.png", // Placeholder
            link: "#"
        },
        {
            title: "Pilo Villamar Pangasinan free Wifi featuring Skytel",
            category: "Web Development / UI Design",
            description: "Created a personalized portfolio website for Rodell Ramos, showcasing his work and professional journey.",
            image: "/projects/aipaygo/skytelpangasinanmd.png", // Placeholder
            link: "#"
        },
        {
            title: "Rodell Ramos Aklan free Wifi featuring Skytel",
            category: "Web Development / UI Design",
            description: "Created a personalized portfolio website for Rodell Ramos, showcasing his work and professional journey.",
            image: "/projects/aipaygo/skytelbatanmd.png", // Placeholder
            link: "#"
        },
    ];

    return (
        <div className="scroll-smooth bg-gray-50 font-main">
            <Head>
                <title>My Creative Works Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='pb-20'>
                {/* HERO HEADER */}
                <div className="bg-gradient-to-br from-indigo-700 to-purple-600 py-20 text-white text-center shadow-xl">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>My Creative Works</h1>
                    <div className="h-1 w-24 bg-white mx-auto my-4 rounded-full"></div>
                    <p className="text-lg font-light tracking-[0.3em] opacity-80 uppercase">Design | Code | Innovation</p>
                </div>

                {/* 1. KEY SKILL TAGS (Dynamically generated) */}
                <section className="w-10/12 mx-auto -mt-10 mb-20">
                    <div className="flex flex-wrap justify-center gap-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                        {/* Example dynamic tags from your roles */}
                        {["Front-End Developer", "UI/UX Designer", "Graphic Designer", "Quality Assurance", "Game Developer"].map((tag, index) => (
                            <span key={index} className="px-5 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-wide transition-all hover:bg-indigo-600 hover:text-white cursor-pointer shadow-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 2. PROJECT GALLERY GRID */}
                <section className="w-11/12 mx-auto mb-20">
                    <h2 className="text-3xl font-black uppercase text-gray-800 mb-12 text-center md:text-left">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <Link key={index} href={project.link}>
                                <a target="_blank" className="block group">
                                    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-indigo-400 group-hover:shadow-2xl group-hover:border-indigo-600 transition-all duration-300 transform group-hover:-translate-y-2">
                                        <div className="relative h-60 w-full bg-gray-100 overflow-hidden">
                                            <Image 
                                                src={project.image} 
                                                alt={project.title} 
                                                layout="fill" 
                                                objectFit="cover" 
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <span className="bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{project.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{project.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed italic">{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 3. OPTIONAL: FULL-SCREEN SWIPER FOR DETAILED VIEW (If needed) */}
                {/* Keeping this structured in case you want to use it for a more detailed, large-scale showcase. */}
                {/* For now, the grid above is likely sufficient for a portfolio. */}
                {/* <section className="w-full h-screen bg-gray-900 py-20">
                    <Swiper className='w-full h-full'
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="relative w-10/12 h-5/6 flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-gray-200">
                                        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
                                        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block self-center md:self-start">{project.category}</span>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                        <p className="text-md text-gray-600 leading-relaxed">{project.description}</p>
                                        <Link href={project.link}>
                                            <a target="_blank" className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors self-center md:self-start">View Project</a>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section> */}

            </main>
            <Footer />
        </div>
    )
}

export default Project;