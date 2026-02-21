import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const Certifications: NextPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDocument, setSelectedDocument] = useState<any>(null);

    const documents = [
        {
            title: "Diploma",
            org: "Informatics College Manila",
            category: "Academic",
            desc: "Official Diploma from Informatics College Manila.",
            file: "/certifications-and-recognitions/diploma-informatics.pdf",
            type: "pdf"
        },
        {
            title: "Transcript of Records",
            org: "Informatics College Manila",
            category: "Academic",
            desc: "Official Transcript of Records detailing academic performance.",
            file: "/certifications-and-recognitions/transcript-of-Records-informatics.pdf",
            type: "pdf"
        },
        {
            title: "Commencement Exercises",
            org: "Informatics College Manila",
            category: "Academic",
            desc: "Commencement Exercises Documentation.",
            file: "/certifications-and-recognitions/commencement exercises.pdf",
            type: "pdf"
        },
        {
            title: "Basic Mobile App Development",
            org: "DICT",
            category: "Training",
            desc: "Certificate for Block-Based Mobile App Development.",
            file: "/certifications-and-recognitions/Basic Mobile App Development with Block-Based Programming.pdf",
            type: "pdf"
        },
        {
            title: "Web Development Training",
            org: "Informatics College",
            category: "Training",
            desc: "Certificate of Attendance for Web Development.",
            file: "/certifications-and-recognitions/cert-of-attendance-web-development-training-infromatics.pdf",
            type: "pdf"
        },
        {
            title: "TESDA NC II: CHS",
            org: "TESDA",
            category: "Certification",
            desc: "National Certificate II in Computer Hardware Servicing.",
            file: "/certifications-and-recognitions/nc2-chs.pdf",
            type: "pdf"
        },
        {
            title: "Cyber Security Training",
            org: "Informatics College",
            category: "Training",
            desc: "Certificate of Participation in Cyber Security.",
            file: "/certifications-and-recognitions/cert-of-participation-cyber-security-informatics.pdf",
            type: "pdf"
        },
        {
            title: "State of Cybersecurity",
            org: "Various",
            category: "Training",
            desc: "Certificate of Participation in the State of Cybersecurity.",
            file: "/certifications-and-recognitions/cert-of-participation-state-of-cybersecurity.pdf",
            type: "pdf"
        },
        {
            title: "COVID-19 Preventive Measures",
            org: "Health & Safety",
            category: "Compliance",
            desc: "Practicing COVID-19 preventive measures in the workplace.",
            file: "/certifications-and-recognitions/Certificate_of_Completion_practicing_covid-19_preventive_measures_in_the_workplace.pdf",
            type: "pdf"
        },
        {
            title: "MDRRMO Participation",
            org: "MDRRMO",
            category: "Training",
            desc: "Certificate of Participation from MDRRMO.",
            file: "/certifications-and-recognitions/cert-of-participation-drrmo.pdf",
            type: "pdf"
        },
        {
            title: "Unciano Colleges Certificate",
            org: "Unciano Colleges and General Hospital",
            category: "Recognition",
            desc: "Certificate from Unciano Colleges and General Hospital Inc.",
            file: "/certifications-and-recognitions/cert-unciano-colleges-and-general-hospital-inc.pdf",
            type: "pdf"
        },
        {
            title: "COE: Provincial Govt. Camarines Sur",
            org: "Government",
            category: "Employment",
            desc: "Certificate of Employment from the Provincial Government of Camarines Sur (2023).",
            file: "/certifications-and-recognitions/cert-coe-camsur-2023.pdf",
            type: "pdf"
        },
        {
            title: "COE: MDRRMO ERAP",
            org: "Government",
            category: "Employment",
            desc: "Certificate of Employment from MDRRMO ERAP.",
            file: "/certifications-and-recognitions/cert-coe-mdrrmo-erap.pdf",
            type: "pdf"
        },
        {
            title: "COE: Vertex Digital Entertainment",
            org: "Vertex Digital Entertainment Technologies",
            category: "Employment",
            desc: "Certificate of Employment from Vertex Digital Entertainment Technologies.",
            file: "/certifications-and-recognitions/Vertex-COE.jpg",
            type: "jpg"
        }
    ];

    const categories = useMemo(() => ['All', ...Array.from(new Set(documents.map(d => d.category)))], []);

    const filteredDocs = documents.filter(d => {
        const matchesCategory = activeFilter === 'All' ? true : d.category === activeFilter;
        const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.org.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Certifications & Recognitions | ElevatED by Code</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className='pb-20 min-h-screen'>
                {/* HERO */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 py-32 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-50 blur-3xl"></div>
                    <div className="relative z-10">
                        <h1 className='text-5xl font-black uppercase tracking-tighter drop-shadow-2xl'>Certifications & Credentials</h1>
                        <div className="h-1.5 w-32 bg-purple-400 mx-auto rounded-full mt-6 shadow-lg shadow-purple-500/50"></div>
                        <p className="mt-6 text-lg tracking-[0.3em] font-light text-purple-200 uppercase">Validating Mastery & Compliance</p>
                    </div>
                </div>

                {/* FILTER & SEARCH */}
                <section className="w-11/12 mx-auto -mt-10 mb-16 relative z-10 flex flex-col items-center">
                    <div className="w-full max-w-2xl bg-white p-2 rounded-full shadow-xl mb-6 flex items-center border border-gray-100">
                        <div className="p-3 text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search certifications (e.g. Diploma, TESDA, Cyber Security)..."
                            className="w-full py-3 px-4 outline-none text-gray-700 bg-transparent rounded-r-full font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="p-3 text-gray-400 hover:text-purple-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        )}
                    </div>

                    <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-wrap justify-center gap-2 border border-gray-100 w-full max-w-4xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeFilter === cat ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* GRID */}
                <section className="w-11/12 md:w-10/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredDocs.map((doc, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedDocument(doc)}
                                className="group cursor-pointer bg-white rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 flex flex-col"
                            >
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="bg-purple-50 p-4 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500 text-purple-600">
                                        {doc.type === 'pdf' ? (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                        ) : (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        )}
                                    </div>
                                    <span className="bg-gray-100 text-gray-500 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{doc.category}</span>
                                </div>

                                <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-purple-600 transition-colors uppercase tracking-tight">{doc.title}</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{doc.org}</p>

                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 leading-relaxed italic line-clamp-2">{doc.desc}</p>
                                    <div className="mt-4 text-[10px] font-black text-purple-600 uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Document <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* MODAL SECTION */}
            {selectedDocument && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedDocument(null)}>
                    <div className="relative w-full h-[90vh] max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>

                        <div className="bg-gray-900 p-6 flex justify-between items-center z-10 shadow-md">
                            <div>
                                <h2 className="text-white font-black uppercase tracking-widest">{selectedDocument.title}</h2>
                                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">{selectedDocument.org}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <a href={selectedDocument.file} target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 text-sm font-bold uppercase transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    Open in New Tab
                                </a>
                                <button className="bg-red-600 hover:bg-red-500 text-white w-10 h-10 rounded-full font-bold shadow-lg transition-colors flex items-center justify-center" onClick={() => setSelectedDocument(null)}>✕</button>
                            </div>
                        </div>

                        <div className="flex-grow bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                            {selectedDocument.type === 'pdf' ? (
                                <iframe
                                    src={`${selectedDocument.file}#view=FitH`}
                                    className="w-full h-full rounded-2xl shadow-inner border border-gray-300 bg-white"
                                    title={selectedDocument.title}
                                />
                            ) : (
                                <div className="relative w-full h-full bg-white rounded-2xl shadow-inner border border-gray-300 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={selectedDocument.file}
                                        layout="fill"
                                        objectFit="contain"
                                        alt={selectedDocument.title}
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Certifications;
