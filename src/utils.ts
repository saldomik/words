import { getPrompt } from './constants'
import openai from './openAi'

export const generateQuizQuestion = async () => {
    const correctAnswerPosition = Math.round(Math.random() * 3)
    console.log(correctAnswerPosition)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: getPrompt(correctAnswerPosition) }],
        model: 'gpt-3.5-turbo',
    })

    console.log(chatCompletion.choices[0].message.content)
    return chatCompletion.choices[0].message.content
}
