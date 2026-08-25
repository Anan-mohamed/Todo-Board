import { useState } from 'react'

const AddATodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const handleAdd=() =>{
    if(title.trim()===""){
    alert("Title is required")
    return
    }
    else{
        addTodo(title,note)
}
    }
    return(<div className="add-todo">
    <h1>Add a todo</h1>
    <div className="form-field">
        <div className="form-field">
    <label>Title</label></div>
    <input type="text" 
    placeholder =" e.g review React Props"
    value={title}
    onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div className="form-field">
     <label>Note (optional)</label>
    <input type="text" 
    placeholder =" A short reminder"  
    value={note}
    onChange={(e) => setNote(e.target.value)}/>
    </div>
    <button onClick={handleAdd}> Add todo</button> 
    
    </div>
    )
}
export default AddATodo
