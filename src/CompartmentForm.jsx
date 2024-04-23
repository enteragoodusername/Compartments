import React from "react";

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
        tasks: [],
        id: comparts.length + 1
      }
      setComparts(comparts.concat(compart));
      setCompText("");
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

export default CompartmentForm;
