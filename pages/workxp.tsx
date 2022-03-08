
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const workxp = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Work Experience</h1>
                <div className="w-full bg-whiteg">
                    <div className="w-10/12 mx-auto p-5 group font-main relative">
                        <p className="text-red-500 text-2xl group-hover:translate-x-[60%] group-hover:text-blueg transition-all delay-100 p-3">Digima Web Solutions Inc.</p>
                        <p className="absolute bottom-0 left-[3] transition-all delay-100 -z-10 group-hover:z-10 text-left hidden text-sm text-red-500 p-3 group-hover:block">June 18, 2018 - August 30, 2019</p>
                    </div>
                    <div className="w-10/12 mx-auto p-5 group font-main">
                        <p className="text-red-500 text-2xl group-hover:translate-x-[60%] group-hover:text-blueg transition-all delay-100 p-3">Vanity Health and Wellness</p>
                    </div>
                    <div className="w-10/12 mx-auto p-5 group font-main">
                        <p className="text-red-500 text-2xl group-hover:translate-x-[60%] group-hover:text-blueg transition-all delay-100 p-3">Vertex Digital Entertainment Technologies Inc.</p>
                    </div>
                    <div className="w-10/12 mx-auto p-5 group font-main">
                        <p className="text-red-500 text-2xl group-hover:translate-x-[60%] group-hover:text-blueg transition-all delay-100 p-3 group-hover:drop-shadow-md">AiPayGo Inc.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default workxp;