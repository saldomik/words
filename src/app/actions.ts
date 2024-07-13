'use server'

import { prisma } from '@/prisma'
import { z } from 'zod'

const schema = z
    .string()
    .array()
    .refine((value) => value.some((val) => val !== ''), {
        message: 'Select at least one answer',
    })
    .refine((value) => value.filter((val) => val !== '').length === 1, {
        message: 'Select exactly one answer',
    })

export async function correct(
    prevState: { answerId: string; state: string, value?: string},
    formData: FormData
) {
    const validatedFields = schema.safeParse([
        formData.get('radio-0') || '',
        formData.get('radio-1') || '',
        formData.get('radio-2') || '',
    ])

    if (!validatedFields.success) {
        return {
            state: validatedFields.error.issues[0].message,
            answerId: prevState.answerId,
        }
    }

    const answerValue = validatedFields.data.find((val) => val !== '')

    const answer = await prisma.answer.findFirst({
        where: {
            id: prevState.answerId,
            answer_id: answerValue
        },
    })

    if (!answer) {
        return {
            state: 'wrong',
            answerId: prevState.answerId,
            value: answerValue
        }
    }

    return {
        state: 'correct',
        answerId: prevState.answerId,
        value: answerValue
    }
}
