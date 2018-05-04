// statless component
import React from 'react';

function Button(props) {
  const button = props.mouse
  return(
    <div style={{position: 'absolute', left: button.x, top: button.y}}/>
  )
}

export default Button;