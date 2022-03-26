import type { NextPage } from 'next'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/nav'

const Sample: NextPage = () => {
    let display1 = parseInt(document.createElement('display').innerText);
    let int1 = parseInt(document.createElement('input1').innerText);
    let display2 = console.log(int1 - display1);
    interface Name1 {
        name1: number;
        displaying1: string;
    }
    return (
        <div className="p-0 relative">
            <Navigation />

            {/* put all of your content start here */}
            <div className="w-full bg-whiteg p-5">
                <div className="w-2/3 max-auto">
                    <p className="text-2xl font-bold text-black" id="display1"></p>
                    <p className="text-2xl font-bold text-black" id="display2"></p>
                    <input type="number" name="" id="display" />
                    <input type="number" name="" id="input1" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sample
