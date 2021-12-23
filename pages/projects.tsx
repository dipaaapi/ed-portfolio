import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className="">Projects Page</h1>
            </main>

            <Footer />
        </div>
    )
}

export default Projects;