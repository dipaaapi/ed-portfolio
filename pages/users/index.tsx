import Head from "next/head";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";
import React from 'react';

interface Owner {
    id: number;
    name: string;
    username: string;
    email: string;
    }

    const index = ({ owner }: { owner: Owner[] }) => {
    <main className="scroll-smooth">
            <Head>
                <title>Ed Portfolio | User Fetch Data Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <div className="mt-10">
                {owner.map(owner => (
                    <div key={owner.id} className="w-2/3 mx-auto">
                        <a className="block md:flex md:space-x-3 md:my-0 my-5 md:border-y-0 border-y md:py-0 py-2 px-4 hover:shadow-blue-500 rounded-full hover:bg-gray-200 justify-center md:justify-between">
                            <p className="md:py-2 md:px-4 hover:cursor-pointer rounded-full md:bg-none hover:bg-blue-600 hover:text-white md:my-5 font-bold md:text-left text-center uppercase text-sm md:text-base">{ owner.name }</p>
                            <p className="md:py-2 md:px-4 hover:cursor-pointer rounded-full md:bg-none hover:bg-blue-600 hover:text-white md:my-5 italic text-xs text-center md:text-base my-auto">{ owner.username }</p>
                            <p className="md:py-2 md:px-4 hover:cursor-pointer rounded-full md:bg-none hover:bg-blue-600 hover:text-white md:my-5 italic text-xs md:text-right text-center md:text-base my-auto">{ owner.email }</p>
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
        </main>
    };

    export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { owner: data }
    };
    };

export default index;
