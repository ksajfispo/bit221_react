import React from 'react'
import { useState } from 'react'

function UseState05() {
  const [input,setInput] = useState('');
  const [name,setName] = useState([]);

  const aa =(e)=>{
    setInput(e.target.value);
  }

  const ss = ()=>{
    setName((cc)=>{
      return [...cc, input + '\n']
    })
  }


  return (
    <div className='container'>
      <input type='text' placeholder='이름 입력' onChange={aa}/>
      <button onClick={ss}>upload</button>
      <textarea rows='10' defaultValue={name.toString().split(',').join('')}></textarea>
    </div>
  )
}

export default UseState05