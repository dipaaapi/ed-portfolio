import type { NextPage } from 'next'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'

const Sample: NextPage = () => {
    return (
        <div className="p-0 relative">

            <>
                <div className="md:w-2/3 w-10/12 my-10 mx-auto">
                    <div className="flex space-x-10 mx-auto w-max">
                        <div className="rounded-full">
                            <Image src="/ed.jpg" width={250} height={250} alt="edward image" className='rounded-full' />
                        </div>
                        <div className="my-auto">
                            <p className="text-6xl">Hello, I'm Ed.</p>
                            <p className="text-3xl">I'm visual and Web Designer</p>
                            <div className="grid grid-cols-3 gap-5 mt-2">
                                <Image src="/eat.png" width={100} height={25} alt="eat" className='' />
                                <Image src="/sleep.png" width={100} height={25} alt="sleep" className='' />
                                <Image src="/code.png" width={100} height={25} alt="code" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </div>
    )
}

export default Sample
