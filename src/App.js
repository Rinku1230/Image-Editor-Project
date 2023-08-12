import logo from './logo.svg';
import './App.css';


// project-1

import React, { useState } from "react";
import './App.css';

function App() {
  const [first, setFirst] = useState("")
  const [color, setColor] = useState("white")


  const changeHendle = (e) => {
    setFirst(e.target.value)
  }

  function upper() {
    setFirst(first.toUpperCase())
  }

  function Lower() {
    setFirst(first.toLowerCase())
  }
  function reset() {
    setFirst("")
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(first)
    const data = document.getElementById("copy")

    data.select()

  }

  const cut = () => {
    navigator.clipboard.writeText(first)
    setFirst("")

  }

  const DUPLICATE = () => {
    setFirst(first + first)

  }


  const ALLremoveSpace = () => {
    setFirst(first.trim().split(/ +/).join(""))
  };

  // const ALLremoveSpace = () => {
  //   setFirst(first.trim().split(/+/).join(""))
  // }

  const removeSpace = () => {
    setFirst(first.trim().split(/ +/).join(" "))
  };



  const togglemode = () => {
    if (color == "white") {
      setColor("black")
    } else {
      setColor("white")
    }
  }




  return (
    <>

      <div style={{ background: color, height: "100vh", flex: "display" }}>
        <textarea className="rinku" id="copy" value={first} cols={170} rows={12} onChange={changeHendle}></textarea>
        <button onClick={upper} className="button">Conver Upper case</button>
        <button onClick={Lower} className="button">Conver Lower case</button>
        <button onClick={reset} className="button">Clear</button>
        <button onClick={copyToClipboard} className="button">CopyText</button>
        <button onClick={cut} className="button">Cut</button>
        <button onClick={DUPLICATE} className="button">Duplicate</button>
        <button onClick={removeSpace} className="button">RemoveSpace</button>
        <button onClick={ALLremoveSpace} className="button">ALL Remove Space</button>


        <div className="ram">
          <h1>Total Charactor is: {first.length}</h1>


          <h1>Total word:{first.split(" ").filter((e) => e !== "").length}</h1>
          <h1>par min speed:{first.split(" ").filter((e) => e !== "").length * 0.08}</h1>

          <div class="form-check form-switch" >
            <input class="form-check-input" type="checkbox" onClick={togglemode} id="flexSwitchCheckDefault" />
            <label class="form-check-label  text-light" for="flexSwitchCheckDefault" onClick={togglemode}>Enable dark mode</label>

          </div>


        </div>
      </div>
    </>
  );
}
export default App





