import React, { useState } from 'react'
import Myimage from './Myimage'
import Editor from './Editor'
function App() {
  const [select, setselect] = useState("")
  return (
    <div>
      {
        select=="" ?
     
      <Myimage setselect={setselect}/>: 
      <Editor select={select} setselect={setselect} />
      
    }
    </div>
  )
}

export default App
