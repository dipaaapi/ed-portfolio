import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const workxp = () => {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Work Experience Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <main>
                <h1 className='text-2xl uppercase text-whiteg p-3 font-bold my-3 text-center mt-10 border-t-2 bg-redg'>Work Experience</h1>
                <div className="w-full bg-whiteg p-5">
                    <div className="w-10/12 md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="absolute left-0 top-5 z-10 opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/digima_logo_square.png" alt="digima logo" width={100} height={100} className="md:w-full w-max" />
                                </div>
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/digima_logo_landscape.png" alt="digima logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-sm text-red-500 p-3 group-hover:block">June 18, 2018 - August 30, 2019</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="absolute left-0 top-5 z-10 opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vanity_logo_square.png" alt="vanity logo" width={100} height={100} className="md:w-full w-max" />
                                </div>
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vanity_logo_landscape.png" alt="vanity logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-sm text-red-500 p-3 group-hover:block">January 2020 - March 2020</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="absolute left-0 top-5 z-10 opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vertex_logo_square.png" alt="vertex logo" width={100} height={100} className="md:w-full w-max" />
                                </div>
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vertex_logo_landscape.png" alt="vertex logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-xs text-red-500 p-3 group-hover:block">May 26, 2020 - November 30, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default workxp;