import './ToDoList.css'
import {useState} from 'react'
import {v4 as uuid} from 'uuid';
export default function ToDoList(){
    let [list,setList]=useState([])
    let [task,setTask]=useState("")
    let trackTask=(event)=>{
        setTask(event.target.value);
    }
    let addTask=()=>{
        if(task.trim()==="") return;
        setList([...list,{id:uuid(),Task:task,isDone:false}])
        setTask("")
    }
    let deleteTask=(removeId)=>{
        setList((list)=>{
           return list.filter((tasks)=>tasks.id!==removeId)
        })
    }
    let taskComplete=(id)=>{
        setList((list)=>{
            return list.map((tasks)=>{
                if(tasks.id===id){
                    return{
                        ...tasks,
                        isDone:true
                    }
                }else{
                    return tasks
                }
            })
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
            {list.map((tasks,index)=>{
                return(
                    <li 
                    key={tasks.id} 
                    ><span style={{textDecoration: tasks.isDone?"line-through":"none"}}>{index+1}. {tasks.Task} </span>
                    <span>&nbsp;&nbsp;&nbsp;<button  onClick={()=>deleteTask(tasks.id)}>Delete</button>&nbsp;&nbsp;&nbsp;<button  onClick={()=>taskComplete(tasks.id)}>Completed</button></span>
                    </li>
                    
                ) 
            })}
        </ul>

       </div>
    )
}