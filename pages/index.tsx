import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../../ed-portfolio/components/header'
import Footer from '../../ed-portfolio/components/footer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>

        <div className='grid align-middle justify-center grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-0 md:gap-10 w-full md:w-2/3'>
          <Link href={'/skills'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Skills:</h2>
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
          <Link href={'/workxp'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all'>Work Experience:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.</p>
              </div>
            </a>
          </Link>
        </div>

        <div className='w-full text-center'>
          <p className="text-red-500">
              there must be something!?
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
