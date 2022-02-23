import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="p-0 relative">

        {/* <Image src="/herobg.png" layout='fill' className='w-full h-[40vh] absolute left-0 top-0' /> */}
      <div className="absolute z-0 left-0 top-0 w-full h-auto">
      </div>

      <Header />

      <main className='px-5 justify-center text-center'>

        <div className='grid align-middle justify-center grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-0 md:gap-10 w-full md:w-2/3 md:mx-auto'>
          <Link href={'/skills'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Skills:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link>
          <Link href={'/hobbies'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Hobbies:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link>
          <Link href={'/projects'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Projects:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link>
          {/* <Link href={'/workxp'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Work Experience:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link> */}
          <Link href={'/personal'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Personal Information:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link>
        </div>

        {/* 0- */}
      </main>
      <Footer />
    </div>
  )
}

export default Home
