import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffect02() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const updateInput = (e)=>{
    setName(e.target.value);
  }

  const updateCount = ()=>{
    setCount(count +1);
  }

   //렌더링마다 매번 사이드 이펙트 실행
   /*
   useEffect(()=>{
    console.log('가나다라마');
   })
*/

  // 마운팅 & count가 바뀔때마다 실행
  /*
  useEffect(()=>{
    console.log('카운트 변경');
   },[count])
*/

// 마운팅 & name
/*
useEffect(()=>{
  console.log('가나다라마');
 }, [name, count])
*/

 //최초 마운팅 될 때
 useEffect(()=>{
  console.log('가나다라마');
 },[])

  return (
    <div className='container'>
      <p>count : {count}</p>
      <button className='btn btn-success' onClick={updateCount}>Update</button>
      <div>
        <input type='text' onChange={updateInput}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02;