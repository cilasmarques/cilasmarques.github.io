import React from 'react';

const text = props => (
<div>
    <a href="{props.link}"></a>
    {`${props.ID} '.' ${props.title} '/n' ${props.author}`}
</div>);

export default text;