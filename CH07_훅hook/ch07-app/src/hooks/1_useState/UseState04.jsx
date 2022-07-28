import React from 'react'
import {useState} from 'react'
const UseState04 = ()=> {

  const [time, setTime] = useState(1);

  const Upd = ()=>{
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
      <span>현재 시각 : {time}시</span>
      <button onClick={Upd}>Upload</button>
    </div>
  )
}

export default UseState04