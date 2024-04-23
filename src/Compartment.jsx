import React from "react";

const Compartment = ({compart, setComparts, comparts}) => {
    const [showTasks, setShowTasks] = useState(true);
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

export default Compartment;
