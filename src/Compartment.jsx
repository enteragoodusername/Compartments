import React from "react";
import { useState } from "react";

const Compartment = ({compartment, setComparts, compartments}) => {
    const [showTasks, setShowTasks] = useState(true);
    return (
      <div className="module compartment" style={{backgroundColor: compartment.color}}>
      
      <h2>
        {compartment.name + " "}
        { compartment.tasks.length > 0? <input onClick={() => setShowTasks(!showTasks)} type='button' value={showTasks? "-" : "+"} /> : <></>}
        </h2>
      <div className='wrapper' style={{gridTemplateRows: showTasks ? "1fr":"0fr"}}>
        <div className='taskList'>
        {compartment.tasks.map((task) =><Task compartments={compartments} task={task} setComparts={setComparts}/>)}
        </div>
      </div>
  
      </div>
    );
}

export default Compartment;
