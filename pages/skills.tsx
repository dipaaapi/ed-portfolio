import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Skills: NextPage = () => {

    const designerskills = [
        { name: "Adobe XD", image: "/adobeXd.png" },
        { name: "Adobe Photoshop", image: "/adobePs.png" },
        { name: "Adobe Illustrator", image: "/adobeAi.png" },
        { name: "Figma", image: "/figma.png" },
        { name: "Balsamiq", image: "/balsamiq.png" }
    ];

    const webskills = [
        { name: "HTML5", image: "/html5.png" },
        { name: "CSS", image: "/css.png" },
        { name: "Javascript", image: "/javascript.png" },
        { name: "Php", image: "/php.png" },
        { name: "MySQL", image: "/mysql.png" },
        { name: "ReactJs", image: "/react.png" },
        { name: "NextJs", image: "/next.png" },
        { name: "Bootstrap", image: "/bootstrap.png" },
        { name: "Material UI", image: "/materialUi.png" }
    ];

    const unityskills = ["animation", "asset management", "audio", "editor interface", "game art principles", "game design principles", "industry awareness", "lighting", "materials and effects", "navigation and pathfinding", "physics", "programming", "project management", "user interface"];

    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Skills Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main className='scroll-smooth'>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Technical Skill</h1>
                <ul>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-redg bg-dark border-b-2">
                            <div className="flex justify-center items-center">
                                <p className="group-hover:text-dark text-white mx-2">UI Designer Skills</p>
                                <Image src='/CyberEd2.jpg' width={150} alt="" height={50} className='mx-2 rounded mb-5' />
                            </div>
                            <div className="w-4/5 mx-auto mb-10 text-white group-hover:text-dark">
                                <ul className='grid grid-cols-2 md:grid-cols-5 space-x-3 justify-center text-center'>
                                    {designerskills.map((designerskill, index) => {
                                        return (
                                        <li key={index} className='hover:animate-ping'>
                                            <div className='bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto'>
                                            <Image src={designerskill.image} width={50} alt="" height={50} className='bg-transparent' />
                                            </div>
                                            <p className="">{designerskill.name}</p>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>x
                        </div>
                    </li>
                    <li className="group">
                        <div className="bg-white border-b-2 grid grid-cols-1 grid-rows-2 group-hover:bg-redg h-auto items-center transition-all">
                        <div className="h-auto items-center justify-center mx-auto w-max text-center">
                            <p className="group-hover:text-white text-dark mx-2">Front-End Skills</p>
                            <Image src="/CyberEd2.jpg" width={150} height={50} alt="logo" className="mx-2 rounded mb-5" />
                        </div>
                        <div className="w-2/3 md:w-4/5 mx-auto text-dark group-hover:text-white">
                            <ul className="mb-10">
                            <Carousel className="w-full" autoPlay infiniteLoop>
                                {webskills.map((skill, index) => (
                                <li key={index} className="my-3 md:my-5">
                                    <div className="bg-transparent group-hover:bg-white p-5 rounded w-max mx-auto">
                                    <Image src={skill.image} width={50} height={50} alt="web skill" />
                                    </div>
                                    <p className="">{skill.name}</p>
                                </li>
                                ))}
                            </Carousel>
                            </ul>
                        </div>
                        </div>
                    </li>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-redg bg-dark border-b-2">
                            <div className="w-max mx-auto my-0">
                                <Image src='/unityBadge.png' width={150} alt="" height={150} className='mx-auto rounded' />
                            </div>
                            <div className="w-2/3 mx-auto sm:w-10/12 text-center gap-10 mb-10 text-white group-hover:text-dark">
                                <ul className="grid grid-cols-1 md:grid-cols-3 text-center gap-5">
                                    {unityskills.map((skill, index) => {
                                        return (
                                        <li key={index} className="flex items-center justify-center border-2 p-2 hover:animate-bounce rounded-md border-dashed hover:bg-white group-hover:shadow-lg border-white group-hover:border-solid ease-in-out duration-300 sm:p-4">
                                            <p className="capitalize text-lg sm:text-xl">{skill}</p>
                                        </li>
                                        );
                                    })}
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