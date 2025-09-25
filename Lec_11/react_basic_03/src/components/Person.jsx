function Person(props) {
    console.log("props:- ", props);

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>favColor:- {props.favColor}</h2>
        </div>
    )
}

export default Person;