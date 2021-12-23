import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => (
    <div className="w-full my-2 px-3">
        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by: {'Edward'}
            <span className={styles.logo}>
                <Image src="/edward.svg" alt="Edward Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
    </div>
)

export default Footer
