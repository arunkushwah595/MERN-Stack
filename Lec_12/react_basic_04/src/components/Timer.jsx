import React, { useEffect, useState } from 'react'

function Timer() {
    const [time, setTime] = useState(0);


    useEffect(function () {
        let id = setTimeout(function () {
            setTime(time + 1)
        }, 1000)

    }, [time])



    // useEffect(function () {
    //     let id=setInterval(function () {
    //         setTime(time + 1)
    //     }, 1000)
    //     return ()=>clearInterval(id);
    // },[time])


    return (
        <div>
            <h1>Time: {time}</h1>
        </div>
    )
}

export default Timer