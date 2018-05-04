import React from 'react';
import { ThemeContext } from './constant.js';

function DefaultButton(props) {
  const {handler, ...other} = props;
  return(
    <ThemeContext.Consumer>
      {theme => (
        <button onClick={handler} {...other}>{propx.children}</button>
      )}
    </ThemeContext.Consumer>
  )
}

export default DefaultButton;