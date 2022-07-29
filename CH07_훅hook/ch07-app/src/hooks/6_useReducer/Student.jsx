import React from 'react'

function student({id, name, isHere,dispatch}) {
  return (
    <div>
      <span style={
        {
          textDecoration : isHere ? 'line-through' : 'none', color: isHere ? 'black' : 'white',
          cursor:'pointer',
        }
      }
      onClick={()=>{
        dispatch({type:'checked-student',payload:{id}})
      }}
      >{`${name}(${id})`}</span>
      <button className='btn btn-outline-info btn-sm ml-3'
      onClick={()=>{
        // dispatch() 호출에서 삭제 기능 수행
        dispatch({type:'del-student',payload:{id}});
      }}
      >버튼!</button>
    </div>
  )
}

export default student