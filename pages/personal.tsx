import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const Personal: NextPage = () => {
    const info = {
        name: 'John Edward M. Cabrera',
        age: 32,
        position: 'Front-end Developer',
        gender: 'male',
        address: '23 sta. fe street blk-3 brgy. 103 zone-8 magsaysay village District 1 Tondo, Manila Philippines',
        mobile: '09663679205',
        nick: ['Ed', 'Janjan'],
        email: 'dipaaapi8@gmail.com'
    }
    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className='text-2xl uppercase text-red-500 font-bold my-3 text-center'>Personal Information</h1>
                <ul>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
                        <p className="flex-grow">{info.name}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"/></svg>
                        <p className="">{info.position}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                        <p className="flex-grow">{info.age}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 0v2h2.586l-2.113 2.113c-.981-.698-2.177-1.113-3.473-1.113-2.22 0-4.144 1.216-5.18 3.009-3.229.096-5.82 2.738-5.82 5.991 0 2.973 2.164 5.433 5 5.91v2.09h-3v2h3v2h2v-2h3v-2h-3v-2.09c1.791-.301 3.294-1.403 4.167-2.918 3.235-.09 5.833-2.735 5.833-5.992 0-1.296-.415-2.492-1.113-3.473l2.113-2.113v2.586h2v-6h-6zm-3 13c-1.944 0-3.564-1.396-3.923-3.236-.66-.333-1.365-.346-2.033-.066.266 2.293 1.827 4.181 3.931 4.938-.729.831-1.784 1.364-2.975 1.364-2.206 0-4-1.794-4-4s1.794-4 4-4c1.937 0 3.555 1.384 3.921 3.214.679.35 1.309.383 2.033.077-.27-2.293-1.837-4.179-3.943-4.931.732-.83 1.797-1.36 2.989-1.36 2.206 0 4 1.794 4 4s-1.794 4-4 4z"/></svg>
                        <p className="flex-grow">{info.gender}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/></svg>
                        <p className="flex-grow">{info.mobile}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.606 0h-10.606v10.609l13.393 13.391 10.607-10.606-13.394-13.394zm-7.02 6.414c-.782-.785-.781-2.047 0-2.83.782-.782 2.049-.779 2.829-.001.783.783.782 2.048 0 2.831-.783.781-2.046.781-2.829 0zm9.807 14.757l-8.484-8.484 7.778-7.778 8.486 8.485-7.78 7.777zm3.534-6.36l-5.656-5.656.707-.709 5.656 5.657-.707.708zm-1.414 1.414l-5.656-5.656.707-.707 5.656 5.656-.707.707zm-3.535-.707l-3.534-3.536.707-.706 3.535 3.535-.708.707z"/></svg>
                        <p className="flex-grow">{info.nick[0]} or {info.nick[1]}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                        <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                        <p className="flex-grow">{info.email}</p>
                    </li>
                    <li className='flex space-x-2 my-2'>
                    <svg className='flex-shrink' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                        <p className="flex-grow">{info.address}</p>
                    </li>
                </ul>
            </main>

            <Footer />
        </div>
    )
}

export default Personal;