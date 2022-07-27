import React from 'react'
import { useState } from 'react'

const UseState01 = () => {

  const [time, setTime] = useState(1); // [state, setState]

  const handleClick = ()=>{
    if(time >= 24){
      setTime(1);
    }
      else  
      {
        setTime(time+1);
      }
  }

  
  return (
    <div>
    <span>현재 시각 : {time}시 </span>
    <button className='btn btn-danger' onClick={handleClick}>Update</button>

    </div>
  )
}

export default UseState01