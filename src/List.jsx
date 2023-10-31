import React from "react";

const List = (Props) =>{
    return(
        <>
        <div className="Listdiv">
      <i className="fa-solid fa-circle-xmark" onClick={()=>{
        Props.dltClk(Props.id)
      }}> </i> 
      <li className="ListItm">{Props.txt}</li>
        </div>
        </>

      ) 
}

export default List;