import React, { useState } from 'react'

interface Props {
  addTaskHandler: (taskDescription: string) => void
}

export default function AddTask({ addTaskHandler }: Props) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setUserInput(event.target.value)
  }

  return (
    <form
      className="flex w-[92rem] flex-row"
      onSubmit={() => {
        event?.preventDefault()
        addTaskHandler(userInput)
        setUserInput('')
      }}
    >
      <input
        className="mr-2 w-4/6 rounded-lg border-2 border-black p-2"
        value={userInput}
        placeholder="Add task"
        onChange={handleChange}
      />
      <button
        className="w-1/6 rounded-lg border-2 border-black text-gray-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
