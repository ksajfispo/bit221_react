import React, { useRef } from 'react'
import { useEffect } from 'react';

function UseRef01() {

  const inputRef = useRef();
  const imgRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  const ButtonClick = () =>{
    /*alert(`안녕 ${inputRef.current.value}` )*/
    imgRef.current.style.visibility = 'visible';
  }

  return (
    <div className='container'>
      <img src='logo192.png' ref={imgRef} style={{width:'100px', marginBottom:'30px', visibility:'hidden'}} alt=''/> 
      {/*  */ }
      <div className='d-flex'>
        <input ref={inputRef} className='form-control w-50' placeholder='username' type={'text'}/>
        <button className='btn btn-info ml-3' onClick={ButtonClick}>로그인</button>
      </div>
    </div>
  )
}

export default UseRef01