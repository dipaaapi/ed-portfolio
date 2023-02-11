import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

const Home: NextPage = () => {

  const main = ["I am proficient in web development, with expertise in front-end development and UI design. I also have experience in quality assurance and game development. My skillset includes proficiency in HTML, CSS, JavaScript, and jQuery, as well as experience with various web development frameworks and tools. I am also skilled in project management, problem-solving, and communication.", "As a well-rounded individual, you have diverse hobbies that include playing video games, watching anime, and reading manga. You also enjoy taking care of pets, particularly dogs, cats, and fish such as flower horn. Your hobbies show your interest in technology and your creative side, and they provide a balance to your busy work life as an IT professional and game developer in the Philippines.", "As a web developer in the Philippines, you specialize in building and maintaining websites, creating web applications, and designing UI features. Your portfolio can demonstrate your front-end and back-end development skills, as well as your notable achievements in web development projects. With a strong portfolio, you can showcase your expertise and stand out in the competitive tech industry in the Philippines.", "As a web development professional, you have experience in designing and developing websites and web applications with a focus on UI design. You have experience creating visually appealing and user-friendly interfaces, testing and debugging front-end web development projects, creating optimized visual content, and building the client-side of web applications using various front-end frameworks and libraries.", "I'm a web development professional based in the Philippines, with a degree in Information Technology and several years of experience in web development. I specialize in UI design and have expertise in various front-end frameworks and libraries. I'm also skilled in quality assurance and graphic art. Additionally, I have experience as an Associate Unity game developer.", "I completed my primary education at Amado V. Hernandez Elementary and then went on to graduate from Nolasco High School, completing my secondary education. I then pursued a degree in Information Technology from Informatics College Manila, Philippines, and completed various courses that provided me with the necessary skills for web development."];

  const title = ["skills", "hobbies", "projects", "work experience", "personal information", "educational attainment"];

  return (
    <div className="p-0 relative">

      <div className="absolute z-0 left-0 top-0 w-full h-auto">
      </div>

      <Header />

      <main className='scroll-smooth px-5 pb-10 justify-center text-center'>

        <div className='md:grid align-middle justify-center grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-0 md:gap-10 w-full md:w-2/3 md:mx-auto'>
          <Link href={'/skills'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[0] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[0] }</p>
              </div>
            </a>
          </Link>
          <Link href={'/hobbies'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[1] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[1] }</p>
              </div>
            </a>
          </Link>
          <Link href={'/projects'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[2] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[2] }</p>
              </div>
            </a>
          </Link>
          <Link href={'/workxp'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[3] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[3] }</p>
              </div>
            </a>
          </Link>
          <Link href={'/personal'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[4] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[4] }</p>
              </div>
            </a>
          </Link>
          <Link href={'/education'}>
            <a className='group'>
              <div className='p-5 border-2 group-hover:border-red-500 transition-all rounded-md my-3'>
                <h2 className='text-red-500 group-hover:underline font-bold text-2xl uppercase transition-all font-main'>{ title[5] }</h2>
                <p className='italic text-base text-gray-600 group-hover:text-red-500 transition-all text-justify'>{ main[5] }</p>
              </div>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
