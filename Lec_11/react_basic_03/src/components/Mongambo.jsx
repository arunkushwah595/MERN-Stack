import { useState } from "react";


function Mongambo({ naam }) {
    // let myName = naam;
    let [name, setName] = useState(naam);

    function handleNaam() {
        console.log(name,"Before");
        setName("Anonymous");
        console.log(name,"After");
    }

    return (
        <div>
            <button onClick={handleNaam}>Naam Badal Lo Guys:- {name}</button>
        </div>
    )
}

export default Mongambo