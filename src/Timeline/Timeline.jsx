import {useState} from 'react'
import "./Timeline.css"

const SelectionChoice = ({compart, selCompart, changeSelCompart}) =>{
    let isClicked = compart.id == selCompart
    let shadowStyle = isClicked ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" : ""
    const onClick = () =>{
        if (isClicked){
            changeSelCompart(null)
        }
        else{
            changeSelCompart(compart.id)
        }
        
    }
    return(
        <div className={`selection`} onClick={onClick} style={{backgroundColor: compart.color, boxShadow: shadowStyle}}>
            {compart.name}
        </div>
    )
}
const CompartSelector = ({comparts, selCompart, changeSelCompart}) =>{
    return (<div className='selectFlex'>
        {comparts.map((compart) => <SelectionChoice compart={compart} selCompart={selCompart} changeSelCompart={changeSelCompart}/>)}
    </div>)
}
const QuarterBox = ({comparts,selCompart}) => {
    const [compartID, setCompartID] = useState(null)
    const foundVal= comparts.find((compart) => compart.id == compartID)
    const backgroundColor = foundVal ? foundVal.color : ""
    const onClick = () => {
        if (selCompart == compartID){
            setCompartID(null)
        }
        else{
        setCompartID(selCompart)
        }
    }
    return(
    <div className='quarter' onClick={onClick} style={{backgroundColor:backgroundColor}}>
        {foundVal ? foundVal.name: ""}
    </div>
    )
}
const Timeline = ({comparts}) =>{
    const [selCompart, changeSelCompart] = useState(null)
    const time = ['1am','2am','3am','4am','5am','6am','7am','8am','9am','10am','11am','12am',
                  '1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12pm']
    
    return (
    <>
    <CompartSelector comparts={comparts} selCompart={selCompart} changeSelCompart={changeSelCompart}/>
    <div className='Timeline'>
        {time.map((hour) => <div className='hourBox'>{hour}</div>)}
        {time.map((hour) => <div className='contentBox'>
            {[1,2,3,4].map((quarter) => <QuarterBox comparts={comparts} selCompart={selCompart}/>)}
        </div>)}
    </div>
    
    </>
    )
}
export default Timeline