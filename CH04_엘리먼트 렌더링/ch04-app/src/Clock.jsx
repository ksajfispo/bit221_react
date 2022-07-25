import React from "react";

function Clock(props){
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return(
    <div>
      <span>{now +""+ time}</span>
    </div>
  );
}
export default Clock;