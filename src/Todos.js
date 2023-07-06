import { useState } from 'react'
export default function Todos() {
    const todos = []
    const [Update, toUpdate] = useState(true)
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i)
        let content = JSON.parse(localStorage.getItem(key))
        todos.push({key: key, name: content.name, task: content.task})
    }
    console.log(todos)
    let render = []
    render = todos.map((el)=>{
        return(
            <>
                <li className="todos" key={el.key}>
                    <div className="listElement">
                        <div className="listElement__elements">
                            <h1 className="listElement__elements__name">{el.name}</h1>
                            <p className="listElement__elements__task">{el.task}</p>
                        </div>
                        <div className='DeleteButtonContent'>
                            <button onClick={()=>{localStorage.removeItem(el.key); toUpdate(!Update)}}><img className='DeleteButton' src='./delete.png' alt='Del'/></button>
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
