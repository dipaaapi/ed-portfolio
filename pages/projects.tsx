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

    return (
        <>
            <Head>
                <title>Ed Portfolio | Projects Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
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
                    <p className="text-2xl">sample 1</p>
                    <Image src='/ads1.png' alt='ads1' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-2xl">sample 2</p>
                    <Image src='/ads2.png' alt='ads2' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-2xl">sample 3</p>
                    <Image src='/ads3.png' alt='ads3' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="text-2xl">sample 4</p>
                    <Image src='/ads1.png' alt='ads4' layout='fill' className='w-10/12 h-full mx-auto' />
                </SwiperSlide>
            </Swiper>
            <Footer />
        </>
    )
}

export default Project;