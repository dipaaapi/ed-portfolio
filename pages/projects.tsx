import type { NextPage } from 'next'
import Head from 'next/head';
import Navigation from '../components/nav';
import Footer from '../components/footer'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Project: NextPage = () => {

    const info = {projects: ["Barangay Monitoring System for the Provincial Municipality of Pulilan Bulacan", "Ant-Pay Video presentation Project", "Lokalize Video presentation Project", "QuickBooks Landing Page", "Elite Jinzai Marketing Inc.","Vanity Health and wellness", "SwiftUi-Weather", "Rodell Ramos Website", "Golden Carabao"]};

    return (
        <main className='scroll-smooth'>
            <Head>
                <title>Ed Portfolio | Projects Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <div className="flex mx-auto w-max space-x-5 my-5">
                <p className="">front-end web developer</p>
                <p className="">ui/ux / graphic designer</p>
                <p className="">quality assurance / tester</p>
            </div>

            <Swiper className='w-full h-screen'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[0]}</p>
                    <Image src='/ads1.png' alt='ads1' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[1]}</p>
                    <Image src='/ads2.png' alt='ads2' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[2]}</p>
                    <Image src='/ads3.png' alt='ads3' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[3]}</p>
                    <Image src='/ads1.png' alt='ads4' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[4]}</p>
                    <Image src='/ads1.png' alt='ads1' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[5]}</p>
                    <Image src='/ads2.png' alt='ads2' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[6]}</p>
                    <Image src='/ads3.png' alt='ads3' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[7]}</p>
                    <Image src='/ads1.png' alt='ads4' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-4xl font-bold mt-3 text-center">{info.projects[8]}</p>
                    <Image src='/ads1.png' alt='ads1' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
            </Swiper>

            <div className="mt-5 w-full">
                <div className="w-2/3 mx-auto">
                    <Image src='/project/aivso.png' alt='ads1' layout='fill' className='w-10/12 h-full mx-auto' />
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Project;