import Header from '../components/Header'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'



export default function Home() {
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)

  const [todoTitle, setTodoTitle] = useState('')

  const [fetchedData, setFetchedData] = useState([])

  async function loadData() {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(response => response.json())
      .then(data => setFetchedData(data))
  }

  useEffect(() => {
    loadData()
  }, [])

  // adds a todo to to the todos Object Array
  const addTodo = () => {
    const todo = {
      title: todoTitle,
      completed: false
    }

    setTodos(prev => [...prev, todo])
    setTodoTitle('')
    setOpen(false)
  }
  // add a function that marks the todo as complete using the index.
  const markComplete = (index) => {
    setTodos(prev => {
      const newTodos = [...prev]
      newTodos[index].completed = true
      return newTodos
    })
  }

  // add a function that removes the todo from the todos array using the index.
  const deleteTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header />
      <main>
        <header className="bg-white shadow">
          <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 text-red">
                Todos
              </h1>
              <button
                onClick={() => setOpen((prev) => !prev)}
                id="add-todo-button"
                className="add-todo px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-md active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
              >
                New Todo
              </button>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto my-5 px-4 py-6">
          <ul
            role="list"
            className="space-y-1"
          >
            {todos.length === 0 ? 
              <li className="px-6 py-2">
                <div className="block p-5 w-full rounded border-gray-300 bg-transparent border-2 border-dashed text-center text-gray-500">
                  <h3 className="text-2xl font-bold">
                    Add Todos
                  </h3>
                </div>
              </li>
               : todos.map((todo, i) => 
               <li key={i} onClick={() => markComplete(i)}>
                <div className='flex justify-between bg-slate-500 px-2 py-1 rounded items-center'>
                  <span className='text-white capitalize'>
                  {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                  </span>
                  <button 
                  className='add-todo px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue'
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(i)
                  }}>delete</button>
                  </div>
                </li>
              )}
          </ul>
          <div>{fetchedData.map((el) => <div key={el._id}>{el.text}</div>)}</div>
        </div>
      </main >
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title as="h3" className="">
                        <h1 class="text-2xl font-bold">
                          Add Todo
                        </h1>
                        <button
                          onClick={() => setOpen((false))}
                          class="absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        >
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <input 
                          value={todoTitle}
                          onChange={(e) => setTodoTitle(e.target.value)}
                          placeholder='My Todo Title' 
                          className="mt-5 shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => addTodo()}
                    >
                      Add Todo
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
