/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return {
        props: { images: data }
    }
}

const gallery = () => {
    return (
        <main className="scroll-smooth">
            <Head>
                <title>Ed Portfolio | User Fetch Data Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-10/12 md:w-2/3 mx-auto">
            </div>
            <div className="w-full bg-blue-600">
                <div className="w-max py-2 mt-5 mx-auto">
                    <i className="my-auto font-semibold text-sm text-white">source: JSONPlaceholder</i>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default gallery;