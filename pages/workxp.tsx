/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const workxp = () => {
    const info = {
        title: ['digima web solutions inc.', 'vanity health and welness', 'vertex digital entertainment technologies inc.', 'aipaygo inc.'],
        position: ['quality assurance | web tester', 'graphic artist | product designer', 'ui/ux designer', 'front-end developer'],
        address: ['5th floor Tower 4 Double Dragon Plaza EDSA cor. Macapagal Ave. Pasay City', 'Work from Home from start till end of project - Project based (Office is at Cubao)', '5th floor Tower 4 Double Dragon Plaza EDSA cor.', '#50 14th street cor. Broadway st. bgry. Mariana New Manila Quezon, City'],
        description: ['As a Junior Q.A. I make sure that the standard of the company and the team during meetings are implemented and follow all the technical terms to make sure that the application is working properly.', 'As a Graphic and Product Designer strategically implement all the given documents and advice to me so that the output of it is aligned on time or ahead of time.', 'As a full pledge UI designer of the team, I give good quality graphical references and mockups to be used by our professional developers to deliver a good quality mobile app', 'I work as a Front-end Developer and sometimes UI Designer to deliver all of the changes if the Ui designers presence is not present also I do also running errands for the CEOs requests, especially clients requests.'],
        date: ['June 18, 2018 - August 30, 2019', 'January 2020 - March 2020', 'May 26, 2020 - November 30, 2020', 'April 26,2021 - Present']
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Work Experience Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <main>
                <h1 className='text-2xl uppercase text-whiteg p-3 font-bold text-center mt-10 border-t-2 bg-redg'>Work Experience</h1>
                <div className="w-full bg-whiteg p-5">
                    <div className="w-10/12 md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 p-0 md:p-5">
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="">
                                <Image src="/digima_logo_square.png" alt="digima logo" className="absolute left-[25%] bottom-[12.5%] z-10 md:w-1/2 h-auto w-max opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500" />
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/digima_logo_landscape.png" alt="digima logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-xs text-red-500 p-3 group-hover:block">{info.date[0]}</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="">
                                <Image src="/vanity_logo_square.png" alt="vanity logo" className="absolute left-[25%] bottom-[20%] z-10 md:w-1/2 h-auto w-max opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500" />
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vanity_logo_landscape.png" alt="vanity logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-xs text-red-500 p-3 group-hover:block">{info.date[1]}</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="">
                                <Image src="/vertex_logo_square.png" alt="vertex logo" className="absolute left-[25%] bottom-[12.5%] z-10 md:w-1/2 h-auto w-max opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500" />
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/vertex_logo_landscape.png" alt="vertex logo" width={200} height={75} className="md:w-full w-max" />
                                </div>
                                <p className="text-xs text-red-500 p-3 group-hover:block">{info.date[2]}</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[20vw] group bg-white rounded group-hover:shadow-lg shadow mx-auto p-5 group font-main">
                            <div className="">
                                <Image src="/aipaygo_logo_square.png" alt="aipaygo logo" className="absolute left-[25%] bottom-[12.5%] z-10 md:w-1/2 h-auto w-max opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:delay-500" />
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:delay-500 w-full">
                                <div className="w-max mx-auto">
                                    <Image src="/aipaygo_logo_landscape.png" alt="aipaygo logo" width={200} height={50} className="md:w-full w-max" />
                                </div>
                                <p className="text-xs text-red-500 p-3 group-hover:block">{info.date[3]}</p>
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