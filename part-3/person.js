const Person = (props) => {
    const {name, age, hobbies} = props;

    return (
        <div className = "person">
            <p>Learn some information about this person</p>
            <p>Name: <b>{name}</b></p>
            <p>Age: {age} {age > 17 ? <b><br/>"please go vote!"</b> : ""}</p>
            <Hobbies hobbies={hobbies}/>
            <br/>
        </div>
    ) 
}