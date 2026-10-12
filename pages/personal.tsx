import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Seo from '../components/Seo'
import Footer from '../components/footer'
import PageHero from '../components/PageHero'
import Image from 'next/image'
import { Card, SectionHeading } from '../components/ui'

const Personal: NextPage = () => {
    const info = [
        { name: "Full Name", data: "John Edward M. Cabrera", icon: "👤" },
        { name: "Date of Birth", data: "January 28, 1989", icon: "📅" },
        { name: "Gender", data: "Male", icon: "♂️" },
        { name: "Contact Number", data: "09761740995 / 09663679205", icon: "📞" },
        { name: "Nicknames", data: "Ed / Jan-jan", icon: "🏷️" },
        { name: "Email", data: "cabrerajohnedward@gmail.com", icon: "✉️" },
        { name: "Permanent Address", data: "23 sta. fe street blk-3 brgy. 103 zone-8 magsaysay village District 1 Tondo, Manila Philippines", icon: "🏠" },
        { name: "Current Address", data: "Nacario residence no. 2 Mathew street, Capitol Park, Brgy. Cadlan Camarines Sur, 4418, Philippines", icon: "📍" }
    ];

    const positions = ['Computer Instructor', 'Web Developer', 'UI/UX Designer', 'Quality Assurance', 'Visual Graphic Designer', 'Game Developer', 'Investor'];

    const philosophies = [
        "Educating the next generation of designers while building modern digital solutions in the heart of Camarines Sur.",
        "Design is not just what it looks like and feels like. Design is how it works.",
        "Good instruction seamlessly bridges the gap between theoretical knowledge and industry-standard applications.",
        "Code is poetry written for machines, but design is poetry written for humans.",
        "Continuous learning is the only way to thrive in a landscape that evolves by the minute."
    ];

    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex(prev => (prev + 1) % philosophies.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [philosophies.length]);

    return (
        <div className='scroll-smooth bg-gray-50'>
            <Seo path="/personal" title="Personal Profile" description="Personal profile and locations of John Edward Cabrera, based in Pili, Camarines Sur, Philippines." />

            <main className="pb-20">
                {/* HERO PROFILE SECTION */}
                <PageHero
                    eyebrow="Professional Profile"
                    title={info[0].data}
                    avatar={
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-red-500 rounded-full opacity-40 group-hover:opacity-70 blur transition duration-500"></div>
                            <div className="relative w-[88px] h-[88px] rounded-full border-2 border-white/80 overflow-hidden shadow-2xl">
                                <Image src="/ed2025.jpg" fill style={{ objectFit: 'cover' }} priority alt="ed picture" />
                            </div>
                        </div>
                    }
                >
                    <div className="flex flex-wrap justify-center gap-2">
                        {positions.map((pos, i) => (
                            <span key={i} className="bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:border-red-500 transition-colors cursor-default shadow-sm">
                                {pos}
                            </span>
                        ))}
                    </div>
                </PageHero>

                {/* ROW 1: BIOGRAPHICAL DETAILS */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-8 relative z-20 mb-16">
                    <Card className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
                        <SectionHeading eyebrow="Personal Identity" title="Biographical Details" size="lg" className="mb-12" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {info.map((item, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-[2rem] hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-red-500 hover:-translate-y-2 group text-center flex flex-col items-center">
                                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-sm">{item.icon}</div>
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-3">{item.name}</p>
                                    <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-[200px] select-all cursor-text">{item.data}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                {/* ROW 2: SIDEBAR/QUOTE */}
                <section className="w-11/12 md:w-10/12 mx-auto mb-16">
                    <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden h-full text-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 opacity-5 text-[15rem] font-serif select-none pointer-events-none text-red-500">“</div>
                        <div className="relative z-10 flex-grow flex flex-col items-center justify-center min-h-[160px]">
                            <p key={quoteIndex} className="text-2xl md:text-3xl italic font-light leading-relaxed animate-fadeIn max-w-5xl mx-auto text-gray-200">
                                "{philosophies[quoteIndex]}"
                            </p>
                        </div>
                        <div className="mt-12 border-t border-gray-800 pt-8">
                            <p className="text-xs uppercase font-black tracking-[0.5em] text-red-500">Instructional Philosophy</p>
                        </div>
                    </div>
                </section>

                {/* ROW 3: LOCATION SECTION (Maps) */}
                <section className="w-11/12 md:w-10/12 mx-auto mt-20 mb-20 text-center">
                    <SectionHeading eyebrow="Geography" title="Strategic Locations" className="mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 cursor-crosshair">
                            {/* Replace '0' with your actual Tondo Google Map Embed link */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.9408492025155!2d120.96126634261752!3d14.621819299416373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b570437b2a6f%3A0xc37a46cb885d1e97!2sJackies%20Lugawan!5e0!3m2!1sen!2sph!4v1767034775511!5m2!1sen!2sph"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="group-hover:opacity-90 transition-opacity">
                            </iframe>
                            <div className="bg-white p-6 border-t border-gray-100 group-hover:bg-red-50 transition-colors">
                                <p className="text-xs font-black uppercase text-gray-500 tracking-widest group-hover:text-red-600 transition-colors">📍 Tondo, Manila (Origin)</p>
                            </div>
                        </div>
                        <div className="group rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 cursor-crosshair">
                            {/* Replace '1' with your actual CamSur Google Map Embed link */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d31022.023856093914!2d123.20590443476566!3d13.611893151853964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m1!2zMTPCsDM1JzM5LjYiTiAxMjPCsDE1JzI4LjQiRQ!5e0!3m2!1sen!2sph!4v1767035339140!5m2!1sen!2sph"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="group-hover:opacity-90 transition-opacity">
                            </iframe>
                            <div className="bg-white p-6 border-t border-gray-100 group-hover:bg-red-50 transition-colors">
                                <p className="text-xs font-black uppercase text-gray-500 tracking-widest group-hover:text-red-600 transition-colors">📍 Pili, Camarines Sur (Currently Residing)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Personal;