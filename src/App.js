import React, { useState } from "react";
import './index.css';
import List from "./List";
// import AccessAlarmsRoundedIcon from '@material-ui/icons/AccessAlarmsRounded';

const App = () => {

const [item, utdItem]= useState();
const [di, udi]= useState([]);

const cng = (val) =>{
  utdItem(val.target.value)
}

const dis = () =>{
  udi((old)=>{
    return [...old, item]
  })
  utdItem("")
}

const dltItm = (id) =>{
  console.log("Deleted");
  udi((old)=>{
    return old.filter((arr, index)=>{
      return index !== id;
    })
  })
}
  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1>
            toDoList
          </h1>
          <div className="inpDiv">
          <input type="text" className="inp" placeholder="Enter Items To Be Added" onChange={cng} value={item}/>
          <button className="addBtn" onClick={dis}>
            +
          </button>
          {/* <AccessAlarmsRoundedIcon /> */}
</div>
          <ol>
          {
            di.map((val, index)=>{
              return <List txt={val}
                key={index}
                id={index}
                dltClk={dltItm}
              />
            })
          }
          </ol>
        </div>
      </div>
    </>
  )
}


export default App; 