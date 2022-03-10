import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => (
    <div className="w-full">
        <nav className='p-3'>
            <ul className='flex text-center align-middle justify-between'>
                <li className='font-semibold md:w-max w-full'>
                    <Link href="/">
                        <a className=''>
                            <Image src="/CyberEd.gif" alt="Edward Logo" width={50} height={50} className='flex-shrink rounded' />
                        </a>
                    </Link>
                </li>
                {/* <div className='md:flex hidden space-x-2 text-dark'>
                    <li className='hover:text-red-500 font-semibold'>
                        <Link href="/education/first">
                        <a>First Post</a>
                        </Link>
                    </li>
                    <li className='hover:text-red-500 font-semibold'>
                        <Link href="/education/second">
                        <a>Second Post</a>
                        </Link>
                    </li>
                </div> */}
            </ul>
        </nav>
        <div className="w-full text-center md:w-2/3 mx-auto font-main">
            <div className="w-max hidden md:flex mx-auto space-x-10">
                <p className="text-first">W</p>
                <p className="text-first">e</p>
                <p className="text-first">l</p>
                <p className="text-first">c</p>
                <p className="text-first">o</p>
                <p className="text-first">m</p>
                <p className="text-first">e</p>
                <p className="text-first"> </p>
                <p className="text-first">t</p>
                <p className="text-first">o</p>
            </div>
            <div className="block md:hidden text-center">
                <p className="text-xs">Welcome to</p>
            </div>
            <p className='text-red-500 text-2xl uppercase md:normal-case font-black md:text-7xl italic'>Ed&lsquo;s Portfolio</p>

            <div className="w-full mx-auto grid grid-cols-3 gap-2 md:gap-5 my-3">
                <div className="py-0">
                    <Image src="/eat.png" width={210} height={60} alt='eat' className='' />
                </div>
                <div className="py-0">
                    <Image src="/sleep.png" width={210} height={60} alt='sleep' className='' />
                </div>
                <div className="py-0">
                    <Image src="/code.png" width={210} height={60} alt='code' className='' />
                </div>
            </div>
        </div>
    </div>
)

export default Navigation
