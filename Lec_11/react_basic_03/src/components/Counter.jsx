import { useState } from "react"

function Counter() {
    let [count,setCount] =useState(0);
    function handleInc(){
        setCount(count+1);//1

        setCount((cnt)=>cnt+1);//1

        setCount((cnt)=>cnt+1)//2

        setCount((cnt)=>cnt+1); //3

    }
    function handleDec(){
        setCount(count-1);
    }
    return (

        <div>
            <button onClick={handleDec}>DEC</button>
            <h1>Count : {count}</h1>
            <button onClick={handleInc}>INC</button>
        </div>
    )
}

export default Counter