import React, { useEffect } from 'react'
import { useState } from 'react'

function Box(props) {

  const [style, setStyle] = useState({}); // 빈 오브젝트로 초기화

  useEffect(()=>{
    console.log('asd')
    setStyle(props.createBox);
  },[props.createBox]);

  return (
    <div style={style} >
      
    </div>
  )
}

export default Box