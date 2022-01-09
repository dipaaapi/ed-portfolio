import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Projects Page</h1>
                <ul className='grid grid-cols-3 md:grid-cols-5 justify-center text-center mb-10'>
                    <Carousel className="w-full" autoPlay infiniteLoop >
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
                    </Carousel>
                </ul>
            </main>

            <Footer />
        </div>
    )
}

export default Projects;