import React, { useState, useContext } from "react";
import { MessageContext } from "./Homepage";

const TaskForm = ({ compartments, setCompartments}) => {

    console.log(compartments)

    const setMessage = useContext(MessageContext)
    
    const [newName, setFormName] = useState("");
    const [newDesc, setFormDesc] = useState("");
    const [selectedCompartmentID, setSelectedCompartmentID] = useState(1)
  
    const addTasks = (event) =>{
      event.preventDefault();
  
      let compartmentIndex = compartments.findIndex((compartment) => compartment.id == selectedCompartment);
      console.log(selectedCompart);
      if (newName == ""){
          setMessage("Error: Tasks need to include a name");
          return
      }
      let task = {
        name: newName,
        desc: newDesc,
        id: compartments[compartmentIndex].tasks.length + 1,
        finished: false,
        compartID: compartments[compartIndex].id
      }
      
      let newCompartment = {
        ...compartments[compartIndex],
        tasks: compartments[compartIndex].tasks.concat(task)
      }
      let newCompartments = [...compartments];
      newCompartments[compartIndex] = newCompartment;
      setFormName("");
      setFormDesc("");
      setCompartments(newcompartments);
      
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
          {compartments.map((compartment) => <option key={Math.random() * 100000} value={compartment.id}>{compartment.name}</option>)}
        </select>
        <br/>
        <input type='submit' value="Add Task"/>
      </form>
    )
}

export default TaskForm;