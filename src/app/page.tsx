import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Welcome to Words Quiz Game</h1>
            <Link href="/single-question">Try a single question</Link>
            <Link href="/game">Login and play a game</Link>
        </main>
    )
}
