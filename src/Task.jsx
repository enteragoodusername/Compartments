import React from "react";

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

export default Task;