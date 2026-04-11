function TaskItem({task,deleteTask,toggleTask}){

return(

<div className="task">

<div>

<input
type="checkbox"
checked={task.completed}
onChange={()=>toggleTask(task.id)}
/>

<span className={task.completed ? "completed" : ""}>
{task.text}
</span>

</div>

<button
className="delete-btn"
onClick={()=>deleteTask(task.id)}
>
Delete
</button>

</div>

);

}

export default TaskItem;