import type { NextPage } from 'next'
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import Image from 'next/image'
import { useState, useMemo } from 'react';

const Project: NextPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        { title: "AIVSO", fullTitle: "Advance Vehicle Inspection Service Online", category: "Web Development", description: "A portal for LTO third-party providers in the Philippines.", quote: "Efficiency in government services starts with a clean UI and a robust back-end.", image: "/projects/aipaygo/aviso1md.png" },
        { title: "BOOYA", fullTitle: "Booya Donuts & Bagels", category: "UI/UX Design", description: "Modern e-commerce interface for a food services brand.", quote: "Design should be as sweet and accessible as the product it sells.", image: "/projects/aipaygo/booyamd1.PNG" },
        { title: "Skytel", fullTitle: "Skytel Community Wifi", category: "Web Development", description: "A community-based wifi service management system.", quote: "Connectivity is a right, not a privilege. Building for the community requires empathy.", image: "/projects/aipaygo/communifimd1.png" },
        { title: "Golden Carabao", fullTitle: "Golden Carabao Hospitality Group", category: "UI/UX Design", description: "Showcasing world-class hospitality services and apprentice tracking.", quote: "Hospitality is about experience; the digital platform must reflect that same care.", image: "/projects/aipaygo/goldencarabaomd1.png" },
        { title: "HyperPocket", fullTitle: "HyperPocket E-Coins", category: "Online System", description: "An automated trade e-coin system for digital traders.", quote: "Security and transparency are the currencies of the digital age.", image: "/projects/aipaygo/hyperpocketdarkmd.png" },
        { title: "Barangay Monitoring", fullTitle: "Pulilan LGU Monitoring System", category: "Government System", description: "Stand-alone administrative system for Pulilan, Bulacan.", quote: "Empowering local leaders with data-driven decision-making tools.", image: "/projects/pulilan.png" },
        { title: "Ant-Pay", fullTitle: "Ant-Pay Video Presentation", category: "Graphic Design", description: "Engaging motion graphics showcasing payroll automation.", quote: "Motion design turns complex data into a compelling visual narrative.", image: "/projects/antPay/antpay.png" },
        { title: "Cheroniel", fullTitle: "Cheroniel Branding Project", category: "UI Design", description: "Branding and product design for the Cheroniel project.", quote: "Branding is the soul of the project. It's how we speak without using words.", image: "/projects/cheroniel/main_logo.png" },
        { title: "Vanity Health", fullTitle: "Vanity Health & Wellness", category: "Graphic Design", description: "Brand identity and marketing collateral for wellness services.", quote: "Wellness is a holistic journey; branding must breathe tranquility.", image: "/projects/vanity/fbCover.jpg" },
        { title: "Skytel Iloilo", fullTitle: "Jam Jam Baronda Free Wifi", category: "Web Design", description: "Custom captive portal design for Iloilo public wifi.", quote: "Public access requires seamless and intuitive user on-boarding.", image: "/projects/aipaygo/skyteliloilomd.png" },
        { title: "Skytel Pangasinan", fullTitle: "Pilo Villamar Free Wifi", category: "Web Design", description: "UI Design for free wifi access points in Pangasinan.", quote: "Visual consistency across regions strengthens the service brand.", image: "/projects/aipaygo/skytelpangasinanmd.png" },
        { title: "Skytel Aklan", fullTitle: "Rodell Ramos Aklan Free Wifi", category: "Web Design", description: "Localized wifi landing page for the Aklan region.", quote: "Localization makes technology feel closer to the people it serves.", image: "/projects/aipaygo/skytelbatanmd.png" }
    ];

    const positions = ['Computer Instructor', 'Web Developer', 'UI/UX Designer', 'Quality Assurance', 'Visual Graphic Designer', 'Game Developer'];
    const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);
    const filteredProjects = projects.filter(p => activeFilter === 'All' ? true : p.category === activeFilter);

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Project Showcase Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='pb-20'>
                {/* HERO */}
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 py-20 text-white text-center shadow-2xl">
                    <h1 className='text-5xl font-black uppercase tracking-tighter'>Project Showcase</h1>
                    <div className="h-1.5 w-32 bg-red-500 mx-auto rounded-full mt-4"></div>
                    <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto px-4">
                        {positions.map((pos, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">{pos}</span>
                        ))}
                    </div>
                </div>

                {/* FILTER */}
                <section className="w-11/12 mx-auto -mt-8 mb-12 relative z-10">
                    <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-wrap justify-center gap-2 border border-gray-100">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeFilter === cat ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>{cat}</button>
                        ))}
                    </div>
                </section>

                {/* GRID */}
                <section className="w-11/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <div key={index} onClick={() => setSelectedProject(project)} className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{project.category}</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-2">{project.title}</h3>
                                    <h2 className="text-xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-red-600 transition-colors">{project.fullTitle}</h2>
                                    <p className="text-sm text-gray-500 leading-relaxed italic border-l-4 border-red-500 pl-4">Click to view details</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* MODAL SECTION */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedProject(null)}>
                    <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-5 right-5 z-[110] bg-red-600 text-white w-10 h-10 rounded-full font-bold shadow-lg" onClick={() => setSelectedProject(null)}>✕</button>
                        <div className="flex flex-col lg:flex-row">
                            <div className="relative w-full lg:w-2/3 h-[300px] lg:h-[600px]">
                                <Image src={selectedProject.image} layout="fill" objectFit="contain" className="bg-gray-100" alt="Full Preview" />
                            </div>
                            <div className="w-full lg:w-1/3 p-10 flex flex-col justify-center bg-white">
                                <span className="text-red-500 text-xs font-black uppercase tracking-widest mb-4">{selectedProject.category}</span>
                                <h2 className="text-3xl font-black text-gray-900 leading-tight mb-6">{selectedProject.fullTitle}</h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">{selectedProject.description}</p>
                                <div className="border-t-2 border-red-500 pt-6">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Project Insight:</p>
                                    <p className="text-lg italic font-serif text-gray-800">"{selectedProject.quote}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Project;