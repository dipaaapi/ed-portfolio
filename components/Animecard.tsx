import Link from "next/link";

const Animecard = (title:string) => (
    <div className="">
        {/* <p className="">{ title }</p> */}
        <li className='h-full w-full'>
            <Link href="{title}">
                <a className=''>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Dragon_Ball_Super_Volume_1.png/220px-Dragon_Ball_Super_Volume_1.png" alt="dragon ball supper" className="w-max h-max m-auto" width={250} height={120} />
                </a>
            </Link>
        </li>
    </div>
)
export default Animecard;