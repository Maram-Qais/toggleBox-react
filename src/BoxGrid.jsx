import React from 'react'
import Box from './Box'
import { useState } from 'react';
function BoxGrid({numBoxes=9}) {
  const[boxes,setBoxes]  = useState(
    [false,false,true])

    const reset=()=>{
        setBoxes([false,false,false])
    }

    const toggleBox=(idx)=>{
        setBoxes((prevBoxes)=>{
return prevBoxes.map((value,i)=>{
    if(i===idx){
        return !value}
        else{
            return value
        
    }
});

        })


    }
  return (
    <div className='BoxGrid'>
{boxes.map((b,idx)=>(
<Box key={idx}isActive={b} toggle={()=>toggleBox(idx)} />
))}     
 <button onClick={reset}>reset</button>
    </div>
  )
}

export default BoxGrid