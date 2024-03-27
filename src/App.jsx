import { useState, useContext } from 'react'
import "./styles.css"
const Header = () =>{
  return (
    <div className='header'>
      Compartments
    </div>
  );
}
const NotifMessage = ({message,setMessage}) => {
  return (
  <div className='notifMessage'>
    {message}
  </div>)
}
const Task = ({task, setComparts, comparts}) =>{
  const [showDesc,setShowDesc] = useState(false);
  const onChange = () => {
    const compartIndex = comparts.findIndex((compartment) => compartment.id === task.compartID );
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
  return (<div className='task'>
  
  
  <input onChange={onChange} type='checkbox' checked={task.finished}/>
    <div className='taskInfo'>
      <div>
        {" "+task.name +" "}
        { task.desc != "" ? <input onClick={() => setShowDesc(!showDesc)} type='button' value={showDesc? "-" : "+"} /> : <></>}
      </div>
      <div className='wrapper' style={{gridTemplateRows: showDesc ? "1fr":"0fr"}}>
        { task.desc != "" ?  <div className='taskDesc'>{task.desc}</div> : <></>}
      </div>
  </div>
  </div>)
}
const Compartment = ({compart, setComparts, comparts}) => {
  const [showTasks, setShowTasks] = useState(true);
  return (
    <div className="module compartment">
    
    <h2>
      {compart.name + " "}
      { compart.tasks.length > 0? <input onClick={() => setShowTasks(!showTasks)} type='button' value={showTasks? "-" : "+"} /> : <></>}
      </h2>
    <div className='wrapper' style={{gridTemplateRows: showTasks ? "1fr":"0fr"}}>
      <div className='taskList'>
      {compart.tasks.map((task) =><Task comparts={comparts} task={task} setComparts={setComparts}/>)}
      </div>
    </div>

    </div>
  );
}
const CompartmentForm = ({comparts, setComparts}) =>{

  const [compFormText, setCompText] = useState("");
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
    <form className='module compartForm' onSubmit={addComparts}>
      <label>Add compartment: </label>
      <input className='input' value={compFormText} onChange={(event) => setCompText(event.target.value)} />
      <input type='submit' value="Submit"/>
    </form>
  );
}
const TaskForm = ({ comparts, setComparts}) => {
  const [newName, setFormName] = useState("");
  const [newDesc, setFormDesc] = useState("");
  const [selectedCompart, setSelectedCompart] = useState(1)
  const addTasks = (event) =>{
    let compartIndex = comparts.findIndex((compart) =>compart.id == selectedCompart);
    console.log(selectedCompart);
    let task = {
      name: newName,
      desc: newDesc,
      id: comparts[compartIndex].tasks.length +1,
      finished: false,
      compartID: comparts[compartIndex].id
    }
    event.preventDefault();
    
    let newCompart = {
      ...comparts[compartIndex],
      tasks: comparts[compartIndex].tasks.concat(task)
    }
    let newComparts = [...comparts];
    newComparts[compartIndex] = newCompart;
    setFormName("");
    setFormDesc("");
    setComparts(newComparts);
    
  }
  return (
    <form className='module taskForm' onSubmit={addTasks}>
      <label>Add Task Name: </label>
      <input className='input' value={newName} onChange={(event) => setFormName(event.target.value)} />
      <br/>
      <label>Add Task Description (Optional)</label>
      <br/>
      <textarea className='input descForm' value={newDesc} onChange={(event) => setFormDesc(event.target.value)}/>
      <br/>
      <label>Choose Compartment to insert into:</label>
      <select onChange={(selected) => setSelectedCompart(selected.target.value)}>
        {comparts.map((compart) => <option key={Math.random() * 100000} value={compart.id}>{compart.name}</option>)}
      </select>
      <br/>
      <input type='submit' value="Add Task"/>
    </form>
  )
}
const App  = () => {
  const [comparts, setComparts] = useState([{name: "General", tasks:[], id:1}]);
  const [message, setMessage] = useState("")


  let i =0;

  return (<>

  <Header/>
  <div className='content'>
    <TaskForm comparts={comparts} setComparts={setComparts}/>
    {comparts.map((compart) => <Compartment comparts={comparts} key={++i} compart={compart} setComparts={setComparts}/>)}
    <CompartmentForm comparts={comparts} setComparts={setComparts}/>
  </div>
  <NotifMessage message={message} setMessage={setMessage}/>
  </>)
}

export default App
