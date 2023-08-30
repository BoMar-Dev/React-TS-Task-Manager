import './App.css';
import React, {useState} from 'react';

import InputField from './components/InputField';
import TaskList from './components/TaskList';

import { Todo } from './model';



const App: React.FC  = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]); // Array of a type or interface
  
  const handleThingsToDo = (e: React.SyntheticEvent) => {
    e.preventDefault()
  
    if (task) {

      setTasks([...tasks, {id: Date.now(), task: task, isDone:false }]) // Ta vad som redan är innuti tasks och lag till en task
      setTask("")
    }
    
  }

  console.log(tasks);
  


  return (
    <div className="App">
      <span className='heading'>Task-IT</span>
      <InputField task={task} setTask={setTask} handleThingsToDo={handleThingsToDo} />
      <TaskList  tasks={tasks} setTasks={setTasks}/>
   
    </div>
  );
};

export default App;










// let names: string;  // String
// let something: any; // any-type
// let age: number | string;  // Number
// let isStudent: boolean; // Boolean 
// let hobbies: string[]; // String[Array]
// let role:[number, string] //Touple of number & String

// let whoCrew : unknown; // istället för any-type


// // let printName: (name:string) => void;
// // let printName: (name:string) => never // rekommenderas om man vet att den aldrig retunerar något


// // function printName(name:string){
// //    console.log(name);
   
// // }
// // printName("Marcus")



// // type Person = {
// //   name : string;
// //   age?: number; // optional

// // }

// // let person : Person ={  
// //   name : "Marcus,",
// //   age : 99 // optional pga ? i Person.age
// // }

// // let lotsOfPeople: Person[];

// interface Human {
//   name: string ;
//   age?: number;
// }

// interface Guy extends Human  {
//   profession: string;
// }

// type X = Human & {
//   a: string;
//   b: number;
// }
 