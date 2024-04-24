import React, { useState, createContext } from "react";
import './Signup.css';
import HeaderForm from "./Header";
import TaskForm from "./TaskForm";
import CompartmentForm from "./CompartmentForm";
import Compartment from "./Compartment";

export const MessageContext = createContext('');


function Homepage() {
    const [message, setMessage] = useState('')
    const [compartmentsFormText, setCompartmentsFormText] = useState("");
    const [compartments, setCompartment] = useState([{ name: "None", tasks: [], id: 1 }]);
    const [formName, setFormName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCompartment, setSelectedCompartment] = useState(1);

    let i = 0;

    /*
    <TaskForm compartments={compartments} setComparts={setCompartment}/>
    {compartments.map((compartment) => <Compartment compartments={compartment} key={++i} compartment={compartment} setCompartment={setCompartment}/>)}
                        <CompartmentForm compartmentsFormText={compartmentsFormText} setCompText={setCompartmentsFormText} compartments={compartments} setComparts={setCompartment}/>
    
    */
    console.log("before taskform, compartments : " + compartments);

    return (
        <MessageContext.Provider value={message}>
            <div className="bg-gradient-to-r from-purple-400 to-red-400 h-max">
                <div className="container flex space-x-3">
                    <div className="min-h-screen"></div>
                    <div className="relative p-20">
                        <div className="absolute inset-0"></div>
                        <div className="relative z-10 bg-white p-8 mx-30 shadow-lg rounded-lg text-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4 px-32">Creation Form</h1>
                            <div className="text-gray-600">
                                <HeaderForm />
                                <TaskForm compartments={compartments} setCompartments={setCompartment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MessageContext.Provider>
    );
}

export default Homepage;