'use client'

import { correct } from '@/app/actions'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import './style.css'

type GameFormProps = {
  answerId: string
  meanings: { significato: string }[]
}

const initialState = {
  answerId: '',
  state: '',
  value: '',
}

export default function GameForm({ meanings, answerId }: GameFormProps) {
  initialState.answerId = answerId
  const [state, formAction] = useFormState(correct, initialState)
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <>
      <form ref={formRef} action={formAction} className="answers">
        <ul>
          {meanings.map((meaning, index) => (
            <li
              key={index}
              className={state?.value === index.toString() ? state.state : ''}
            >
              <input
                onChange={() => {
                  formRef.current?.requestSubmit()
                }}
                type="radio"
                id={`radio-${index.toString()}`}
                name={`radio-${index.toString()}`}
                value={`${index.toString()}`}
              />
              <label htmlFor={`radio-${index.toString()}`}>
                {meaning.significato}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </>
  )
}
