/**
 * 컴포넌트
 */

/**
 * 함수 컴포넌트
 */

function Welcome1(props){
  return <h1>hello {props.names}</h1>
}

/**
 * 클래스 컴포넌트
 */
class Welcome2 extends React.Component{
  render(){
  return(
    <div>
     <h1>hello, {this.props.name}</h1> 
    </div>
    );
  }
}
<Welcome1 name="가나다"></Welcome1>
