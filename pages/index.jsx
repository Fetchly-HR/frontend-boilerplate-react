import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {

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
            <li
              v-if="todos.length === 0"
              className="px-6 py-2"
            >
              <div className="block p-5 w-full rounded border-gray-300 bg-transparent border-2 border-dashed text-center text-gray-500">
                <h3 className="text-2xl font-bold">
                  Add Todos
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </main >
    </>
  )
}
