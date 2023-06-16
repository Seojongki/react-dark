import { useState } from 'react'
import './App.css'
import { AiFillGithub } from 'react-icons/ai';


function App() {


  const [dark, setDark] = useState(false);


  return (
    <>

      <div className="tooltip">
        <button><AiFillGithub /></button>
        <span className="tooltip-text">This is a tooltip</span>
      </div>
    </>
    
  )
}

export default App
