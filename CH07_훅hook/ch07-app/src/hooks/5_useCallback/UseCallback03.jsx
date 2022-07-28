import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Box from './Box'

function UseCallback03() {
  const [size, setSize] = useState(100);
  const [dark, setDark] = useState(false);

  /*
  const createBox =()=>{
    return {
      backgroundColor : 'green',
      width : `${size}px`,
      height : `${size}px`,
    }
  }
*/
  const createBox = useCallback(()=>{
    return {
      backgroundColor : 'green',
      width : `${size}px`,
      height : `${size}px`,
    }
  },[size]);


  return (
    <div style={{background : dark ? '#eee' : 'grey'}} >
      <button className='btn btn-info mb-2' onClick={()=>{setDark(!dark)}}>Change</button>
      <input  className='form-control' type={'number'} value={size}
      onChange={(e)=>setSize(e.target.value)}/>

      <br />
      <Box createBox={createBox}/>
    </div>
  )
}
  
export default UseCallback03