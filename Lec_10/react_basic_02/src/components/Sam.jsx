// function Sam() {
//     return (
//         <div>
//             <h1>Welcome to the Sam</h1>
//         </div>
//     )
// }

// export default Sam;


// -----------------------------Same--------------------------------------

// function sam() {
//     return (
//         <div>
//             <h1>Welcome to the Sam</h1>
//         </div>
//     )
// }

// export default sam;




// ------------------------------------------------------------------------

function Sam() {
    let a = 0;
    let b = 'Sam';
    let c = true;
    let d = null;
    let e = undefined;
    function budbakk() {
        console.log("Ghachaak");
    }
    function vohra(a, b, c) {
        console.log("Jai Baba Ki", a, b, c);
    }
    return (
        <div>
            <div>
                <h1>Welcome to the Sam</h1>
                <h1>A: {a}</h1>
                <h2>B: {b}</h2>
                <h2>C: {JSON.stringify(c)}</h2>
                <h2>D: {JSON.stringify(d)}</h2>
                <h2>E: {JSON.stringify(e)}</h2>
            </div>
            <button onClick={budbakk}>Btn 1</button>
            <button onClick={() => vohra(10, 20, 30)}>Btn 2</button>
        </div>
    )
}

export default Sam;

