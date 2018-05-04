import React from 'react';
import ReactDOM from 'react-dom';
import TrackMouse from './render-props/TrackMouse.jsx';
import ThemeContent from './react-createcontext/index.jsx';

class App extends React.Component {
  render() {
    return (
      <ThemeContent />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));