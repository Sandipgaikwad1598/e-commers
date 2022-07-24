import React from "react";
import ReactDOM from "react-dom";
// import {Add,sub,mul,div}from "./App";
// import * as d from "./App";
import Movies from './Movies';
import list from './list'; 
import App from './App';
import './Movies.css';
// console.log(list[0]);
// }
function n(val){
  return(
    <>
    <Movies
   image={val.image}
   title={val.title}
   link={val.link}
  />
    </>
  )
}
ReactDOM.render(
  <>
  <App/>
  
  {list.map(n)}
  
  </>,document.getElementById('root')
  
);