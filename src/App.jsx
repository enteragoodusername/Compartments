import { useState } from 'react'
import "./styles.css"
const Task = ({compart,task, setComparts, comparts}) =>{
  const onChange = () => {
    const compartIndex = comparts.findIndex((compartment) => compartment.id === compart.id );
    const newComparts = [...comparts]
    let newCompart = newComparts[compartIndex];
    let newTasks = [...newCompart.tasks]
    let taskIndex = newTasks.findIndex((aTask) => aTask.id === task.id);
    let newTask = {
      ...newTasks[taskIndex],
      finished: !newTasks[taskIndex].finished
    }
    newTasks[taskIndex] = newTask
    newComparts[compartIndex].tasks = newTasks
    setComparts(newComparts)

    console.log(comparts[compartIndex].name)
  }
  return (<>
  <p>{task.name} <input onChange={onChange} type='checkbox' checked={task.finished}/></p>
  </>)
}
const Compartment = ({compart, setComparts, comparts}) => {
  console.log(compart.name);
  return (
    <div className="compartment">
    <h2>{compart.name}</h2>
    <ul>
    {compart.tasks.map((task) =><li key={task.id}> <Task comparts={comparts} compart={compart} task={task} setComparts={setComparts}/></li>)}
    </ul>
    </div>
  );
}
const CompartmentForm = ({compFormText,setCompText, comparts, setComparts}) =>{
  const addComparts = (event) =>{
    event.preventDefault();
    let compart = {
      name: compFormText,
      tasks: [],
      id: comparts.length + 1
    }
    setComparts(comparts.concat(compart));
    setCompText("");
  }
  return (
    <form onSubmit={addComparts}>
      <label>Add compartment: </label>
      <input value={compFormText} onChange={(event) => setCompText(event.target.value)} />
      <input type='submit' value="Submit"/>
    </form>
  );
}
const TaskForm = ({text, setFormText, comparts, setComparts}) => {
  const [selectedCompart, setSelectedCompart] = useState(1)
  const addTasks = (event) =>{
    let compartIndex = comparts.findIndex((compart) =>compart.id == selectedCompart);
    console.log(selectedCompart);
    let task = {
      name: text,
      id: comparts[compartIndex].tasks.length +1,
      finished: false
    }
    event.preventDefault();
    
    let newCompart = {
      ...comparts[compartIndex],
      tasks: comparts[compartIndex].tasks.concat(task)
    }
    let newComparts = [...comparts];
    newComparts[compartIndex] = newCompart;
    setFormText("");
    setComparts(newComparts);
    console.log(newComparts);
  }
  return (
    <form onSubmit={addTasks}>
      <label>Add Task: </label>
      <br/>
      <textarea value={text} onChange={(event) => setFormText(event.target.value)} />
      <br/>
      <label>Choose Compartment to insert into:</label>
      <select onChange={(selected) => setSelectedCompart(selected.target.value)}>
        {comparts.map((compart) => <option key={Math.random() * 100000} value={compart.id}>{compart.name}</option>)}
      </select>
      <br/>
      <input type='submit' value="Submit"/>
    </form>
  )
}
const App  = () => {
  const [compFormText, setCompText] = useState("");
  const [formtext, setFormText] = useState("");

  const [comparts, setComparts] = useState([{name: "None", tasks:[], id:1}]);


  let i =0;

  return (<>
  <CompartmentForm compFormText={compFormText} setCompText={setCompText} comparts={comparts} setComparts={setComparts}/>
  <br/>
  <TaskForm text={formtext} setFormText={setFormText} comparts={comparts} setComparts={setComparts}/>
  <br/>
  {comparts.map((compart) => <Compartment comparts={comparts} key={++i} compart={compart} setComparts={setComparts}/>)}

  </>)
}

export default App
