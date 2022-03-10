import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Personal: NextPage = () => {
    const info = {
        name: 'John Edward M. Cabrera',
        age: "January 28, 1989",
        position: ['Front-end Developer', 'UI/UX Designer', 'Quality Assurance'],
        gender: 'male',
        address: '23 sta. fe street blk-3 brgy. 103 zone-8 magsaysay village District 1 Tondo, Manila Philippines',
        mobile: '09663679205',
        nick: ['Ed', 'Janjan'],
        email: ['dipaaapi8@gmail.com', 'ichewit01@gmail.com' ]
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Ed Portfolio | Personal Information Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main>
                {/* <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Personal Information</h1> */}
                <div className="md:flex grid grid-cols-1 w-max mx-auto">
                    <div className="flex-shrink mx-auto w-max">
                        <Image src="/ed.jpg" width={150} height={150} alt="ed picture" className="rounded-full shadow border-red-500 border w-max mx-auto" />
                    </div>
                    <div className="flex-grow p-3 my-auto">
                        <p className="text-red-500 my-auto text-center md:text-left text-4xl font-bold">{info.name}</p>
                        <div className="grid grid-cols-3 gap-5">
                            <p className="italic text-sm text-center hover:underline hover:text-red-500 text-gray-500">{info.position[0]}</p>
                            <p className="italic text-sm text-center hover:underline hover:text-red-500 text-gray-500">{info.position[1]}</p>
                            <p className="italic text-sm text-center hover:underline hover:text-red-500 text-gray-500">{info.position[2]}</p>
                        </div>
                    </div>
                </div>
                <div className="my-10 bg-gray-300 bg-opacity-25 p-5">
                    <ul className='md:w-2/3 w-10/12 mx-auto rounded p-3 text-left'>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                            <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Date of Birth:</p>
                                <p className="">{info.age}</p>
                            </div>
                        </li>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                            <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 0v2h2.586l-2.113 2.113c-.981-.698-2.177-1.113-3.473-1.113-2.22 0-4.144 1.216-5.18 3.009-3.229.096-5.82 2.738-5.82 5.991 0 2.973 2.164 5.433 5 5.91v2.09h-3v2h3v2h2v-2h3v-2h-3v-2.09c1.791-.301 3.294-1.403 4.167-2.918 3.235-.09 5.833-2.735 5.833-5.992 0-1.296-.415-2.492-1.113-3.473l2.113-2.113v2.586h2v-6h-6zm-3 13c-1.944 0-3.564-1.396-3.923-3.236-.66-.333-1.365-.346-2.033-.066.266 2.293 1.827 4.181 3.931 4.938-.729.831-1.784 1.364-2.975 1.364-2.206 0-4-1.794-4-4s1.794-4 4-4c1.937 0 3.555 1.384 3.921 3.214.679.35 1.309.383 2.033.077-.27-2.293-1.837-4.179-3.943-4.931.732-.83 1.797-1.36 2.989-1.36 2.206 0 4 1.794 4 4s-1.794 4-4 4z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Gender:</p>
                                <p className="">{info.gender}</p>
                            </div>
                        </li>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                            <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Contact Number:</p>
                                <p className="">{info.mobile}</p>
                            </div>
                        </li>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                            <svg className='flex-shrink my-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.606 0h-10.606v10.609l13.393 13.391 10.607-10.606-13.394-13.394zm-7.02 6.414c-.782-.785-.781-2.047 0-2.83.782-.782 2.049-.779 2.829-.001.783.783.782 2.048 0 2.831-.783.781-2.046.781-2.829 0zm9.807 14.757l-8.484-8.484 7.778-7.778 8.486 8.485-7.78 7.777zm3.534-6.36l-5.656-5.656.707-.709 5.656 5.657-.707.708zm-1.414 1.414l-5.656-5.656.707-.707 5.656 5.656-.707.707zm-3.535-.707l-3.534-3.536.707-.706 3.535 3.535-.708.707z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Nicknames:</p>
                                <p className="">{info.nick[0]} or {info.nick[1]}</p>
                            </div>
                        </li>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                            <svg className='flex-shrink my-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Email:</p>
                                <p className="">{info.email[0]} or {info.email[1]}</p>
                            </div>
                        </li>
                        <li className='flex space-x-2 my-2 border p-5 cursor-pointer hover:shadow hover:rounded-full transition-all hover:bg-white'>
                        <svg className='flex-shrink my-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                            <div className="md:flex justify-between w-full">
                                <p className="">Address:</p>
                                <p className="">{info.address}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Personal;