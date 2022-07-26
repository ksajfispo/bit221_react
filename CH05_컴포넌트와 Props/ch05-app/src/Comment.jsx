import React from 'react'
import Avatar from './Avatar';
import Dtime from './Dtime';

function Comment(props) {
  return (
    <div>
      <div className="comment">
        <div className="user-info container">
          {/*<img src="./280.jpg" alt="avarta-img" className="avatar" />*/}
          <Avatar url={props.avatarUrl} />
          <div className="user-info-name container">
            {props.name}
          </div>
        </div>
        <div className="comment-text container">
          <p>
            {props.comment}
          </p>
          <div className="comment-date">
            <Dtime>

            </Dtime>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;