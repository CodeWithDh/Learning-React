import './ToDoList.css'
import {useState} from 'react'
export default function ToDoList(){
    let [list,setList]=useState([])
    let [task,setTask]=useState("")
    let trackTask=(event)=>{
        setTask(event.target.value);
    }
    console.log(list);
    let addTask=()=>{
        if(task.trim()==="") return;
        setList([...list,task])
        setTask("")
    }
    let deleteTask=(removeIndex)=>{
        setList((list)=>{
           return list.filter((_,index)=>index!==removeIndex)
        })
    }
    return (
       <div className="todoList">
        <h2>To Do List</h2>
        <hr />
        <input onChange={trackTask} value={task} type="text" placeholder="Enter Tasks..." onKeyDown={(e)=>{if(e.key==='Enter'){addTask()}}} />
        <br /><br />
        <button onClick={addTask}>Add</button>
        <br /><br />
        <hr />
        <h3>Task To do: </h3>
        <ul>
            {list.map((task,index)=>{
                return(
                    <li key={index}>{index+1}. {task} 
                    <span>&nbsp;&nbsp;&nbsp;<button  onClick={()=>deleteTask(index)}>Delete</button></span>
                    </li>
                    
                ) 
            })}
        </ul>

       </div>
    )
}