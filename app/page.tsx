'use client'
// npm imports
import React, { useState, useRef } from 'react'
// local imports
import Image from 'next/image'
import AddTask from '@/components/AddTask'
import FilterTask from '@/components/FilterTask'
import TaskList from '@components/TaskList'
// type imports
import { TaskType } from '@utils/types'

const SampleData: TaskType[] = [
  { id: 0, description: 'Japanese Homework #1', completed: false },
  { id: 1, description: 'JavaScript ES6', completed: false },
  { id: 2, description: 'Biology Homework', completed: false },
  { id: 3, description: 'Tennis Practice', completed: true },
  { id: 4, description: 'Make Coffee', completed: true },
]

export default function Home() {
  const idRef = useRef(5)
  const [tasks, setTasks] = useState<TaskType[]>(SampleData)
  const [filter, setFilter] = useState<'default' | 'completed' | 'active'>(
    'default'
  )

  const addTaskHandler = (taskDescription: string): void => {
    const taskObject = {
      id: idRef.current,
      description: taskDescription,
      completed: false,
    }
    idRef.current++
    setTasks((prev) => [...prev, taskObject])
  }

  const updateCompletedHandler = (id: number) => {
    let filteredTasks = [...tasks]

    for (let obj of filteredTasks) {
      if (obj.id === id) {
        obj.completed = !obj.completed
      }
    }

    setTasks(filteredTasks)
  }

  const deleteTaskHandler = (id: number) => {
    let filteredTasks = [...tasks]
    const index = filteredTasks.findIndex((task) => task.id === id)
    filteredTasks.splice(index, 1)
    setTasks(filteredTasks)
  }

  return (
    <main className="flex h-screen w-full flex-col items-center  font-bodyFont">
      <h1 className="mt-4 font-titleFont text-3xl">Todo List Application</h1>
      <div className=" m-4 flex w-1/4 flex-row justify-between">
        <AddTask addTaskHandler={addTaskHandler} />
        <FilterTask filter={filter} setFilter={setFilter} />
      </div>
      <TaskList
        tasks={tasks}
        updateCompletedHandler={updateCompletedHandler}
        deleteTaskHandler={deleteTaskHandler}
        filter={filter}
      />
    </main>
  )
}
