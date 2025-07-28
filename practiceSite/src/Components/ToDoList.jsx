import './ToDoList.css'
export default function ToDoList(){
    return (
       <div className="todoList">
        <h2>To Do List</h2>
        <hr />
        <input type="text" placeholder="Enter TasK..." />
        <br /><br />
        <button>Add</button>
        <br /><br />
        <hr />
        <h3>Task To do: </h3>
        <ul>

        </ul>

       </div>
    )
}