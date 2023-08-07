const Hobbies = (props) => {
    const {hobbies} = props;

    return (
        <div className="hobbies">
            <h4>My hobbies: </h4>
            <ul>
                {hobbies.map(hobby => (<li>{hobby}</li>))}
            </ul>
        </div>
    );
}