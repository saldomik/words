import { prisma } from '@/prisma'
import { generateQuizQuestion } from '@/utils'
import GameForm from '../../components/game-form'

type ParsedData = {
    word: string
    meanings: { significato: string; correct: boolean }[]
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Game() {
    const response = await generateQuizQuestion()
    const data: ParsedData = JSON.parse(response as string)

    const answer = await prisma.answer.create({
        data: {
            question_id: data.word,
            answer_id: data.meanings
                .findIndex((meaning) => meaning.correct)
                .toString(),
        },
    })

    console.log(answer)

    return (
        <main>
            <h1>SCEGLI IL SIGNIFICATO CORRETTO:</h1>
            <p>{data.word}</p>
            <GameForm
                answerId={answer.id}
                meanings={data.meanings}
            />
        </main>
    )
}
