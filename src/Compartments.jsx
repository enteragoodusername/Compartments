import { useState, useContext, createContext } from 'react'
import Timeline from './Timeline/Timeline'
import CompartmentForm from './CompartmentForm';
import TaskForm from './TaskForm';
import HeaderForm from './Header';

/*


const App = () => {
  const [comparts, setComparts] = useState([{ name: "General", tasks: [], id: 1 }]);
  const [message, setMessage] = useState("")


  let i = 0;

  return (
    <>
      <HeaderForm />
      <MessageContext.Provider value={setMessage}>
        <div className='content'>
          <TaskForm comparts={comparts} setComparts={setComparts} />
          {comparts.map((compart) => <Compartment comparts={comparts} key={i++} compart={compart} setComparts={setComparts} />)}
          <CompartmentForm comparts={comparts} setComparts={setComparts} />
          <Timeline comparts={comparts} />
        </div>
        <NotifMessage message={message} setMessage={setMessage} />
      </MessageContext.Provider>
    </>)
}

export default App
*/
