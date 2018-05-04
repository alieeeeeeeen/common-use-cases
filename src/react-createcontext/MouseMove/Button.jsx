import React from 'react';
import { ThemeContext } from './constant.js';

function DefaultButton(props) {
  const {handler, ...others} = props;
  return(
    <ThemeContext.Consumer>
      {theme => (
        <button onClick={handler} {...others}>{props.children}</button>
      )}
    </ThemeContext.Consumer>
  )
}

export default DefaultButton;