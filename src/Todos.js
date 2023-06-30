export default function Todos(props) {
    const todos = Array.from(props.list).map(prop=>{
        if(prop.name === null || prop.task === null) return false
        return(
        <>
            <div className="todos" key={prop.id}>
                <div className="listElement">
                    <div className="listElement__elements">
                        <h1 className="listElement__elements__name">{prop.name}</h1>
                        <p className="listElement__elements__task">{prop.task}</p>
                    </div>
                </div>
            </div>
        </>)
    })
    return(todos);
}