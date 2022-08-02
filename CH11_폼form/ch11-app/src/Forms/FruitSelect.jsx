import React from 'react'
import { useState } from 'react'

function FruitSelect() {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('정보 보기' + value);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h5>음식 선택!@#</h5>
          <select className='form-select' value={value} onChange={handleChange}>
            <option>Open this select menu</option>
            <option value='a'>🎅</option>
            <option value='b'>🎢</option>
            <option value='c'>🧨</option>
            <option value='d'>✨</option>
            <option value='e'>🎉</option>
          </select>
        </label>
        <button className='btn btn-success ms-1' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FruitSelect