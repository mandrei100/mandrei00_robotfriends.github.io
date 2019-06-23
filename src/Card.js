import React from "react";

const Card = ( {name, email, username, id}) => {
    return (
        <div className="tc bg-light-blue dib br4 pa2 ma2 grow bw2 shadow-6">
            <img alt='robots' src={`https://robohash.org/${id}?250x250`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;