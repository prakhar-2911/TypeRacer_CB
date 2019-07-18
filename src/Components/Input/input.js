import React from 'react';

const input  = (props) => (
    <input
            type={props.type}
            name={props.name}
            onKeyUp={props.onKeyUp}
          />
)

export default input;