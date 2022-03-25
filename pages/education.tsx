/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const education = () => {
    const info = {
        level: ['primary', 'secondary', 'vocational', 'vocational', 'tertiary'],
        title: ['amado v. hernandez', 'dr. juan g. nolasco', 'iscom', 'TESDA', 'informatics college manila'],
        status: ['elementary school', 'high school', 'computer literacy basic and advance', 'CHS or CSS / Comp. Tech.', 'information tecnology (bsit)'],
        graduate: ['april 25, 2001', 'april 13, 2005', 'june 8, 2008', 'july 16, 2012', 'april 28, 2018'],
        address: ['sto. niño street, barrio magsaysay, tondo, sto. niño street, 107, tondo, manilla, 1012 metro manila', '#252 tioco, tondo, maynila, kalakhang maynila', 'plaza morga corner moriones st., tondo, manila', '#233 lopez bldg. tayuman street tondo, manila', '2070 bdo building c.m. recto, manila philippines']
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Educational Attainment Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <main>
                <h1 className='md:text-2xl text-sm uppercase text-whiteg p-3 font-bold text-center mt-10 border-t-2 bg-redg'>Educational Attainment</h1>

                <div className="w-full bg-lime-500">
                    <div className="w-min md:w-max mx-auto md:flex p-5 space-x-5">
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-right text-center font-bold text-white uppercase">{info.title[0]}</p>
                            <p className="md:text-2xl text-sm md:text-right text-center font-bold text-white uppercase">{info.graduate[0]}</p>
                        </div>
                        <img src="/amado.png" alt="amado" className="md:w-[10vw] w-min mx-auto hover:animate-ping" />
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-left text-center font-bold text-white uppercase">{info.status[0]}</p>
                            <p className="md:text-2xl text-sm md:text-left text-center font-bold text-white uppercase">{info.level[0]}</p>
                        </div>
                    </div>
                    <div className="w-min md:w-max mx-auto md:flex p-5 space-x-5">
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-right text-center font-bold text-white uppercase">{info.title[1]}</p>
                            <p className="md:text-2xl text-sm md:text-right text-center font-bold text-white uppercase">{info.graduate[1]}</p>
                        </div>
                        <img src="/nolasco.png" alt="nolasco" className="md:w-[10vw] w-min mx-auto hover:animate-ping" />
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-left text-center font-bold text-white uppercase">{info.status[1]}</p>
                            <p className="md:text-2xl text-sm md:text-left text-center font-bold text-white uppercase">{info.level[1]}</p>
                        </div>
                    </div>
                    <div className="w-min md:w-max mx-auto md:flex p-5 space-x-5">
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-right text-center font-bold text-white uppercase">{info.title[2]}</p>
                            <p className="md:text-2xl text-sm md:text-right text-center font-bold text-white uppercase">{info.graduate[2]}</p>
                        </div>
                        <img src="/iscom.png" alt="iscom" className="md:w-[10vw] w-min mx-auto hover:animate-ping" />
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-left text-center font-bold text-white uppercase">{info.status[2]}</p>
                            <p className="md:text-2xl text-sm md:text-left text-center font-bold text-white uppercase">{info.level[2]}</p>
                        </div>
                    </div>
                    <div className="w-min md:w-max mx-auto md:flex p-5 space-x-5">
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-right text-center font-bold text-white uppercase">{info.title[3]}</p>
                            <p className="md:text-2xl text-sm md:text-right text-center font-bold text-white uppercase">{info.graduate[3]}</p>
                        </div>
                        <img src="/tesda.png" alt="tesda" className="md:w-[10vw] w-min mx-auto hover:animate-ping" />
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-left text-center font-bold text-white uppercase">{info.status[3]}</p>
                            <p className="md:text-2xl text-sm md:text-left text-center font-bold text-white uppercase">{info.level[3]}</p>
                        </div>
                    </div>
                    <div className="w-min md:w-max mx-auto md:flex p-5 space-x-5">
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-right text-center font-bold text-white uppercase">{info.title[4]}</p>
                            <p className="md:text-2xl text-sm md:text-right text-center font-bold text-white uppercase">{info.graduate[4]}</p>
                        </div>
                        <img src="/informatics.png" alt="informatics" className="md:w-[10vw] w-min mx-auto hover:animate-ping" />
                        <div className="my-auto">
                            <p className="md:text-3xl text-sm md:text-left text-center font-bold text-white uppercase">{info.status[4]}</p>
                            <p className="md:text-2xl text-sm md:text-left text-center font-bold text-white uppercase">{info.level[4]}</p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

export default education;