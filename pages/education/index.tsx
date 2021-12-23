import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'

const Education = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
        <Header />
        <h1>Education: {id}</h1>
        <ul>
            <li>
            <Link href="/education/[id]/[comment]" as={`/education/${id}/first-comment`}>
                <a>First comment</a>
            </Link>
            </li>
            <li>
            <Link href="/education/[id]/[comment]" as={`/education/${id}/second-comment`}>
                <a>Second comment</a>
            </Link>
            </li>
        </ul>
        </>
    )
}

export default Education
