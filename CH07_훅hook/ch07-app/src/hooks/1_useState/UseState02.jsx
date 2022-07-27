import React from 'react'
import { useState } from 'react'

function UseState02()  {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const inputChangeHandle =(e)=>{
    setInput(e.target.value);
    //console.log(input)
  }

  const UploadHandler = ()=>{
    setNames((pre)=>{
      return [...pre, input + '\n']
    });
  }

  return (
    <div className='container'>
      <div style={{display : 'flex'}}>
    <input type='text' className='form-control' placeholder='이름을 입력해주세요.' style={{width: '1500px'}}
    onChange={inputChangeHandle}
    />
      
    <button className='btn btn-danger' onClick={UploadHandler}>업로드</button>
      </div>
      <textarea className='form-control mt-3' rows={10} defaultValue={names.toString().split(',').join('')}/>
    </div>
  )
}
export default UseState02
