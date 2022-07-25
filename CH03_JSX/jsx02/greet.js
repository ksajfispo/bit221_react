/* JSX 
  1. 태그는 무조건 닫혀야 한다.
  2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야한다.
 
  
*/
class App2 extends React.Compontent{
  render(){
    return (
      <>
        <div>

        </div>
      </>
    );   
  } 
}

/**
 * 3. JSX 내부에서 변수를 사용하려면 코드를 {}로 감싸준다
 */

class App3 extends React.Compontent{
  render(){
    const title = "토론";

    return(
      <div>
        <h1>이어서 {title} </h1>
        // 이부분
      </div>
    );
  }
  
}

/**
 * 4. {} 자바스크립트 if조건문(x)
 * 삼항 연산자
 */

class App4 extends React.Compontent{
  render(){
    let flag = true;
    return(
      <div>
        {
          flag ? <p>안녕하세요</p> : <p>누구세요?</p>
        }
      </div>
    );
  }
}

/**
 * 5. 카멜케이스 표기법
 */

class App5 extends React.Compontent{
  render() {
    return (
       <div className="app5">
        <h1>내용</h1>
       </div>
    );
  }
}