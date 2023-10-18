interface Props {
  filter: string
  setFilter: (x: 'default' | 'completed' | 'active') => void
}

export default function FitlerTask({ filter, setFilter }: Props) {
  const filterHandler = () => {
    if (filter === 'default') {
      setFilter('completed')
    } else if (filter === 'completed') {
      setFilter('active')
    } else {
      setFilter('default')
    }
  }

  return (
    <button
      onClick={filterHandler}
      className="justify-self-end rounded-lg border-2 border-black p-2 capitalize text-gray-600"
    >
      {filter}
    </button>
  )
}
