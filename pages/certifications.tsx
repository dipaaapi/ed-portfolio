import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import StickyPillBar from '../components/StickyPillBar'
import Image from 'next/image';
import { useState, useMemo } from 'react';

// Colour per category. Class strings are written out in full so Tailwind keeps them.
const categoryStyles: Record<string, { tint: string; text: string; soft: string; ring: string }> = {
    Academic: { tint: 'from-indigo-500 to-indigo-800', text: 'text-indigo-600', soft: 'bg-indigo-100', ring: 'border-indigo-300' },
    Training: { tint: 'from-red-500 to-rose-700', text: 'text-red-600', soft: 'bg-red-100', ring: 'border-red-300' },
    Certification: { tint: 'from-amber-400 to-orange-600', text: 'text-amber-600', soft: 'bg-amber-100', ring: 'border-amber-300' },
    Compliance: { tint: 'from-emerald-500 to-teal-700', text: 'text-emerald-600', soft: 'bg-emerald-100', ring: 'border-emerald-300' },
    Recognition: { tint: 'from-sky-500 to-blue-700', text: 'text-sky-600', soft: 'bg-sky-100', ring: 'border-sky-300' },
    Employment: { tint: 'from-slate-600 to-gray-900', text: 'text-slate-600', soft: 'bg-slate-200', ring: 'border-slate-300' },
};
const styleFor = (category: string) => categoryStyles[category] || categoryStyles.Employment;

// Issuer "seal" initials, e.g. "Informatics College Manila" -> "IC".
const initials = (org: string) =>
    org.split(/[\s-]+/).filter(w => /^[A-Za-z]/.test(w) && !['of', 'and', 'the', 'inc.'].includes(w.toLowerCase())).slice(0, 2).map(w => w[0].toUpperCase()).join('');

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
            org: "DICT Region V - Camarines Sur",
            category: "Training",
            desc: "Certificate of Participation for the webinar \"Mobile App Development using Block-Based Programming\", part of the National ICT Month 2023 celebration (June 15, 2023).",
            file: "/certifications-and-recognitions/dict-mobile-app-dev-block-based-2023.jpg",
            type: "jpg"
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

    // Group into category rows only when browsing everything; a filter or search shows one flat grid.
    const groups = activeFilter === 'All' && !searchQuery
        ? categories.slice(1).map(category => ({ category, docs: filteredDocs.filter(d => d.category === category) })).filter(g => g.docs.length > 0)
        : filteredDocs.length > 0 ? [{ category: activeFilter, docs: filteredDocs }] : [];

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative">
            <Head>
                <title>Certifications & Recognitions | ElevatED by Code</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>

            <main className='pb-20 min-h-screen'>
                {/* HERO */}
                <PageHero
                    eyebrow="Credentials"
                    title="Certifications & Credentials"
                    subtitle="Validating Mastery & Compliance"
                    search={{ value: searchQuery, onChange: setSearchQuery, placeholder: 'Search certifications (e.g. Diploma, TESDA, Cyber Security)...' }}
                />

                {/* CATEGORY FILTER (sticky glass bar, same pattern as Projects and Skills) */}
                <StickyPillBar
                    items={categories.map(c => ({ id: c, label: `${c} (${c === 'All' ? documents.length : documents.filter(d => d.category === c).length})` }))}
                    active={activeFilter}
                    onSelect={setActiveFilter}
                    className="mt-10 mb-12"
                />

                {/* DOCUMENTS: grouped by category under "All" with no search, otherwise one flat grid */}
                <section className="w-11/12 md:w-10/12 mx-auto space-y-16">
                    {groups.map(({ category, docs }) => (
                        <div key={category}>
                            {groups.length > 1 && (
                                <div className="flex items-end justify-between mb-6 px-1">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${styleFor(category).tint}`}></span>
                                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">{category}</h2>
                                    </div>
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{docs.length} {docs.length === 1 ? 'document' : 'documents'}</span>
                                </div>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {docs.map((doc, index) => {
                                    const s = styleFor(doc.category);
                                    return (
                                        <Reveal key={doc.file} delay={(index % 4) * 70} className="h-full">
                                            <button
                                                onClick={() => setSelectedDocument(doc)}
                                                className="group w-full h-full text-left bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                            >
                                                {/* Certificate preview */}
                                                <div className={`relative h-40 bg-gradient-to-br ${s.tint} overflow-hidden`}>
                                                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
                                                    <div className="absolute left-1/2 top-6 -translate-x-1/2 w-36 h-44 bg-white rounded-lg shadow-2xl rotate-[-4deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                                                        {doc.type === 'pdf' ? (
                                                            <div className="p-3 flex flex-col items-center">
                                                                <div className={`w-10 h-10 rounded-full border-2 ${s.ring} flex items-center justify-center text-[10px] font-black ${s.text}`}>{initials(doc.org)}</div>
                                                                <div className="mt-3 h-1.5 w-20 rounded-full bg-gray-200"></div>
                                                                <div className="mt-2 h-1 w-24 rounded-full bg-gray-100"></div>
                                                                <div className="mt-1.5 h-1 w-16 rounded-full bg-gray-100"></div>
                                                                <div className={`mt-3 h-2 w-14 rounded-full ${s.soft}`}></div>
                                                            </div>
                                                        ) : (
                                                            <Image src={doc.file} fill style={{ objectFit: 'cover' }} objectPosition="top" alt="" />
                                                        )}
                                                    </div>
                                                    <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 rounded-full">{doc.type === 'pdf' ? 'PDF' : 'Image'}</span>
                                                </div>

                                                <div className="p-6 flex flex-col flex-grow">
                                                    <span className={`text-[9px] font-black uppercase tracking-widest ${s.text}`}>{doc.category}</span>
                                                    <h3 className="mt-2 text-base font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">{doc.title}</h3>
                                                    <p className="mt-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">{doc.org}</p>
                                                    <p className="mt-3 text-sm text-gray-500 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{doc.desc}</p>
                                                    <span className="mt-auto pt-5 text-[10px] font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
                                                        View document
                                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                    </span>
                                                </div>
                                            </button>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    {filteredDocs.length === 0 && (
                        <p className="text-center text-gray-400 font-bold py-20">No documents match your search.</p>
                    )}
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
                                <a href={selectedDocument.file} target="_blank" rel="noreferrer" className="text-white hover:text-red-400 text-sm font-bold uppercase transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
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
                                        fill
                                        style={{ objectFit: 'contain' }}
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
