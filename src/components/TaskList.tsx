import React from "react";
import "./styles.css";
import { Todo } from "../model";

import SingleTask from "./SingleTask";



interface Props {
    tasks: Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>> 
}


 const TaskList = ({tasks, setTasks}:Props) => {
  return (
    <div className="tasks">
        {tasks.map(task => (
            <SingleTask task={task} key={task.id}
                tasks={tasks}
                setTasks={setTasks}
            
            />
        ))}
    </div>
  )
}
export default TaskList