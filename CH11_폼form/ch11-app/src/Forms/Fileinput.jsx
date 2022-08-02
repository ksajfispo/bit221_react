import React from 'react'
import { useState } from 'react'

function Fileinput() {

  const [imgSrc, setimgSrc] = useState('');
  const handleImg =(e)=>{
    console.log(e.target.files[0]);
    setimgSrc(URL.createObjectURL(e.target.files[0]));
    console.log(imgSrc);
  }
  return (
    <>
    <div className='input-group mb-3'>
      <input type='file' accept='image/*' className='form-control' id='inputfile'
      onChange={handleImg}
      />
      <label className='input-group-text'>ㅇㅇㅇ</label>
    </div>
    <div className='preview'>
      {
        imgSrc && <img className='w-25' src={imgSrc} alt=''></img>
      }
    </div>
    </>
  )
}

export default Fileinput