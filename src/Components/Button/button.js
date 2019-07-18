import React from 'react';

const button  = (props) => (
    <button onClick={props.onClick}>{props.children}</button>
)

export default button;