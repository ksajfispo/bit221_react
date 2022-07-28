import React from 'react'
import { useState } from 'react'

function useReducer02() {
  const [money, setMoney] = useState(100);
  return (
    <div className='container'>
      <h6>useReducer 은행에 오신걸 환영합니다</h6>
      <hr />
      <h3>잔고 : {money} </h3>
      <div>
        <input className='form-control mr-2' type={'number'} step='1000' />
        <button className='btn btn-success mr-2'>예금</button>
        <button className='btn btn-success '>출금</button>
      </div>
    </div>
  )
}

export default useReducer02