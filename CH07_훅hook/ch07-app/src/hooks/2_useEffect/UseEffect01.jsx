import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react';
/**
 * useEffect(콜백 함수,의존성 배열[])
 * useEffect(()=>{}, []);
 * @returns 
 */


 const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

// useEffect 테스트할 데이터
let kiwis =[];


function useEffect01() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count === 0) kiwis=[];
    kiwis.push('🎁');

    document.title = '👍' + count + 'update';
  });
  return (
    <div className='container' style={styles.container}>

      <span>{kiwis + '💨' + count}</span>
      <hr></hr>
      <p className='h3'>You clicked {count} times</p>
      <hr />

      <button className='btn btn-info' style={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}>

        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>Click Me</span>
      </button>

    </div>



  )
}

export default useEffect01