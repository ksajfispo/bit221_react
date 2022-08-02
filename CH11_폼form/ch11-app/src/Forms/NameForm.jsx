import React from 'react'
import { useState } from 'react'

function NameForm() {
  const [value,setValue] = useState('');

  const handleSubmit = (e)=>{
    alert('정보 보기'+value);
    e.preventDefault();
  }
  /**
   * 입력 값 변경시 호출(변경된 value 저장) 
   */
  const handleChange = (e)=>{
    setValue(e.target.value);
    if(e.target.value.length > 8){
      alert('8자');
      setValue('');
      return ;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h4 className='mt-3'>Name : </h4>
          <input className='form-control' name='name' id='name' value={value} type='text' placeholder='input your name'
          onChange={handleChange}
          />
          </label>
          <button className='btn btn-success ms-1' type='submit'>Submit</button>  
      </form>
    </div>
  )
}

export default NameForm