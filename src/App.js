import {useState, useRef} from 'react'
import Todos from './Todos'
export default function App() {
  const [Update, toUpdate] = useState(true)
  const name = useRef(null)
  const task = useRef(null)
  function createTodo() {
    if(name.current != null && task.current != null){
      let inputs = [document.querySelector('input'), document.querySelector('textarea')]
      Array.from(inputs).map(el=>el.value='')
      let key = Math.random()*1000
      localStorage.setItem(key, JSON.stringify({name: name.current, task: task.current}))
      toUpdate(!Update)
      name.current = null
      task.current = null
    }
    else return false
  }
  return (
    <>
      <div className="todos">
        <div className="input">
          <div className="input__inputs">
            <input onChange={e=>{name.current = e.currentTarget.value}} maxLength="25" type="text" className="input__inputs__name" placeholder="Название" />
            <textarea onChange={e=>{task.current = e.currentTarget.value}} maxLength="230" className="input__inputs__task" placeholder="Задание"></textarea>
          </div>
          <div className='input__buttonContent'>
            <button onClick={createTodo} className="input__create"><img className="input__create__img" src="./add.png" alt='+'/></button>
          </div>
        </div>
      </div>
      <Todos />
    </>);
}