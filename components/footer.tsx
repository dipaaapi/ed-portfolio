import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    // List of addresses for easy editing
    const addresses = [
        "23 Sta. Fe Street Blk-3 Magsaysay Village Tondo, Manila, Philippines",
        "Nacario Residence No. 2 Mathew Street, Capitol Park, Cadlan, Pili, Camarines Sur 4418, Philippines"
    ];

    return (
        <footer className='bg-gray-900 text-white border-t-4 border-red-600'>            
            <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
                
                {/* 1. CONTACTS SECTION */}
                <div className="space-y-6">
                    <h3 className="text-xl uppercase font-black tracking-tighter text-red-500 font-main border-b border-gray-800 pb-2">
                        Get In Touch
                    </h3>
                    <div className="flex flex-col space-y-4 items-center md:items-start">
                        <div className="flex items-center space-x-3 group">
                            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                <svg className='text-white fill-current' width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
                                </svg>
                            </div>
                            <p className="text-sm font-medium tracking-wide">09761740995 / 09663679205</p>
                        </div>
                        <div className="flex items-center space-x-3 group">
                            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                <span className="text-white text-xs font-bold">@</span>
                            </div>
                            <p className="text-sm font-medium tracking-wide">cabrerajohnedward@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* 2. ADDRESSES SECTION */}
                <div className="space-y-6">
                    <h3 className="text-xl uppercase font-black tracking-tighter text-red-500 font-main border-b border-gray-800 pb-2">
                        Locations
                    </h3>
                    <ul className="space-y-4">
                        {addresses.map((address, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="text-red-500 font-bold">📍</span>
                                <p className="text-xs italic text-gray-400 leading-relaxed md:text-justify">
                                    {address}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. BRAND & SOCIALS SECTION */}
                <div className="space-y-6">
                    <h3 className="text-xl uppercase font-black tracking-tighter text-red-500 font-main border-b border-gray-800 pb-2">
                        Professional Network
                    </h3>
                    <div className="flex flex-col gap-4">
                        <Link href="https://www.linkedin.com/in/john-edward-cabrera-956bba147/" target="_blank">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-blue-600 transition-all">
                                    <svg className='fill-current w-5 h-5 text-white' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </div>
                                <p className="text-xs uppercase font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">LinkedIn Profile</p>
                            </div>
                        </Link>
                        <Link href="https://www.facebook.com/MasterEd28/" target="_blank">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-blue-700 transition-all">
                                    <svg className='fill-current w-5 h-5 text-white' viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                                </div>
                                <p className="text-xs uppercase font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">Facebook Page</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div className="bg-black py-4">
                <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold text-gray-600 tracking-[0.3em]">
                    <p>© 2025 Ed Cabrera Portfolio | All Rights Reserved</p>
                    <p className="mt-2 md:mt-0">Designed & Developed by Ed Cabrera</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;