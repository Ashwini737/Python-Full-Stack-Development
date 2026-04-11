import {useState,useEffect} from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
function App(){
const [tasks,setTasks] = useState([]);
const [search,setSearch] = useState("");
const [dark,setDark] = useState(false);

useEffect(()=>{
const saved = JSON.parse(localStorage.getItem("tasks"));
if(saved) setTasks(saved);
},[]);

useEffect(()=>{
localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);

const addTask = (text)=>{
const newTask={
id:Date.now(),
text:text,
completed:false
};
setTasks([...tasks,newTask]);
};

const deleteTask = (id)=>{
setTasks(tasks.filter(t=>t.id!==id));
};

const toggleTask = (id)=>{
setTasks(tasks.map(t =>
t.id===id ? {...t,completed:!t.completed}:t
));
};

const total = tasks.length;
const completed = tasks.filter(t=>t.completed).length;
const pending = total - completed;
const progress = total===0 ? 0 : Math.round((completed/total)*100);

const filtered = tasks.filter(t =>
t.text.toLowerCase().includes(search.toLowerCase())
);

const toggleTheme = ()=>{
setDark(!dark);
document.body.classList.toggle("dark");
};

<div className="bg-animation">
<div className="circle"></div>
<div className="circle"></div>
<div className="circle"></div>
</div>
return(
<>
<div className="navbar">
<h2>TASK MANAGEMENT</h2>
<div className="nav-links">
<span><b>DASHBOARD</b></span>
<span><b>TASKS</b></span>
<button className="toggle" onClick={toggleTheme}>
{dark ? "Light" : "Dark"}
</button>
</div>
</div>
<div className="hero">
<h1>STUDENT TASK MANAGEMENT DASHBOARD</h1>
<p>
Organize your daily tasks, track your progress, and stay productive
with a clean and interactive task management dashboard built using React.
</p>
</div>

<div className="container">
<div className="cards">
<div className="card">
<h4>Total Tasks</h4>
<h2>{total}</h2>
</div>
<div className="card">
<h4>Completed</h4>
<h2>{completed}</h2>
</div>

<div className="card">
<h4>Pending</h4>
<h2>{pending}</h2>
</div>
</div>
<h4>Task Progress: {progress}%</h4>

<div className="progress">
<div
className="progress-bar"
style={{width:progress+"%"}}
></div>
</div>

<input
className="search"
placeholder="Search task..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<TaskInput addTask={addTask}/>
<TaskList
tasks={filtered}
deleteTask={deleteTask}
toggleTask={toggleTask}
/>
</div>

<div className="footer">
<h3>Productivity Dashboard</h3>
<p>Organize • Track • Achieve</p>
<div className="footer-grid">

<div>
<h4>Tasks</h4>
<p>Manage daily work</p>
</div>

<div>
<h4>Progress</h4>
<p>Track productivity</p>
</div>

<div>
<h4>React App</h4>
<p>Built using JSX Components</p>
</div>

</div>
<p style={{marginTop:"15px"}}>© 2026 Student Task Manager</p>
</div>
</>
);
}
export default App;