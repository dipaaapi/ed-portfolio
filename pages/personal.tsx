import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import Image from 'next/image'

const Personal: NextPage = () => {
    const info = [
        { name: "Name", data: "John Edward M. Cabrera" },
        { name: "Date of Birth", data: "January 28, 1989" },
        { name: "Gender", data: "Male" },
        { name: "Contact Number", data: "09761740995" },
        { name: "Nicknames", data: "Ed" },
        { name: "Email", data: "cabrerajohnedward@gmail.com" },
        { name: "Permanent Address", data: "23 sta. fe street blk-3 brgy. 103 zone-8 magsaysay village District 1 Tondo, Manila Philippines" },
        { name: "Address", data: "no. 34 Cabana CWC Brgy. Cadlan Camarines Sur Capitol, Bicol Philippines" }
    ];
    const positions = ['Front-end Developer', 'UI/UX Designer', 'Quality Assurance', 'Unity Game Developer'];
    return (
        <div className='scroll-smooth'>
            <Head>
                <title>Ed Portfolio | Personal Information Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main>
                <div className="md:flex grid grid-cols-1 w-max mx-auto">
                    <div className="flex-shrink mx-auto w-max">
                        <Image src="/ed.jpg" width={150} height={150} alt="ed picture" className="rounded-full shadow border-red-500 border w-max mx-auto" />
                    </div>
                    <div className="flex-grow p-3 my-auto">
                        <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Personal Information</h1>
                        <p className="text-red-500 my-auto text-center md:text-left text-4xl font-bold">{info[0].data}</p>
                        <div className="grid grid-cols-2 gap-5">
                            {positions.map((position, index) => (
                                <div className="" key={index}>
                                    <p className="text-sm text-center font-medium text-gray-800">{position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-10 bg-gray-300 bg-opacity-25 p-5">
                    <ul className='md:w-2/3 w-10/12 mx-auto rounded p-3 text-left'>
                        {info.map((item, index) => (
                        <li className="italic text-sm text-center hover:underline hover:text-red-500 text-gray-500" key={index}>
                            <div className="cursor-pointer md:flex justify-between w-full py-2 hover:border rounded-full border-black p-3">
                                <p className="font-medium uppercase text-gray-800">{item.name}:</p>
                                <p className="">{item.data}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Personal;