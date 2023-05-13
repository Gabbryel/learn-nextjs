import Link from 'next/link';

export default function FirstPost () {
    return(
        <>
            <h1>This is my first post. If you want to go back to posts lists, click <Link href="../">here</Link></h1>
        </>
    )
}