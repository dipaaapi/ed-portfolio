import type { NextPage } from 'next'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Animecard from '../components/Animecard'

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Ed Portfolio | Hobbies Page</title>
                <link rel="icon" href="/CyberEd.gif" />
            </Head>
            <Navigation />
            <div className="w-10/12 mx-auto p-5 bg-orange-100 md:w-2/3">
                <div className="group text-center">
                    <div className="flex space-x-3 w-max h-max m-auto">
                        <svg className='fill-current text-blue-500 my-auto w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 10.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zm16 6.216c0 1.587-.56 2.591-1.749 3.179-.143.071-.296.105-.449.105-.242 0-.482-.087-.672-.255l-3.109-2.745c-.558-.494-1.044-1.004-2.404-1.004h-7.233c-1.36 0-1.847.51-2.404 1.004l-3.11 2.745c-.188.168-.429.255-.672.255-.152 0-.307-.034-.449-.105-1.189-.588-1.749-1.592-1.749-3.178 0-2.062.945-5.461 2.681-9.857.822-2.083 2.292-2.86 3.695-2.86.656 0 1.298.17 1.853.456 2.424 1.249 5.17 1.223 7.544 0 .553-.286 1.195-.456 1.851-.456 1.403 0 2.874.777 3.696 2.86 1.735 4.395 2.68 7.794 2.68 9.856zm-15-6.216c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5zm4-2.5c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm3.5 2.5c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm1.75 1.75c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm0-3.531c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.336.75-.75zm1.734 1.781c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75z"/></svg>
                        <p className="text-center font-bold text-4xl uppercase">game</p>
                    </div>
                    <ul className="grid md:grid-cols-3 grid-cols-1 w-full my-5">
                        <li className='h-full w-full'>
                            <Link href="https://leagueoflegends.com/">
                                <a className=''>
                                    <Image src="/leagueoflegends.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://terraria.org/">
                                <a className=''>
                                    <Image src="/terraria.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://www.facebook.com/MobileLegendsOnlinePH">
                                <a className=''>
                                    <Image src="/ML_logo.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://www.facebook.com/farmcityofficial/">
                                <a className=''>
                                    <Image src="/farmcity.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://genshin.hoyoverse.com/en/home">
                                <a className=''>
                                <Image src="/genshin.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://www.ea.com/games/the-sims/the-sims-4">
                                <a className=''>
                                <Image src="/thesims4.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://cncnz.com/games/yuris-revenge/">
                                <a className=''>
                                <Image src="/yuri.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/Tales_(video_game_series)">
                                <a className=''>
                                <Image src="/talesofseries.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="http://iro.ragnarokonline.com/">
                                <a className=''>
                                <Image src="/ragnarok.png" alt="" className="w-max h-max m-auto" width={250} height={120} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-10/12 mx-auto p-5 bg-blue-100 md:w-2/3">
                <div className="group text-center">
                    <div className="flex space-x-3 w-max h-max m-auto">
                        <svg className='fill-current text-blue-500 my-auto w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 10.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zm16 6.216c0 1.587-.56 2.591-1.749 3.179-.143.071-.296.105-.449.105-.242 0-.482-.087-.672-.255l-3.109-2.745c-.558-.494-1.044-1.004-2.404-1.004h-7.233c-1.36 0-1.847.51-2.404 1.004l-3.11 2.745c-.188.168-.429.255-.672.255-.152 0-.307-.034-.449-.105-1.189-.588-1.749-1.592-1.749-3.178 0-2.062.945-5.461 2.681-9.857.822-2.083 2.292-2.86 3.695-2.86.656 0 1.298.17 1.853.456 2.424 1.249 5.17 1.223 7.544 0 .553-.286 1.195-.456 1.851-.456 1.403 0 2.874.777 3.696 2.86 1.735 4.395 2.68 7.794 2.68 9.856zm-15-6.216c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5zm4-2.5c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm3.5 2.5c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm1.75 1.75c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm0-3.531c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.336.75-.75zm1.734 1.781c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75z"/></svg>
                        <p className="text-center font-bold text-4xl uppercase">watching anime</p>
                    </div>
                    <ul className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full my-5">
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/Dragon_Ball_Super">
                                <a className=''>
                                    <Image src="/dragonball.png" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/One_Piece">
                                <a className=''>
                                    <Image src="/onepiece.jpg" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/Naruto">
                                <a className=''>
                                    <Image src="/naruto.png" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/YuYu_Hakusho">
                                <a className=''>
                                    <Image src="/yuyuhakusho.jpg" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/Fullmetal_Alchemist">
                                <a className=''>
                                    <Image src="/fullmetal.jpg" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                        <li className='h-full w-full'>
                            <Link href="https://en.wikipedia.org/wiki/Dr._Stone">
                                <a className=''>
                                    <Image src="/drstone.jpg" alt="" className="w-max h-max m-auto" height={250} width={150} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <p className="text-center font-bold text-4xl uppercase">Fish Parent</p> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home
