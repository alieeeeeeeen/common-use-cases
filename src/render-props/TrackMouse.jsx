import Mouse from './Mouse.jsx';
import Button from './Button.jsx';
import React from 'react';

class TrackMouse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Mouse render={(mouse, handler) => (
        <Button mouse={mouse} dragMethod={handler}/>
        )
      }/>
    )
  }
}

export default TrackMouse;