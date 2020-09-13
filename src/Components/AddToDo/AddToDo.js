import React, { useState} from 'react';
import "./AddToDo.scss"
import ShowToDo from '../ShowToDo/ShowToDO';

const AddToDo =()=>{
    const [currentToDo,setCurrentTodo] = useState("")
    const [toDoList,setToDoList] = useState(localStorage.getItem("toDo")?JSON.parse(localStorage.getItem("toDo")):null) 
    const addToDoHandler = (event)=>{
        const target = event.target
        setCurrentTodo(target.value)
    }
    const rememberTodo=()=>{
        const todo = {task:currentToDo,isComplete:false}
        let newToDolist = []
        if(localStorage.getItem("toDo")){
            newToDolist = [...JSON.parse(localStorage.getItem("toDo")),todo]
            localStorage.setItem("toDo",JSON.stringify(toDoList))
        }
        else{
            newToDolist =[todo]
            localStorage.setItem("toDo",JSON.stringify([todo]))
            
        }
        setToDoList(newToDolist)
    }
    return(
       <>
       <div className="add-todo">
           <input type="text" name="to-do" placeholder="Enter your todo here" value={currentToDo} onChange={(e)=>addToDoHandler(e)} />
           <button onClick={()=>rememberTodo()}> + Add</button>  
       </div>
       <ShowToDo toDoList={toDoList}/>
       </>
    )
}

export default AddToDo;