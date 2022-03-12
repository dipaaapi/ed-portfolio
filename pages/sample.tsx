import type { NextPage } from 'next'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/nav'

const Sample: NextPage = () => {
    return (
        <div className="p-0 relative">
            <Navigation />

            {/* put all of your content start here */}
            <div className="w-full bg-whiteg">
                <div className="md:w-2/3 mx-auto w-10/12 p-5">
                    <p className="text-redg text-4xl hover:text-white delay-200 transition-all">Hello Cabrera</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sample
