import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => (
    <>
        <hr className="w-full bg-blue-500 h-1" />
        <div className="w-max mx-auto">
            <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <a >
                    <div className="flex space-x-3 p-2">
                        <p className="my-auto flex-grow">Powered by: {'Edward'}</p>
                        <span className="flex-shrink">
                            <Image src="/favicon.ico" alt="vercel Logo" width={25} height={25} />
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    </>
)

export default Footer
