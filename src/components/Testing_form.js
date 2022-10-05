import React from 'react'
import { useState } from 'react'
import Widget from './Widget';

export default function Testing_form() {
  const[name,setName] = useState("");
  const handleChange = (e) =>{
    setName(e.target.value);
  }
  return (
    <>
    <div>Testing_form</div>
    <Widget name = {setName} />
    </>
  )
}
