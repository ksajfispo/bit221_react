/**
 * 컴포넌트 입력 (Props) : 속성
 */

function App(props){
  return(
    <profile name = "Tom" intro = "아녕"  hit={100} ></profile>
  );
}

function Profile({name, intro, hit}){
  return(
    <>
      <h2>{name}의 블로그 입니다.</h2>
      <p>{intro}</p><hr />
      <span>{hit}</span>
    </>
  );
}