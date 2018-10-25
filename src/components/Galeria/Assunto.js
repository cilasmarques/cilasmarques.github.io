import React from 'react';

const Assunto = props => (
    <p>
        <a href={props.url}>
            {`${props.keyID}. ${props.author} - ${props.title}`}
        </a>
    </p>
);

export default Assunto;
