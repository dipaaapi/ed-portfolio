import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import Image from 'next/image'

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

    const positions = ['Computer Instructor', 'Web Developer', 'UI/UX Designer', 'Quality Assurance', 'Visual Graphic Designer', 'Game Developer'];

    return (
        <div className='scroll-smooth bg-gray-50'>
            <Head>
                <title>Professional Profile Page | ElevatED by Code | IllustratED by Design</title>
                <link rel="icon" href="/edLogo.png" />
            </Head>
            <Navigation />

            <main className="pb-20">
                {/* HERO PROFILE SECTION */}
                <div className="bg-gradient-to-b from-red-600 to-red-500 py-20 text-white shadow-xl">
                    <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-white rounded-full opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
                            <Image 
                                src="/ed2025.jpg" 
                                width={200} 
                                height={200} 
                                alt="ed picture" 
                                className="relative rounded-full border-4 border-white object-cover" 
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className='text-xl uppercase font-black tracking-widest opacity-80 mb-2'>Professional Profile</h1>
                            <p className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{info[0].data}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {positions.map((pos, i) => (
                                    <span key={i} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        {pos}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* INFORMATION GRID */}
                <section className="w-10/12 mx-auto -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-black uppercase text-gray-800 mb-6 border-b pb-4">Biographical Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {info.map((item, index) => (
                                    <div key={index} className="p-4 rounded-2xl hover:bg-red-50 transition-colors border-l-4 border-transparent hover:border-red-500">
                                        <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">{item.icon} {item.name}</p>
                                        <p className="text-sm font-medium text-gray-700">{item.data}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR/QUOTE */}
                    <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif">“</div>
                        <p className="text-lg italic font-light leading-relaxed relative z-10">
                            "Educating the next generation of designers while building modern digital solutions in the heart of Camarines Sur."
                        </p>
                        <div className="mt-8 border-t border-gray-700 pt-6">
                            <p className="text-xs uppercase font-bold tracking-[0.3em] text-red-500">Instructional Philosophy</p>
                        </div>
                    </div>
                </section>

                {/* LOCATION SECTION (Maps) */}
                <section className="w-10/12 mx-auto mt-16">
                    <h2 className="text-2xl font-black uppercase text-gray-800 mb-8 text-center md:text-left">Strategic Locations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                             {/* Replace '0' with your actual Tondo Google Map Embed link */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.9408492025155!2d120.96126634261752!3d14.621819299416373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b570437b2a6f%3A0xc37a46cb885d1e97!2sJackies%20Lugawan!5e0!3m2!1sen!2sph!4v1767034775511!5m2!1sen!2sph" 
                                width="100%" 
                                height="350" 
                                style={{ border: 0 }} 
                                loading="lazy">
                            </iframe>
                            <div className="bg-white p-4 text-center">
                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">Tondo, Manila (Origin)</p>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Replace '1' with your actual CamSur Google Map Embed link */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d31022.023856093914!2d123.20590443476566!3d13.611893151853964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM1JzM5LjYiTiAxMjPCsDE1JzI4LjQiRQ!5e0!3m2!1sen!2sph!4v1767035339140!5m2!1sen!2sph" 
                                width="100%" 
                                height="350" 
                                style={{ border: 0 }} 
                                loading="lazy">
                            </iframe>
                            <div className="bg-white p-4 text-center">
                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">Pili, Camarines Sur (Currently Residing)</p>
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