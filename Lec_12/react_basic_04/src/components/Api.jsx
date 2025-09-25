import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
    const [data, setData] = useState([]);

    const API = "https://jsonplaceholder.typicode.com/todos";

    //   useEffect(()=>{
    //     axios
    //       .get(API)
    //       .then((res) => {
    //         setData(res.data);
    //       })

    //       .catch((err) => {
    //         console.log("Error", err);
    //       });
    //   },[])


    // using async await 
    useEffect(() => {
        async function apicalling() {
            let data = await axios.get(API);
            setData(data.data);
        }
        apicalling()

    }, []);




    // fetch runs every render (not good, but you said no useEffect)

    //   useEffect(()=>{
    //     fetch(API)
    //       .then((data) => data.json())
    //       .then((resp) => {
    //         setData(resp);
    //       })
    //       .catch((err) => {
    //         console.log("Error", err);
    //       });
    //   },[])
    //   fetch(API)
    //     .then((res) => res.json())
    //     .then((resp) => {
    //       setData(resp);
    //     })
    //     .catch((err) => {
    //       console.log("Error", err);
    //     });

    return (
        <div>
            <h1>Api</h1>
            {
                data.map((item) => (
                    <div>
                        <h4>Title: {item.title}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default Api;
