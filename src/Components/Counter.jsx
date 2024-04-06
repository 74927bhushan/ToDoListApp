import React from 'react'
import { useState } from 'react'

function Counter() {

    const  [count, setCount] = useState(0)
    
    
    function IncrementCount(){
            setCount(count+1);
    }
    function DecrementCount(){
        if(count!==0){
            setCount(count-1);
        }
        
    }
  return (
    <div> <h3>
        {count}
    </h3>
        <button onClick={IncrementCount}>Increment</button>
        <button onClick={DecrementCount}>Decrement</button>
        </div>
  )
}

export default Counter