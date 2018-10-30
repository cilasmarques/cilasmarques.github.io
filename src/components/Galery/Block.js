import React from 'react';

const block = props => (
    <div>
        <h3>{props.title}</h3>
        {props.children}
    </div>)

export default block;