import { ThemeContext } from './constant.js';
import React from 'react';

function Content(props) {
  return(
    <ThemeContext.Consumer>
      {
        theme=> (
          <div style={{theme}} {...other}>the content background-color will be changed by clicking the button</div>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default Content;