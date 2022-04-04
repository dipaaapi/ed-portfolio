import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return {
        props: { images: data }
    }
}

const gallery = ({ images }) => {
    return (
        <>
            <Head>
                <title>Ed Portfolio | User Fetch Data Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <div className="mt-10">
                {images.map(images => (
                    <div key={images.id} className="w-2/3 mx-auto">
                        <a className="block md:my-0 my-5 md:border-y-0 border-y md:py-0 py-2 px-4 hover:shadow-blue-500 rounded-full hover:bg-gray-200 justify-center md:justify-between">
                            <p className="md:py-2 md:px-4 hover:cursor-pointer rounded-full md:bg-none hover:bg-blue-600 hover:text-white md:my-5 font-bold md:text-left text-center uppercase text-sm md:text-base">{ images.title }</p>
                            <Image src="/{ images.url }" alt={ images.id } width={150} height={150} className="my-10 mx-auto" />
                        </a>
                    </div>
                ))}
                <div className="w-full bg-blue-600">
                    <div className="w-max py-2 mt-5 mx-auto">
                        <i className="my-auto font-semibold text-sm text-white">source: JSONPlaceholder</i>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default gallery;