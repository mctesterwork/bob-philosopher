"use client"
import { useEffect, useState } from 'react'
import askBob from './GeminiChat'

export const BobText = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    askBob("What's up Bob?")
      .then((data) => {
        console.log(data)
        setText(data)
      })
      .catch((error) => {
        setError(error)
        console.error(error)
        })
  }, [])
  return (
    <div>
      {error ? <p>{JSON.stringify(error)}</p> : <p>{text}</p>}
    </div>
  )
}