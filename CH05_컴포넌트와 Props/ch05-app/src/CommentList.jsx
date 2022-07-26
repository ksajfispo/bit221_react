import React from 'react'
import Comment from './Comment';

const list = [
{
  name:'MMM',
  comment:'안녕하세용 루니입니다~!',
  avatarUrl:'images/simple/2627.jpg'
},
{
  name:'JJJ',
  comment:'안녕하세용 가나입니다',
  avatarUrl:'images/simple/3158.jpg'
},
{
  name:'ㅏㅏㅏ',
  comment:'안녕하세용 루니입니다~!',
  avatarUrl:'images/simple/9634.jpg'
},
];

function CommentList() {
  return (
    <div>
      {
        list.map((data, idx)=>{
          return(
            <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl}/>
          );
        })
      }
      
    </div>
  )
}

export default CommentList