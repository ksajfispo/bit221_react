import React,{useState} from 'react'


  const styles = {
    container: {
      padding: 100,
      //display: 'flex',
      flexDirection: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    btn:{
      padding: 20,
    },
    icon:{
      fontSize: 25,
    }
  
  }
  function UseState03() {

  const [count,setCount] = useState(0);

  return (
    <div>
      <span>You Clicked {} times</span>
      <button className='btn btn-info' style={styles.btn}
        onClick={()=>{
          setCount(count +1);
        }}    
        >
      <i className='fa-solid fa-computer-mouse' style={StyleSheet.icon}></i>
      Click me</button>
    </div>
  )
}

export default UseState03