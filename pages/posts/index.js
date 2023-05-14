import Link from 'next/link';

export default function Posts () {
    return (
        <>
            <h1>Posts list</h1>
            <Link href="./posts/first-post">First post</Link>   
        </>
    )
}