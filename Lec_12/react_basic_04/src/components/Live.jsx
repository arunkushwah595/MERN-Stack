import React, { useEffect, useState } from 'react'

function Live() {
    const [count, SetCount] = useState(0);
    useEffect(() => {
        if (count === 0) {
            console.log("Componenet Did Mount");
        }
        if (count > 0 && count < 5) {
            console.log("Component Did Update");
        }
        if (count === 5) {
            return () => console.log("Componenet Will Unmount");
        }
    }, [count])

    return (
        <div>
            <h1>Live</h1>
            <button onClick={() => SetCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default Live