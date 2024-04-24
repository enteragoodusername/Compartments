import { useState, useContext, createContext,useEffect } from 'react'
import "./styles.css"
import Timeline from './Timeline/Timeline'
import { ColorPicker } from 'primereact/colorpicker';
import axios from 'axios';
export const MessageContext = createContext(()=> {});

const Header = () =>{
  return (
    <div className='header'>
      Compartments
    </div>
  );
}

const NotifMessage = ({message,setMessage}) => {
  const pressedButton = () =>{
    setMessage("");
  }
  if (message != ""){
    return (
    <div className='notifMessage'>
      <p>{message}</p>
      <input type='button' value='x' onClick={ pressedButton}/>
    </div>)
  }
}
const Task = ({task, setComparts, comparts}) =>{
  
  const [showDesc,setShowDesc] = useState(false);
  const onChange = () => {
    const compartIndex = comparts.findIndex((compartment) => compartment._id === task.compartID );
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
  console.log(comparts)
  return (
    <div className="module compartment" style={{backgroundColor: compart.color}}>
    
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
  const setMessage = useContext(MessageContext)
  const [compFormText, setCompText] = useState("");
  const [color, setColor] = useState("ffffff")
  const addComparts = (event) =>{
    event.preventDefault();
    if (compFormText == ""){
      setMessage("Error: Compartments need to include a name");
      return
    }
    let compart = {
      name: compFormText,
      color: `#${color}`,
      tasks: []

    }
    let sendVal = {comparts: comparts.concat(compart)} 
    console.log(sendVal)
    axios.post("/api/comparts",sendVal).then((response) => {
      console.log(response)
      setComparts(response.data);
      setCompText("");
    }).catch(()=>{console.log("error")})
    console.log("hello")
    setComparts(comparts.concat(compart));
   
  }
  const regex = /[^1-9a-fA-F]+/g;
  return (
    <form className='module compartForm' onSubmit={addComparts}>
      <label>Add compartment: </label>
      <input className='input' value={compFormText} onChange={(event) => setCompText(event.target.value)} />
      <ColorPicker format='hex' value={color} onChange={(e) => setColor(e.value)}/>
      <input className='colorForm' value={`#${color}`} onChange={(event) => setColor(event.target.value.replace(regex,'').substring(0,6))}/>
      <input type='submit' value="Submit"/>
    </form>
  );
}


const TaskForm = ({ comparts, setComparts}) => {
  const setMessage = useContext(MessageContext)
  
  const [newName, setFormName] = useState("");
  const [newDesc, setFormDesc] = useState("");
  const [selectedCompart, setSelectedCompart] = useState(0)
  
  const addTasks = (event) =>{
    event.preventDefault();
    let compartIndex
    if (selectedCompart === 0){
      compartIndex = 0;
    }
    else{
      compartIndex = comparts.findIndex((compart) =>compart._id == selectedCompart);
    }
    console.log("Info:" + compartIndex);
    console.log("Selected"  + selectedCompart)
    console.log(comparts)
    if (newName == ""){
        setMessage("Error: Tasks need to include a name");
        return
    }
    let task = {
      name: newName,
      desc: newDesc,
      id: comparts[compartIndex].tasks.length +1,
      finished: false,
      compartID: comparts[compartIndex]._id
    }
    
    let newCompart = {
      ...comparts[compartIndex],
      tasks: comparts[compartIndex].tasks.concat(task)
    }
    let newComparts = [...comparts];
    newComparts[compartIndex] = newCompart;
    setFormName("");
    setFormDesc("");
    const sendVal = {comparts: newComparts}
    axios.post("/api/comparts",sendVal).then((response) => {
    console.log(response)
     setComparts(response.data);
     setCompText("");
    }).catch(()=>{console.log("error")})
    
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
      <select onChange={(selected) => {
        console.log(selected.target.value)
        setSelectedCompart(selected.target.value)}}>
        {comparts.map((compart) => <option key={Math.random() * 100000} value={compart._id}>{compart.name}</option>)}
      </select>
      <br/>
      <input type='submit' value="Add Task"/>
    </form>
  )
}

const Compartments  = () => {
  const [comparts, setComparts] = useState([]);
  const [message, setMessage] = useState("")
  useEffect(()=>{axios.get("/api/comparts").then(result => {
    console.log(result)
    setComparts(result.data)
  })},[])

  let i =0;

  return (<>

  <Header/>
  <MessageContext.Provider value={setMessage}>
  <div className='content'>
    <TaskForm comparts={comparts} setComparts={setComparts}/>
    {comparts.map((compart) => <Compartment comparts={comparts} key={i++} compart={compart} setComparts={setComparts}/>)}
    <CompartmentForm comparts={comparts} setComparts={setComparts}/>
    <Timeline comparts={comparts}/>
  </div>
  <NotifMessage message={message} setMessage={setMessage}/>
  </MessageContext.Provider>
  </>)
}

export default Compartments
