import React from 'react';
import Draggable from './Draggable.jsx';
import { ThemeButton, ThemeButtonContext } from './constant.js';

const ref = React.createRef();

class DradandDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ThemeButton.drag.id
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDrop(event) {
    event.preventDefault();
    event.target.appendChild(ref.current);
    this.setState({
      id: ThemeButton.drag.id,
    })
  }

  handleDragOver(event) {
    this.setState({
      id: ThemeButton.dragging.id
    })
  }

  dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  render() {
    return (
      <div>
        <div id="div1" onDrop={this.handleDrop} onDragOver={this.handleDragOver} />
        <ThemeButtonContext.Provider value={this.state}>
          <Draggable onDrag={this.dragStart} ref={ref} />
        </ThemeButtonContext.Provider>
        <div id="div2" onDrop={this.handleDrop} onDragOver={this.handleDragOver} />
      </div>
    )
  }
}

export default DradandDrop;