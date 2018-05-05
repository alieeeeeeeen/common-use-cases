import React from 'react';
import Modal from './Modal.jsx';
import './modal.css';

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.stopPropagation();
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render() {
    return(
      <div>
        <button onClick={this.toggleModal}>show modal</button>
        {this.state.show && <Modal><button onClick={this.toggleModal}>hide</button></Modal>}
      </div>
    )
  }
}

export default ModalPortal;