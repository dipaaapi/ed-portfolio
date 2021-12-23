import type { NextPage } from 'next'
import Header from '../../ed-portfolio/components/header'
import Footer from '../../ed-portfolio/components/footer'
import styles from '../styles/Home.module.css'

const Skills: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className="">Skills Page</h1>
            </main>

            <Footer />
        </div>
    )
}

export default Skills;