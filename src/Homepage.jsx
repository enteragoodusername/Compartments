import React, { useState } from "react";
import './Signup.css';
import HeaderForm from "./Header";
import TaskForm from "./TaskForm";
import CompartmentForm from "./CompartmentForm";

function Homepage() {
    const [compFormText, setCompText] = useState("");
    const [comparts, setComparts] = useState([{name: "None", tasks:[], id:1}]);
    const [newName, setFormName] = useState("");
    const [newDesc, setFormDesc] = useState("");
    const [selectedCompart, setSelectedCompart] = useState(1);

    let i = 0;

    return (
        <div className="flex justify-center m-3 p-3">
            <div className="bg-slate-200 m-3 p-3 font-sans max-w-xl">
                <HeaderForm/>
                <div className='content'>
                    <TaskForm comparts={comparts} setComparts={setComparts}/>
                    {comparts.map((compart) => <Compartment comparts={comparts} key={++i} compart={compart} setComparts={setComparts}/>)}
                    <CompartmentForm compFormText={compFormText} setCompText={setCompText} comparts={comparts} setComparts={setComparts}/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;