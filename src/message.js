import React from 'react';

function Message(props) {
    return (
        <div>
            <h1>Surge Links:</h1>
            <h2>Surge Assignments {props.surge}</h2>
            <h1>Github Links:</h1>
            <h2>Github Repo Assignments {props.github}</h2>
        </div>
    )
}

export default Message;