import {useState, useRef} from 'react'
import Todos from './Todos'
export default function App() {
  const [Update, toUpdate] = useState(true)
  const name = useRef(null)
  const task = useRef(null)
  function createTodo() {
    let inputs = [document.querySelector('input'), document.querySelector('textarea')]
    Array.from(inputs).map(el=>el.value='')
    let key = Math.random()*1000
    localStorage.setItem(key, `${name.current}${key}${task.current}`)
    toUpdate(!Update)
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
            <button onClick={createTodo} className="input__create"><img className="input__create__img" src="./add.png"/></button>
          </div>
        </div>
      </div>
      <Todos />
    </>);
}