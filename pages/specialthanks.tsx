import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'

const Specialthanks: NextPage = () => {
    const infos = ["vercel", "JSON placeholder", "w3school", "github", "vscode"]
    return (
        <div className='scroll-smooth'>
            <Head>
                <title>Ed Portfolio | Special thanks Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main>


                <p className="text-center text-4xl font-bold uppercase">special thanks to the following:</p>

                <div className="p-5 lg:w-2/3 md:w-2/3 w-10/12 mx-auto">
                    <ul className=''>
                        {infos.map((info) => {
                            <li className="">
                                <p className="text-black text-center" key="info">{info}</p>
                            </li>
                        })}
                        <li className="">
                            <p className="">vercel</p>
                        </li>
                        <li className="">
                            <p className="">JSON placeholder</p>
                        </li>
                        <li className="">
                            <p className="">w3school</p>
                        </li>
                        <li className="">
                            <p className="">github</p>
                        </li>
                        <li className="">
                            <p className="">vscode</p>
                        </li>
                    </ul>
                </div>

            </main>

            <Footer />
        </div>
    )
}

export default Specialthanks;