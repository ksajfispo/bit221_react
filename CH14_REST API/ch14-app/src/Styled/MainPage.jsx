import React from 'react'
import styled from 'styled-components'
/**
 * styled-componets : CSS 문법을 그대로 사용
 * 결과물을 스타일링된 컴포넌트 형태로 만들어주는 라이브러리
 */

const Wrapper = styled.div`
  padding: 1em;
  background: crimson;
  border-radius: 50%;
`;

/*
const Mybutton = styled.button`
  color: blueviolet;
  background-color: beige;
  border-radius: 70%;
  margin-left: 10px;

`
*/
const SmartButton = styled.button `
  color: ${props => props.dark ? 'white' : 'dark'};
background: ${props => props.dark ? 'black' : 'white'};
border: 1px solid red;
padding: 5px;
`

function mainpage() {
  return (
    <Wrapper>
      <div>
        안녕
        <SmartButton dark>dd</SmartButton>
      </div>
    </Wrapper>
  )
}

export default mainpage