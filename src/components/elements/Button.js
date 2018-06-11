import React from 'react';

function Button(props) {
  return <button
            onClick={props.clickHandler}
            className={props.className}>
            {props.text}
         </button>;
}

export default Button;
