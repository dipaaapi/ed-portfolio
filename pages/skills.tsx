import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Skills: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Technical Skill</h1>
                <ul>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-red-500 bg-dark border-b-2">
                            <div className="flex justify-center items-center">
                                <p className="group-hover:text-dark text-white mx-2">UI Designer Skills</p>
                                <Image src='/CyberEd2.jpg' width={150} height={50} className='mx-2 rounded mb-5' />
                            </div>
                            <div className="w-4/5 mx-auto mb-10 text-white group-hover:text-dark">
                                <ul className='grid grid-cols-2 md:grid-cols-5 space-x-3 justify-center text-center'>
                                    <li className='hover:animate-ping'>
                                        <Image src='/adobeXd.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Adobe XD</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <Image src='/adobePs.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Adobe Photoshop</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <Image src='/adobeAi.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Adobe Illustration</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <Image src='/figma.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Figma</p>
                                    </li>
                                    <li className='hover:animate-ping'>
                                        <Image src='/balsamiq.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Balsamiq</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-red-500 bg-white border-b-2">
                            <div className="flex justify-center items-center">
                                <p className="group-hover:text-white text-dark mx-2">Front-End Skills</p>
                                <Image src='/CyberEd2.jpg' width={150} height={50} className='mx-2 rounded mb-5' />
                            </div>
                            <div className="w-2/3 md:w-4/5 mx-auto text-dark group-hover:text-white">
                                <ul className='grid grid-cols-3 md:grid-cols-5 justify-center text-center mb-10'>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/html5.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">HTML5</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/css.png' width={40} height={50} className='bg-transparent' />
                                        <p className="">CSS</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/javascript.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Javascript</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/php.png' width={80} height={50} className='bg-transparent' />
                                        <p className="">Php</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/mysql.png' width={80} height={50} className='bg-transparent' />
                                        <p className="">MySQL</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/react.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">ReactJs</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/next.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">NextJs</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/bootstrap.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Bootstrap</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/materialUi.png' width={70} height={50} className='bg-transparent' />
                                        <p className="">Material Ui</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/sass.png' width={70} height={50} className='bg-transparent' />
                                        <p className="">SCSS / Sass</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/tailwindcss.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Tailwind CSS</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/laravel.png' width={70} height={50} className='bg-transparent' />
                                        <p className="">Laravel</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/laravelJetstream.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Jetstream</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/laravelLivewire.png' width={50} height={50} className='bg-transparent' />
                                        <p className="">Livewire</p>
                                    </li>
                                    <li className='hover:animate-ping my-3 md:my-5'>
                                        <Image src='/alpine.png' width={80} height={50} className='bg-transparent' />
                                        <p className="">Alpine Js</p>
                                    </li>
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