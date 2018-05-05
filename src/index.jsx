import React from 'react';
import ReactDOM from 'react-dom';
// import TrackMouse from './render-props/TrackMouse.jsx';
// import ThemeContent from './react-createcontext/index.jsx';
// import TrackDrag from './render-props/DragandDrop/TrackDrag.jsx';
import DradandDrop from './forward-refs/DragandDrop/index.jsx';
import ModalPortal from './portal/index.jsx';

class App extends React.Component {
  render() {
    return (
      // <DradandDrop />
      <ModalPortal />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));