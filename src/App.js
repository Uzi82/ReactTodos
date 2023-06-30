import {useState, useRef, useEffect} from 'react'
import Todos from './Todos'
export default function App() {
  const [Update, toUpdate] = useState(true)
  const [todos, setTodos] = useState([])
  const name = useRef(null)
  const task = useRef(null)
  function createTodo() {
    setTodos(()=>{
      let todoCopy = todos
      todoCopy.push({id: todos.length, name: name.current, task: task.current})
      return todoCopy
    })
    toUpdate(!Update)
  }
  return (
    <>
      <div className="todos">
        <div className="input">
          <div className="input__inputs">
            <input onChange={e=>name.current = e.currentTarget.value} maxLength="25" type="text" className="input__inputs__name" placeholder="Название" />
            <textarea onChange={e=>task.current = e.currentTarget.value} maxLength="230" className="input__inputs__task" placeholder="Задание"></textarea>
          </div>
          <button onClick={createTodo} className="input__create"><img className="input__create__img" src="./add.png"/></button>
        </div>
      </div>
      <Todos list={todos}/>
    </>);
}