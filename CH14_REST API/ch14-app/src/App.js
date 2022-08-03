import './App.css';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';
//import MainPage from './Styled/MainPage'

/** JS에서 비동기 HTTP 통신
 * Ajax , axios
 */

/**
 * REST API
 * 두 컴퓨터 시스템이 인터넷을 통해 정보를 교환하기 위해 사용하는 인터페이스입니다
 * HTTP Method : GET, POST, PUT, DELETE
 */

const MyImg = styled.img`
width: 50px;
border-radius: 50%;
`

function App() {

  const [posts, setPosts] = useState([]);

  /*
  useEffect(()=>{
    axios({
      method : 'get',
      url : 'https://jsonplaceholder.typicode.com/posts',
    }).then((res)=>{
      setPosts(res.data);
    })}
  ,[]);
*/

/*
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{setPosts(res.data)})
*/

useEffect(()=>{
  axios({
    method : 'get',
    url : 'https://jsonplaceholder.typicode.com/posts',
  }).then((res)=>{
    setPosts(res.data);
  })
  .catch((e)=>{
    console.log(e)
  })
},[]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg' alt='' style={{
            width: 200, height: 200, borderRadius: 100
          }} />
          <div className='d-flex'>
            <input className='form-control ml-2' />
            <button className='btn btn-secondary ml-2'>Search</button>
          </div>
        </div>

        <div className='container'>
          <span style={{ color: 'grey' }}>{`Total ${posts.length}`}</span>
          <hr />
          <table className='table text-light' style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope='col'>NO</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>BODY</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope='row'>{post.userId}</th>
                      <td>{post.id} </td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;


