
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const workxp = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Work Experience</h1>
            </main>

            <Footer />
        </div>
    );
}

export default workxp;