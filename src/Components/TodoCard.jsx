import { useState } from 'react'
const TodoCard = ({title,note="",id,done, deleteTodo ,markDone,  editTodo})=>
{
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    const [editNote, setEditNote] = useState(note)

    const handleSave = () => {
  if (editTitle.trim() === "") {
    alert("Title is required")
    return
  }

  editTodo(id, editTitle, editNote)
  setIsEditing(false)
}
    return(<div className="todo-card">

   {isEditing ? (
  <>
  <button onClick={handleSave}>Save</button>
    <input
      value={editTitle}
      onChange={(e) => setEditTitle(e.target.value)}
    />

    <input
      value={editNote}
      onChange={(e) => setEditNote(e.target.value)}
    />
  </>
) : (
  <>
    <h2 className={done ? "done" : ""}>{title}</h2>
    <p>{note}</p>
    
  </>
)}
    
    <button onClick={()=> alert(`${title}\n${note}`)}>open</button>
    <button onClick={()=> markDone(id)}>Mark done</button>
    <button onClick={() => setIsEditing(true)}>Edit</button>
    <button onClick={() => deleteTodo(id)}>Delete</button>    
    </div>
    )
}
export default TodoCard
