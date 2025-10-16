import React from 'react'

function Drilling() {
    const data = "Mai hu Giaan"
    return (
        <div>
            <A gian={data} />
        </div>
    )
}

function A({ gian }) { return (<h2> <B gian={gian} /> </h2>) }
function B({ gian }) { return (<h2> <C gian={gian} /> </h2>) }
function C({ gian }) { return (<h2> <D gian={gian} /> </h2>) }
function D({ gian }) { return (<h2> naam: {gian} </h2>) }



export default Drilling