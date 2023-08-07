const Tweet = (props) => {
    const {username, name, date, message} = props;

    return (
        <div className="Tweet">
            <h5>{username}</h5>
            <p>{message}</p>
            <h6>-{name} {date}</h6>
        </div>
    );
}