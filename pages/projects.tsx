import type { NextPage } from 'next'
import Head from 'next/head';
import Footer from '../components/footer'
import PageHero from '../components/PageHero';
import StickyPillBar from '../components/StickyPillBar'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState, useMemo, useEffect } from 'react';
import { projects, projectTypes } from '../data/projects';

const Project: NextPage = () => {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const openProject = (project: any) => {
        setSelectedProject(project);
        setActiveImage(project.image || null);
    };

    // Deep link from the home page's Featured Work: /projects?project=<title>
    useEffect(() => {
        if (!router.isReady) return;
        const match = projects.find(p => p.title === router.query.project);
        if (match) openProject(match);
    }, [router.isReady, router.query.project]);

    const positions = ['Computer Instructor', 'Web Developer', 'UI/UX Designer', 'Quality Assurance', 'Visual Graphic Designer', 'Game Developer'];
    const categories = useMemo(() => ['All', ...projectTypes.filter(t => projects.some(p => p.type === t))], []);
    const filteredProjects = projects.filter(p => {
        const matchesCategory = activeFilter === 'All' ? true : p.type === activeFilter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.fullTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Project Showcase Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>

            <main className='pb-20'>
                {/* HERO */}
                <PageHero
                    eyebrow="Portfolio"
                    title="Project Showcase"
                    search={{ value: searchQuery, onChange: setSearchQuery, placeholder: 'Search projects by name or description...' }}
                >
                    <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                        {positions.map((pos, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">{pos}</span>
                        ))}
                    </div>
                </PageHero>

                {/* CATEGORY FILTER (sticky glass bar, same pattern as the Skills page) */}
                <StickyPillBar items={categories.map(c => ({ id: c, label: c }))} active={activeFilter} onSelect={setActiveFilter} className="mt-10 mb-12" />

                {/* ROWS BY PROJECT TYPE */}
                <section className="w-11/12 mx-auto space-y-14">
                    {projectTypes.map((type) => {
                        const rowProjects = filteredProjects.filter(p => p.type === type);
                        if (rowProjects.length === 0) return null;
                        return (
                            <div key={type}>
                                <div className="flex items-end justify-between mb-5 px-1">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">{type}</h2>
                                        <div className="h-1 w-16 bg-red-500 rounded-full mt-2"></div>
                                    </div>
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{rowProjects.length} {rowProjects.length === 1 ? 'project' : 'projects'}</span>
                                </div>
                                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pt-2 pb-8 px-1">
                                    {rowProjects.map((project) => (
                                        <div key={project.title} onClick={() => openProject(project)} className="group snap-start flex-shrink-0 w-[85%] sm:w-80 lg:w-96 cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                                            <div className="relative h-56 w-full overflow-hidden">
                                                {project.image ? (
                                                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-600 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                                        <span className="text-white/90 text-3xl font-black uppercase tracking-tighter text-center px-6">{project.title}</span>
                                                    </div>
                                                )}
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
                            </div>
                        );
                    })}
                    {filteredProjects.length === 0 && (
                        <p className="text-center text-gray-400 font-bold py-20">No projects match your search.</p>
                    )}
                </section>
            </main>

            {/* MODAL SECTION */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedProject(null)}>
                    <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-5 right-5 z-[110] bg-red-600 text-white w-10 h-10 rounded-full font-bold shadow-lg" onClick={() => setSelectedProject(null)}>✕</button>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-2/3 flex flex-col bg-gray-100">
                                <div className="relative w-full h-[300px] lg:h-[600px]">
                                    {(activeImage || selectedProject.image) ? (
                                        <Image src={activeImage || selectedProject.image} layout="fill" objectFit="contain" alt="Full Preview" />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-600 flex items-center justify-center">
                                            <span className="text-white/90 text-5xl font-black uppercase tracking-tighter text-center px-10">{selectedProject.fullTitle}</span>
                                        </div>
                                    )}
                                </div>
                                {selectedProject.gallery && (
                                    <div className="flex gap-2 p-3 overflow-x-auto bg-gray-900">
                                        {selectedProject.gallery.map((src: string) => (
                                            <button key={src} onClick={() => setActiveImage(src)} className={`relative flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImage === src ? 'border-red-500' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                                                <Image src={src} layout="fill" objectFit="cover" alt={`${selectedProject.title} screenshot`} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="w-full lg:w-1/3 p-10 flex flex-col justify-center bg-white">
                                <span className="text-red-500 text-xs font-black uppercase tracking-widest mb-4">{selectedProject.category}</span>
                                <h2 className="text-3xl font-black text-gray-900 leading-tight mb-6">{selectedProject.fullTitle}</h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedProject.description}</p>

                                {selectedProject.techStack && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.techStack.map((tech: string, i: number) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="border-t-2 border-red-500 pt-6 mb-6">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Project Insight:</p>
                                    <p className="text-lg italic font-serif text-gray-800">"{selectedProject.quote}"</p>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {selectedProject.liveLink && (
                                        <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md">
                                            Visit Live Site
                                        </a>
                                    )}
                                    {selectedProject.repoLink && (
                                        <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 text-center text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md">
                                            Source Code
                                        </a>
                                    )}
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