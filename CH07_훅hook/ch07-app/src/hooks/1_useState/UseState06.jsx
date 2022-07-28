import React from 'react'
import { useState } from 'react'

function UseState06() {

  const [time,setTime] = useState(1);

  const aa = ()=>{
    if(time >= 24){
      setTime(1);
    }else{
      setTime(time+1);
    }
  }

  return (
    <div>
      <span>현재 시각 : {time}시</span>
      <button onClick={aa}>ㅇㄹㄷ</button>
    </div>
  )
}

export default UseState06