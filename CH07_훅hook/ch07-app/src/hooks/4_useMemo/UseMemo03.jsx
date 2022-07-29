import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react';

const hardCa = (number) => {
  let tt = 0;
  for (let i = 0; i < 10000; i++) {
    tt += i;
  }
}
const easyCa = (number) => {
  return number + 1;
}

function UseMemo03() {

  const [hard, setHard] = useState();
  const [easy, setEasy] = useState();

  const hards = useMemo(()=>{
    return hardCa(hard);
  })

  const easys = easyCa(easy);


  return (
    <div>
      <h2>hardwarking</h2>
      <input value={hard} type='number' />
      <span>값은 : {hard}</span>
      <hr />

      <h2>hardwarking</h2>
      <input value={easy} type='number' />
      <span> 값은 : {easy}</span>
    </div>
  )
}

export default UseMemo03