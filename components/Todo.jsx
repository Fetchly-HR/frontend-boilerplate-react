export default function Todo({ index, todo, deleteTodo, toggleComplete }) {
  return (
    <li
      key={todo.id}
      className="todo block p-5 w-full rounded border-2 border-gray-300 bg-white text-black"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            {`${index + 1}. ${todo.title}`}
          </h3>
          <p className="space-x-2 my-2">
            {todo.completed ? (
              <span
                className="px-2 py-1 text-xs rounded-full bg-green-200"
              >
                Complete
              </span>
            ) : (
              <span
                className="px-2 py-1 text-xs rounded-full bg-red-200"
              >
                Incomplete
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-4 text-center align-center">
          {todo.completed ? (
            <button
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => toggleComplete(todo.id)}
            >
              Incomplete
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => toggleComplete(todo.id)}
            >
              Complete
            </button>
          )}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div >
    </li >
  )
}
