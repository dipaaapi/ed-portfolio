import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'

const Specialthanks: NextPage = () => {
    const thanksItems = [
        { name: "Vercel", desc: "For seamless global deployment and CI/CD hosting architecture.", icon: "🚀", link: "https://vercel.com" },
        { name: "JSON Placeholder", desc: "For providing reliable mock backend RESTful API data structures.", icon: "📦", link: "https://jsonplaceholder.typicode.com/" },
        { name: "W3Schools", desc: "For foundational web documentation and rapid syntax checking.", icon: "📚", link: "https://www.w3schools.com" },
        { name: "Khan Academy", desc: "For exceptional conceptual instruction models and resources.", icon: "🎓", link: "https://www.khanacademy.org" },
        { name: "ISCOM Computer School", desc: "For providing the grounds to cultivate my IT pedagogy.", icon: "🏢", link: "https://www.facebook.com/groups/289663077778048" },
        { name: "Provincial Govt. of Camarines Sur", desc: "For public service opportunities and localized digital transformations.", icon: "🏛️", link: "https://www.camarinessur.gov.ph/" },
        { name: "Google for Education", desc: "For structured certification paths and professional tools.", icon: "🌐", link: "https://edu.google.com/" },
        { name: "GitHub", desc: "For version control, collaboration, and open-source ecosystems.", icon: "🐙", link: "https://github.com" },
        { name: "VS Code", desc: "The ultimate IDE environment that anchors all development.", icon: "💻", link: "https://code.visualstudio.com" },
    ];

    return (
        <div className="scroll-smooth bg-gray-50 font-main relative min-h-screen flex flex-col">
            <Head>
                <title>Special Thanks | ElevatED by Code</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className="flex-grow pb-24">
                {/* HERO SECTION */}
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-32 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                    <div className="relative z-10 w-11/12 md:w-10/12 mx-auto">
                        <span className="text-emerald-200 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Gratitude & Acknowledgments</span>
                        <h1 className='text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl'>Special Thanks</h1>
                        <div className="h-1.5 w-32 bg-white mx-auto my-6 rounded-full shadow-lg"></div>
                        <p className="text-sm md:text-lg font-light tracking-[0.2em] opacity-90 uppercase max-w-2xl mx-auto italic">
                            The technologies, institutions, and platforms that made this portfolio and journey possible.
                        </p>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-[-3rem] relative z-20 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black uppercase text-gray-900 tracking-tight flex flex-col items-center justify-center gap-6">
                            Key Contributors & Platforms
                            <span className="h-1 w-16 bg-emerald-500 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {thanksItems.map((item, i) => (
                            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group bg-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-3">
                                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-md">{item.icon}</div>
                                <h3 className="font-black text-xl text-gray-900 group-hover:text-emerald-600 mb-3 uppercase tracking-tighter transition-colors">{item.name}</h3>
                                <div className="h-0.5 w-8 bg-emerald-200 mb-4 group-hover:bg-emerald-500 transition-colors"></div>
                                <p className="text-sm text-gray-500 group-hover:text-emerald-800 italic leading-relaxed transition-colors flex-grow flex items-center">{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Specialthanks;