import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Projects Page</h1>

            </main>

            <Footer />
        </div>
    )
}

export default Projects;