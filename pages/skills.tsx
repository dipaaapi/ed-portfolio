import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Skills: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Skills Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Technical Skill</h1>
                <ul>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-redg bg-dark border-b-2">
                            <div className="flex justify-center items-center">
                                <p className="group-hover:text-dark text-white mx-2">UI Designer Skills</p>
                                <Image src='/CyberEd2.jpg' width={150} alt="CyberEd2" height={50} className='mx-2 rounded mb-5' />
                            </div>
                            <div className="w-4/5 mx-auto mb-10 text-white group-hover:text-dark">
                                <ul className='grid grid-cols-2 md:grid-cols-5 space-x-3 justify-center text-center'>
                                    <li className='hover:animate-ping'>
                                        <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src='/adobeXd.png' width={50} alt="adobeXd" height={50} className='bg-transparent' />
                                        </div>
                                        <p className="">Adobe XD</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src='/adobePs.png' width={50} alt="adobePs" height={50} className='bg-transparent' />
                                        </div>
                                        <p className="">Adobe Photoshop</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src='/adobeAi.png' width={50} alt="adobeAi" height={50} className='bg-transparent' />
                                        </div>
                                        <p className="">Adobe Illustration</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src='/figma.png' width={50} alt="figma" height={50} className='bg-transparent' />
                                        </div>
                                        <p className="">Figma</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src='/balsamiq.png' width={50} alt="balsamiq" height={50} className='bg-transparent' />
                                        </div>
                                        <p className="">Balsamiq</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='group'>
                        <div className="bg-white border-b-2 grid grid-cols-1 grid-rows-2 group-hover:bg-redg h-auto items-center transition-all">
                            <div className="h-auto items-center justify-center mx-auto w-max text-center">
                                <p className="group-hover:text-white text-dark mx-2">Front-End Skills</p>
                                <Image src='/CyberEd2.jpg' width={150} alt="CyberEd2" height={50} className='mx-2 rounded mb-5' />
                            </div>
                            <div className="w-2/3 md:w-4/5 mx-auto text-dark group-hover:text-white">
                                <ul className='mb-10'>
                                    <Carousel className="w-full" autoPlay infiniteLoop >
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/html5.png' width={50} alt="html5" height={50} />
                                            </div>
                                            <p className="">HTML5</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/css.png' width={40} alt="css" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">CSS</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/javascript.png' width={50} alt="javascript" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Javascript</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/php.png' width={80} alt="php" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Php</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/mysql.png' width={80} alt="mysql" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">MySQL</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/react.png' width={50} alt="" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">ReactJs</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/next.png' width={50} alt="next" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">NextJs</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/bootstrap.png' width={50} alt="bootstrap" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Bootstrap</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/materialUi.png' width={70} alt="materialUi" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Material Ui</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/sass.png' width={70} alt="sass" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">SCSS / Sass</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/tailwindcss.png' width={50} alt="tailwindcss" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Tailwind CSS</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/laravel.png' width={70} alt="laravel" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Laravel</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/laravelJetstream.png' width={50} alt="laravelJetstream" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Jetstream</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/laravelLivewire.png' width={50} alt="laravelLivewire" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Livewire</p>
                                        </li>
                                        <li className=' my-3 md:my-5'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                                <Image src='/alpine.png' width={80} alt="alpine" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">Alpine Js</p>
                                        </li>
                                    </Carousel>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>

            <Footer />
        </div>
    )
}

export default Skills;