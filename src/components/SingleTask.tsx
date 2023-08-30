import "./styles.css"

import { Todo } from "../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { useEffect, useState, useRef } from "react"


type Props = {
    task: Todo;
    tasks: Todo[];
    setTasks:  React.Dispatch<React.SetStateAction<Todo[]>>
}   

const SingleTask = ({task,tasks, setTasks}:Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTask, setEditTask] = useState<string>(task.task)
  
  const handleDone = (id:number)=>{
    setTasks(
      tasks.map((task)=>
        task.id===id ? {...task, isDone: !task.isDone}: task
      )
    );
  };


  const handleDelete = (id:number)=>{
    setTasks(tasks.filter((task)=>task.id !== id)

    );
  };


  const handleEdit = (e: React.FormEvent, id:number) => {
    e.preventDefault();
  
    setTasks(
      tasks.map((task) => (task.id ===id? {...task,task:editTask}:task))
      
    );
    setEdit(false)
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit]);




  return (
  <form className="tasks_single" onSubmit={(e)=> handleEdit(e, task.id) }>
        {edit? (
            <input value ={editTask} onChange={(e) => setEditTask(e.target.value)} className="tasks_single--text"/>
           ):   task.isDone? (
               <s className="tasks_single--text">{task.task}</s>
           ): (
            <span className="tasks_single--text">{task.task}</span>
           )}

        <div>
            <span onClick={() => {
              if(!edit && !task.isDone) {
                setEdit(!edit)
              }

            }} className="icon"> <AiFillEdit/></span>
            
            <span onClick={() => handleDelete(task.id)}className="icon"> <AiFillDelete/></span>
            
            <span onClick={() => handleDone(task.id)} className="icon"> <MdDone/></span>
        </div>

  </form>
  )
}
export default SingleTask 