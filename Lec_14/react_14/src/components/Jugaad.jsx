import React from 'react'
import { data } from 'react-router-dom';

function Jugaad() {
    function help(d) {
        console.log(d, "parent");
    }
    return (
        <div>
            <Child help={help} />
        </div>
    )
}

function Child({help}) {
    let data = "Nobita";
    help(data);
    return (
        <div>

        </div>
    )
}

export default Jugaad