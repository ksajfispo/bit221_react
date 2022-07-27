import React from 'react'
import { useState } from 'react'
import Timer from './Timer'

function UseEffect03() {
  const [showTimer,setshowTimer] = useState(false);
  const [btn,setBtn] = useState('btn btn-info');
  const [msg, setMsg] = useState('Toggle Timer Start!'); 

  return (
    <div className='container'>
      <button className={btn}
       onClick={()=>{
        setshowTimer(!showTimer);
        setBtn(!showTimer ? 'btn btn-success' : 'btn btn-info');
        setMsg(!showTimer ? 'Toggle Timer Stop' : 'Toggle Timer Start' );
      }}>
      <i className="fa-solid fa-stopwatch"></i><span className='ml-2' />
        {msg}
        </button>
      <hr />
      {
        showTimer && <Timer />
      }
      
    </div>
  )
}

export default UseEffect03