class Hello extends React.Component{
  render(){
    return <h1>Hello, {this.props.nickname}</h1>
  }
}

ReactDom.render(
  // 컴포넌트 사용
  <Hello nickname="안녕" />,
  document.getElementById('root')
);