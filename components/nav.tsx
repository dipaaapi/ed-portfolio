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
                            {/* <div className="flex-grow bg-gradient-to-r from-red-500 to-dark p-2 text-left rounded">
                                <p className="text-white text-lg font-black">CyberEd</p>
                                <p className="text-white text-xs">Leads you to your future</p>
                            </div> */}
                        </a>
                    </Link>
                </li>
                <div className='md:flex hidden space-x-2 text-dark'>
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
                </div>
            </ul>
        </nav>
    </div>
)

export default Navigation
