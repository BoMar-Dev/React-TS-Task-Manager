import {useRef} from "react";
import "./styles.css"

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleThingsToDo: (e: React.SyntheticEvent) => void;
};

const InputField = ({task, setTask, handleThingsToDo}: Props) => {
const inputRef = useRef<HTMLInputElement>(null);
  
    return (
    <form className="input" onSubmit={(e)=> {
         handleThingsToDo(e)
         inputRef.current?.blur()
         }}>
    
        <input 
            ref = {inputRef}
            className="input_box" 
            type="input"
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            />
        <button className="input_submit" type="submit"> O K </button>    
        
    </form>
  );
};
export default InputField;