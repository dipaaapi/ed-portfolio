import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import Image from 'next/image'

const Specialthanks: NextPage = () => {
    return (
        <div className='scroll-smooth'>
            <Head>
                <title>Ed Portfolio | Special thanks Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />

            <main>
                <p className="">welcome to special thanks page</p>
            </main>

            <Footer />
        </div>
    )
}

export default Specialthanks;