import React from "react";
import Button from "./Button";

function AllButtons(props) {
  return (
    <div onClick={props.onClick}>
      <div className="grid">

        <Button name='C'/>
        <Button name='('/>
        <Button name=')'/>
        <Button name='%'/>
        <Button name='/'/>

        <Button name='√'/>
        <Button name='7'/>
        <Button name='8'/>
        <Button name='9'/>
        <Button name='*'/>

        <Button name='^'/>
        <Button name='4'/>
        <Button name='5'/>
        <Button name='6'/>
        <Button name='-'/>

        <Button name='!'/>
        <Button name='1'/>
        <Button name='2'/>
        <Button name='3'/>
        <Button name='+'/>

        <Button name='π'/>
        <Button name='0'/>
        <Button name='.'/>
        <Button name='='/>
      </div>
    </div>
  )
}

export default AllButtons