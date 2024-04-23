import React from "react";

const TaskForm = ({ comparts, setComparts}) => {
    const setMessage = useContext(MessageContext)
    
    const [newName, setFormName] = useState("");
    const [newDesc, setFormDesc] = useState("");
    const [selectedCompart, setSelectedCompart] = useState(1)
  
    const addTasks = (event) =>{
      event.preventDefault();
  
      let compartIndex = comparts.findIndex((compart) =>compart.id == selectedCompart);
      console.log(selectedCompart);
      if (newName == ""){
          setMessage("Error: Tasks need to include a name");
          return
      }
      let task = {
        name: newName,
        desc: newDesc,
        id: comparts[compartIndex].tasks.length +1,
        finished: false,
        compartID: comparts[compartIndex].id
      }
      
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

export default TaskForm;