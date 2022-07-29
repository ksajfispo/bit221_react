import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const hardCa = (number) => {
  let total = 0;
  for (let i = 0; i < 99999999; i++) {
    total += i;
  }
  console.log('계싼')
  return number + total;
}

const eastCa = (number) => {
  console.log('간단한계산');
  return number + 1;
}

function UseMemo02() {

  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const hard = useMemo(() => {
    return hardCa(hardNumber);
  });

  const easy = eastCa(easyNumber);



  //const hard = hardCa(hardNumber);
  return (
    <div className='container'>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Hard working</h5>
        <input
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {hard}</span>
      </div>

      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Simple working</h5>
        <input
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> 1 + INPUT = {easy}</span>
      </div>

    </div>
  )
}

export default UseMemo02