import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => (
    <>
        <hr className="w-full bg-blue-500 h-1" />
        {/* <div className="w-max mx-auto">
            <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <a >
                    <div className="flex space-x-3 p-2">
                        <p className="my-auto flex-grow">Powered by: {'Edward'}</p>
                        <span className="flex-shrink">
                            <Image src="/favicon.ico" alt="vercel Logo" width={25} height={25} />
                        </span>
                    </div>
                </a>
            </Link>
        </div> */}
        <div className="w-10/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
            <div className="p-2">
                <p className="text-lg uppercase font-bold text-center md:text-left text-red-500 mb-5">special thanks to</p>
                <div className="flex space-x-3">
                    <Image src="/favicon.ico" alt="vercel Logo" width={50} height={50} />
                    <p className="text-base my-auto text-left">Vercel</p>
                </div>
            </div>
            <div className="p-2">
                <p className="text-lg uppercase font-bold text-center md:text-left text-red-500 mb-5">links</p>
                <div className="grid grid-cols-2">
                    <Link href="/home">
                        <a className="">
                            <p className="hover:bg-red-500 hover:text-white p-2 text-xs text-red-500 text-center md:text-left hover:underline">Home</p>
                        </a>
                    </Link>
                    <Link href="/skills">
                        <a className="">
                            <p className="hover:bg-red-500 hover:text-white p-2 text-xs text-red-500 text-center md:text-left hover:underline">Skills</p>
                        </a>
                    </Link>
                    <Link href="/hobbies">
                        <a className="">
                            <p className="hover:bg-red-500 hover:text-white p-2 text-xs text-red-500 text-center md:text-left hover:underline">Hobbies</p>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="">
                            <p className="hover:bg-red-500 hover:text-white p-2 text-xs text-red-500 text-center md:text-left hover:underline">Projects</p>
                        </a>
                    </Link>
                    <Link href="/personal">
                        <a className="">
                            <p className="hover:bg-red-500 hover:text-white p-2 text-xs text-red-500 text-center md:text-left hover:underline">Personal Info.</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="p-2">
                <p className="text-lg uppercase font-bold text-center md:text-left text-red-500 mb-5">Contact</p>
                <ul>
                    <li className="my-2">
                        <p className="text-xs my-auto text-center md:text-left italic">09663679205</p>
                    </li>
                    <li className="my-2">
                        <p className="text-xs my-auto text-center md:text-left italic">dipaaapi8@gmail.com</p>
                    </li>
                    <li className="my-2">
                        <p className="text-xs my-auto md:text-justify text-left italic">23 sta. fe street blk-3 magsaysay village tondo, manila Philippines</p>
                    </li>
                </ul>
            </div>
            <div className="p-2">
                <p className="text-lg uppercase font-bold text-center md:text-left text-red-500 mb-5">others</p>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {/* <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </div> */}
                    <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
                    </div>
                    {/* <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/></svg>
                    </div> */}
                    <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.892 13.745s.427.038.656-.247l.448-.563c.216-.28.738-.458 1.249-.174.676.382 1.55.982 2.149 1.541.33.278.407.688.182 1.121l-.002.009c-.232.408-.541.791-.932 1.148l-.009.006c-.44.367-.946.58-1.487.404l-.01-.014c-.972-.275-3.304-1.464-4.79-2.649-2.431-1.918-4.159-5.082-4.637-6.778l-.015-.01c-.176-.543.039-1.049.404-1.488l.007-.008c.357-.391.739-.701 1.148-.932l.009-.002c.432-.225.842-.149 1.121.182.367.379 1.056 1.291 1.54 2.149.284.51.106 1.033-.173 1.248l-.564.448c-.284.23-.247.657-.247.657s.834 3.156 3.953 3.952zm4.907-2.616c-.167 0-.303-.135-.304-.302-.014-1.83-.564-3.288-1.634-4.332-1.072-1.045-2.427-1.581-4.027-1.592-.168-.001-.303-.138-.301-.306.001-.167.136-.301.303-.301h.002c1.762.012 3.258.606 4.447 1.764 1.19 1.162 1.802 2.765 1.817 4.763.001.167-.133.304-.301.306h-.002zm-1.595-.624h-.007c-.168-.004-.301-.143-.297-.31.024-1.038-.273-1.878-.906-2.569-.63-.689-1.495-1.065-2.645-1.149-.167-.013-.293-.158-.281-.325.013-.167.158-.293.325-.281 1.294.095 2.32.548 3.049 1.345.733.8 1.092 1.807 1.065 2.992-.004.165-.139.297-.303.297zm-1.558-.522c-.161 0-.295-.126-.303-.289-.051-1.03-.537-1.534-1.527-1.588-.168-.009-.296-.152-.287-.319.009-.168.151-.296.319-.287 1.308.07 2.034.819 2.101 2.164.009.167-.12.31-.288.318l-.015.001zm6.817 3.469c-.605 4.877-4.172 5.185-4.83 5.396-.28.09-2.882.737-6.152.524 0 0-2.438 2.94-3.199 3.705-.119.119-.258.167-.352.145-.131-.032-.167-.188-.165-.414l.02-4.016v-.001c-4.762-1.323-4.485-6.295-4.431-8.898.054-2.603.543-4.736 1.996-6.17 2.61-2.364 7.987-2.011 7.987-2.011 4.541.02 6.717 1.387 7.222 1.845 1.675 1.434 2.528 4.867 1.904 9.895zm-.652-11.113c-.597-.548-3.007-2.298-8.375-2.322 0 0-6.33-.382-9.416 2.45-1.718 1.718-2.322 4.231-2.386 7.348-.063 3.118-.146 8.958 5.484 10.542l.006.002-.004 2.416s-.035.979.609 1.179c.779.241 1.236-.502 1.981-1.304.408-.44.971-1.086 1.397-1.58 3.851.322 6.812-.417 7.149-.526.777-.253 5.177-.816 5.893-6.657.738-6.022-.358-9.83-2.338-11.548z"/></svg>
                    </div>
                    {/* <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </div> */}
                    {/* <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div> */}
                    <div className="p-3 group">
                        <svg className='group-hover:text-red-500 fill-current border group-hover:rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Footer
