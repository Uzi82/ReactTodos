import { useState } from 'react'
export default function Todos() {
    const todos = []
    const [Update, toUpdate] = useState(true)
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i)
        let content = localStorage.getItem(key).split(key)
        todos.push({key: key, name: content[0], task: content[1]})
    }
    console.log(todos)
    let render = []
    todos.map((el)=>{
        render.push(
            <>
                <li className="todos" key={el.key}>
                    <div className="listElement">
                        <div className="listElement__elements">
                            <h1 className="listElement__elements__name">{el.name}</h1>
                            <p className="listElement__elements__task">{el.task}</p>
                        </div>
                        <div className='DeleteButtonContent'>
                            <button onClick={()=>{localStorage.removeItem(el.key); toUpdate(!Update)}}><img className='DeleteButton' src='./delete.png'/></button>
                        </div>
                    </div>
                </li>
            </>
        )
    })
    return(
        <>
            <ul>{render}</ul>
            <div className={'ClearBtnContent'}>
                <button className={'ClearBtn'} onClick={()=>{localStorage.clear(); toUpdate(!Update)}}>Clear</button>
            </div>
        </>)
}
