export interface TaskType {
  id: number
  description: string
  completed: boolean
}

export interface FilterHandlerType {
  default: (x: TaskType) => boolean
  completed: (x: TaskType) => boolean
  active: (x: TaskType) => boolean
}
