

function UserCard(props){
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Address: {props.address}</p>
        </div>
    );
}

export default UserCard;