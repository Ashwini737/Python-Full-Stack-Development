import TaskItem from "./TaskItem";

function TaskList({tasks,deleteTask,toggleTask}){

if(tasks.length===0){
return <p className="empty">No tasks available</p>;
}

return(

<div>

{tasks.map(task=>(
<TaskItem
key={task.id}
task={task}
deleteTask={deleteTask}
toggleTask={toggleTask}
/>
))}

</div>

);

}

export default TaskList;