import React from 'react'
import { useEffect } from 'react'

function Timer() {
  useEffect(() => {
    const updateTimer = setInterval(() => {
      console.log('🥽..')
    }, 1000);

    // 마운트 헤제시 실행 정지 작업
    // 언마운트시 처리 작업
    return () => {
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }

  }, []); // 마운트 & 언마운트시 처리완료
  return ( 
    <div>
      <span>타이머를 설정 하세욥 </span>
    </div>
  )
}

export default Timer