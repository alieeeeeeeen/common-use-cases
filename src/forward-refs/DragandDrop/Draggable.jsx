import React from 'react';
import './draggable.css'
import { ThemeButtonContext } from './constant.js';

const Draggable = React.forwardRef((props, ref) => (
  <ThemeButtonContext.Consumer>
    {
      theme => (
        <div draggable={true} {...theme} ref={ref} onDragStart={props.onDrag}>drag</div>
      )
    }
  </ThemeButtonContext.Consumer>
))

export default Draggable;