import React, { memo, useState } from 'react'
import Counter from './Counter';



function Person() {


    
    let [dog, setDog] = useState("Maverick");
    function handleNaam() {
        setDog(Math.floor(Math.random() * 10))
    }

let [inp,setInp]=useState('');
function handleInput(e){
    setInp(e.target.value);
}

let [num,setNum]=useState(0);
    return (
        <div>            
            <input onChange={handleInput} type="text" value={inp} ></input>
            <Chotu naam={dog} />
            <button onClick={handleNaam}>Naam Badalwa Lo !!!</button>
            <Chotu naam="Simba" />
            <Chotu naam="Nepali" />
            <Chotu naam="Hutiya" />


            <br /><br />
            <input onChange={changenum} type='number' value={num} />
            <Sum val={num} />
        </div>
    )
}

function Sum({val}){
let ans=val*(val-1)/2;
    return(
        <div>
            <h2>Ans:-{ans} </h2>
            <Counter/>
        </div>
    )

    
}

const Chotu = memo(function ({ naam }) {
    return (
        <div>
            <h1>{naam} sir, Chai piyoge kya</h1>
        </div>
    )
})

export default Person