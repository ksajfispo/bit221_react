import React from "react";
import Book from "./Book";

function Library(props){
  return(
    <div>
      <Book name="파이썬이 쉬웠어요" page='100'></Book>
      <Book name="리액트란?" page='200'></Book>
      <Book name="자바란?" page='300'></Book>
    </div>
  );
}

export default Library;