import React from 'react';

function Input(props) {

  return <input
          autoFocus={props.autoFocus}
          className={props.className}
          type={props.type}
          value={props.value}
          onChange={props.changeHandler}
        />;
  }

export default Input;
