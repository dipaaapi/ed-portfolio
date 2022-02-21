import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => (
    <div className="w-max mx-auto my-2 px-3">
        <footer className={styles.footer}>
            <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <a >
                    <p className="my-auto">Powered by: {'Edward'}</p>
                    <span className={styles.logo}>
                        <Image src="/favicon.ico" alt="vercel Logo" width={15} height={15} />
                    </span>
                </a>
            </Link>
        </footer>
    </div>
)

export default Footer
