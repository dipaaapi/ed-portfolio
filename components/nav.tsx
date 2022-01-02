import Link from 'next/link'

const Navigation = () => (
    <div className="w-full my-2 px-3">
        <nav className=''>
            <ul className='flex gap-2 text-center align-middle justify-center'>
                <li className='hover:text-red-500 font-semibold'>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
                <li className='hover:text-red-500 font-semibold'>
                    <Link href="/skills">
                    <a>skills</a>
                    </Link>
                </li>
                <li className='hover:text-red-500 font-semibold'>
                    <Link href="/projects">
                    <a>projects</a>
                    </Link>
                </li>
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
            </ul>
        </nav>
    </div>
)

export default Navigation
