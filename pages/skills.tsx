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
        { name: "Adobe Animate", image: "/adobeAn.png" },
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

    const techDescription = [  "Technical skills are essential for success in today's fast-paced and technology-driven job market. They are a combination of practical knowledge, hands-on experience, and expertise in using various tools and software programs. In order to be competitive, individuals must have a strong understanding of a wide range of technical skills that are relevant to their field. These skills can be divided into categories such as user experience design, graphic arts, web design, quality assurance, and game development.",  "User experience design involves creating digital products and interfaces that are both functional and user-friendly. This requires a deep understanding of human-computer interaction, accessibility, and user research. UX designers must have excellent problem-solving skills and be able to communicate their ideas effectively. They must be proficient in tools such as wireframing and prototyping software.",  "Graphic arts is the process of using digital and traditional media to communicate visual ideas and concepts. This field requires a strong eye for design, attention to detail, and proficiency in graphic design software. Graphic artists must be able to create images, logos, and other designs that are visually appealing and effective in conveying the intended message.",  "Web design involves creating websites that are aesthetically pleasing, user-friendly, and accessible to a wide range of users. Web designers must have a strong understanding of web technologies such as HTML, CSS, and JavaScript, as well as an understanding of user experience design principles. They must be able to create and test websites for different devices and screen sizes.",  "Quality assurance is a critical process in software development that involves testing and evaluating the functionality and performance of digital products. QA specialists must have strong analytical skills, attention to detail, and experience with testing tools and methodologies. They must be able to identify and report any bugs or issues with a product and work with developers to resolve them.",  "Associate unity game development involves using the Unity game engine to create interactive and engaging games. This field requires knowledge of programming languages such as C# and an understanding of game design principles. Associate unity game developers must have experience with game development tools and be able to create, test, and refine their games for optimal performance and user experience."];

    const unityskills = ["animation", "asset management", "audio", "editor interface", "game art principles", "game design principles", "industry awareness", "lighting", "materials and effects", "navigation and pathfinding", "physics", "programming", "project management", "user interface"];

    const softSkills = [
        { skill: 'Communication', description: 'Effective communication skills refer to the ability to convey information, ideas, and thoughts in a clear and concise manner to individuals or groups. It involves active listening, effective speaking, and writing skills.'},
        { skill: 'Teamwork', description: 'Teamwork involves the ability to work collaboratively with others towards a common goal. It involves effective communication, cooperation, and a positive attitude towards resolving conflicts and working towards a solution.' },
        { skill: 'Problem-solving', description: 'Problem-solving is the ability to identify, analyze, and find a solution to problems in an efficient and effective manner. It involves critical thinking, creativity, and a systematic approach to find the best solution.' },
        { skill: 'Time management', description: 'Time management refers to the ability to prioritize tasks, set goals, and allocate time effectively to complete tasks efficiently. It involves planning, scheduling, and staying organized to meet deadlines.' },
        { skill: 'Organizational skills', description: 'Organizational skills refer to the ability to effectively manage, prioritize, and complete tasks in a structured manner. It involves planning, time management, and the ability to stay organized in a fast-paced environment.'
        },
        { skill: 'Emotional intelligence', description: 'Emotional intelligence refers to the ability to recognize, understand, and manage one’s own emotions and the emotions of others. It involves empathy, self-awareness, and the ability to regulate emotions in a professional setting.' }
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Skills Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main className='scroll-smooth'>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Technical Skill</h1>
                <div className="w-10/12 py-2 mx-auto">
                    {techDescription.map((skill, index) => (
                        <p key={index} className="text-justify italic py-3">
                        {skill}
                        </p>
                    ))}
                </div>
                <ul>
                    <li className='group'>
                        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 justify-center items-center transition-all group-hover:bg-redg bg-dark border-b-2">
                        <div className="block text-center items-center md:flex lg:flex mx-auto">
                            <p className="group-hover:text-dark text-center text-white mx-2">UI / Graphic Designer Skills</p>
                            <div className="mx-auto">
                                <Image src='/CyberEd2.jpg' width={150} alt="" height={50} className='md:mx-auto lg:mx-auto mx-0 my-0 w-auto rounded mb-5' />
                            </div>
                        </div>
                            <div className="w-4/5 mx-auto mb-10 text-white group-hover:text-dark">
                                <ul className='grid grid-cols-2 md:grid-cols-6 space-x-3 justify-center text-center'>
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
                                <Image src='/unityBadge.png' width={300} alt="" height={300} className='mx-auto rounded' />
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
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Soft Skill</h1>
                <div className="w-10/12 py-2 mx-auto">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="py-3">
                        <p className="text-justify italic font-medium">{skill.skill}</p>
                        <p className="text-justify py-2">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Skills;