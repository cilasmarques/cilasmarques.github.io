import React from 'react';

const Bloco = props => (
        <div>
            <h3>{props.title}</h3>
            {props.children}
        </div>
);


export default Bloco;
