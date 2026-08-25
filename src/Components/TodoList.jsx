import TodoCard from './TodoCard'
const TodoList = ({todos, deleteTodo,markDone,editTodo}) => {

    if(!todos || todos.length===0){
        return <p>No things todo</p>
    }

    return(<div className="todo-list">
       {todos.map((todo)=>(
        <TodoCard
        key={todo.id}
        id={todo.id}
        title ={todo.title}
        note={todo.note}
        done={todo.done}
        deleteTodo={deleteTodo}
        markDone={markDone}
        editTodo={editTodo}
        />
       )
    )}
    </div>
    )
}
export default TodoList
