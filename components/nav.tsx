import Link from 'next/link'

const Navigation = () => (
    <div className="w-full">
        <nav className='p-3 bg-red-300'>
            <ul className='flex text-center align-middle justify-between'>
                <li className='hover:text-red-500 font-semibold'>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
                <div className='flex space-x-2'>
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
