import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { CgRemoveR } from 'react-icons/cg'

import { TaskType } from '@utils/types'

interface Props {
  task: TaskType
  updateCompletedHandler: (id: number) => void
  deleteTaskHandler: (id: number) => void
}
export default function Task({
  task,
  updateCompletedHandler,
  deleteTaskHandler,
}: Props) {
  const completedStyle = {
    color: task?.completed ? 'gray' : 'black',
    textDecoration: task?.completed ? 'line-through' : 'none',
  }

  const boxStyle = {
    borderColor: task?.completed ? 'gray' : 'black',
  }

  return (
    <div
      style={boxStyle}
      className="mb-2 flex flex-row items-center justify-between rounded-lg border-2 border-slate-700 p-2"
    >
      <div className="flex flex-row gap-6">
        <p style={completedStyle}>{task.description.toLowerCase()}</p>
      </div>
      <div className="">
        {task.completed ? (
          <button
            onClick={() => {
              updateCompletedHandler(task.id)
            }}
            className="p-2"
          >
            <GrCheckboxSelected size={18} />
          </button>
        ) : (
          <button
            onClick={() => {
              updateCompletedHandler(task.id)
            }}
            className="p-2"
          >
            <GrCheckbox size={18} />
          </button>
        )}
        <button
          onClick={() => {
            deleteTaskHandler(task.id)
          }}
          className="p-2"
        >
          <CgRemoveR size={18} />
        </button>
      </div>
    </div>
  )
}
