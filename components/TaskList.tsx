import { TaskType, FilterHandlerType } from '@utils/types'
import Task from '@components/Task'

interface Props {
  tasks: TaskType[]
  filter: string
  updateCompletedHandler: (id: number) => void
  deleteTaskHandler: (id: number) => void
}

const filterHandler: FilterHandlerType = {
  default: function (task: TaskType) {
    return task.completed === true || task.completed === false
  },
  completed: function (task: TaskType) {
    return task.completed === true
  },
  active: function (task: TaskType) {
    return task.completed === false
  },
}

export default function TaskList({
  tasks,
  updateCompletedHandler,
  deleteTaskHandler,
  filter,
}: Props) {
  return (
    <div className="flex w-1/4 flex-col justify-between">
      {tasks.filter(filterHandler[filter]).map((task, index) => (
        <Task
          key={index}
          task={task}
          updateCompletedHandler={updateCompletedHandler}
          deleteTaskHandler={deleteTaskHandler}
        />
      ))}
    </div>
  )
}
