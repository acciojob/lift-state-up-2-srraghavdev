
import React,{useState} from "react";
import './../styles/App.css';
import Child from './Child'
const App = () => {
  let [inputValue,SetinputValue]=useState('')
  return (
    <div>
        <h1>Parent Component</h1>
        <div>{inputValue}</div>
        <Child state={inputValue} set={SetinputValue}/>
    </div>
  )
}

export default App
