import React,{useState} from 'react'
let Child= (props)=>{
return (
    <div className='child'>
        <h1>Child Component</h1>
        <input type='text' onInput={(event)=>{props.set(event.target.value)}}></input>
    </div>
)
}
export default Child;