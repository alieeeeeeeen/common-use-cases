import React from 'react';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    }
    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return(
      <div style={{height: '100%', position: 'relative'}} onMouseMove={this.handleMouse}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default Mouse;