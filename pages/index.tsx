import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {

  const main = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl fringilla, vestibulum erat eu, fermentum metus. Donec finibus nec lacus at tristique. Praesent dictum sapien nunc. Cras finibus gravida lobortis. Proin risus massa, lobortis lacinia finibus a, finibus in enim. Duis eu mauris eget velit efficitur aliquet non sit amet orci. Etiam non felis sem. Phasellus vitae egestas erat, a pharetra risus.";

  return (
    <div className="p-0 relative">

      <div className="absolute z-0 left-0 top-0 w-full h-auto">
      </div>

      <Header />

      <main className='px-5 pb-10 justify-center text-center'>

        <div className='md:grid align-middle justify-center grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-0 md:gap-10 w-full md:w-2/3 md:mx-auto'>
          <Link href={'/skills'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Skills:</h2>
                <div className="grid grid-cols-4 md:grid-cols-6 my-2 gap-3">
                  <Image src="/adobeXd.png" width={50} height={50} alt="adobe Xd" className='p-0' />
                  <Image src="/adobeAi.png" width={50} height={50} alt="adobe Ai" className='p-0' />
                  <Image src="/adobePs.png" width={50} height={50} alt="adobe Ps" className='p-0' />
                  <Image src="/balsamiq.png" width={50} height={50} alt="balsamiq" className='p-0' />
                  <Image src="/html5.png" width={50} height={50} alt="html5" className='p-0' />
                  <Image src="/css.png" width={50} height={50} alt="css" className='p-0' />
                  <Image src="/javascript.png" width={50} height={50} alt="javascript" className='p-0' />
                  <Image src="/php.png" width={50} height={50} alt="php" className='p-0' />
                  <Image src="/mysql.png" width={50} height={50} alt="mysql" className='p-0' />
                  <Image src="/react.png" width={50} height={50} alt="react" className='p-0' />
                  <Image src="/next.png" width={50} height={50} alt="next" className='p-0' />
                  <Image src="/bootstrap.png" width={50} height={50} alt="bootstrap" className='p-0' />
                  <Image src="/materialui.png" width={50} height={50} alt="materialui" className='p-0' />
                  <Image src="/sass.png" width={50} height={50} alt="sass" className='p-0' />
                  <Image src="/tailwindcss.png" width={50} height={50} alt="tailwindcss" className='p-0' />
                  <Image src="/laravel.png" width={50} height={50} alt="laravel" className='p-0' />
                  <Image src="/laraveljetstream.png" width={50} height={50} alt="laraveljetstream" className='p-0' />
                  <Image src="/laravellivewire.png" width={50} height={50} alt="laravellivewire" className='p-0' />
                </div>
              </div>
            </a>
          </Link>
          <Link href={'/hobbies'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md md:my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Hobbies:</h2>
                <div className="my-2 gap-3">
                  <div className="flex md:space-x-3 w-10/12 mx-auto">
                    <p className="flex-grow text-[12px] md:text-2xl my-auto text-center md:text-left">Playing Video Games</p>
                    <Image src="/gaming.png" width={45} height={50} alt="html5" className='p-0' />
                  </div>
                  <div className="flex space-x-3 w-10/12 mx-auto">
                    <Image src="/anime.png" width={50} height={50} alt="html5" className='w-max h-auto p-0' />
                    <p className="flex-grow text-[12px] md:text-3xl my-auto text-center md:text-left">Watching Anime</p>
                  </div>
                  <div className="flex space-x-3 w-10/12 mx-auto">
                    <p className="flex-grow text-[12px] md:text-4xl my-auto text-center md:text-left">Adopting Pets</p>
                    <Image src="/pets.png" width={50} height={50} alt="html5" className='p-0' />
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href={'/projects'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Projects:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>{ main }</p>
              </div>
            </a>
          </Link>
          <Link href={'/workxp'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Work Experience:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>{main}</p>
              </div>
            </a>
          </Link>
          <Link href={'/personal'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Personal Information:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>{main}</p>
              </div>
            </a>
          </Link>
          <Link href={'/education'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl transition-all font-main'>Educational Attainment:</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all'>{main}</p>
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
