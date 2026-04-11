import {useState} from "react";

function TaskInput({addTask}){

const [task,setTask] = useState("");

const handleAdd=()=>{
if(task.trim()!==""){
addTask(task);
setTask("");
}
};

return(

<div className="task-input">

<input
type="text"
placeholder="Enter task..."
value={task}
onChange={(e)=>setTask(e.target.value)}
/>

<button className="add-btn" onClick={handleAdd}>
Add Task
</button>

</div>

);

}

export default TaskInput;