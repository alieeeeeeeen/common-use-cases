import React from 'react'
import ReactDOM from 'react-dom';
import TrackMouse from './render-props/TrackMouse.jsx';

class App extends React.Component {
  render() {
    return(
      <TrackMouse />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));