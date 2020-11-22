import React from "react"
import Button from "./Button";

function HistDelBtn(props) {
  return (
    <div onClick={props.onClick}>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px 0 20px'}}>
        <Button name='HISTORY' history={props.history}/>
        <Button name='DELETE'/>
      </div>
    </div>
  )
}

export default HistDelBtn