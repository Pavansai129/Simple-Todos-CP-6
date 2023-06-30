// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteTodo} = props
  const {id, title} = eachTodo
  const deleteTodo = () => onDeleteTodo(id)
  return (
    <div className="todo">
      <li>
        <p>{title}</p>
      </li>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
