import React from 'react';
// don't mutate the origin component!!!Use composition!!!!
// pure function

function passData(WrappedComponent, fetchData) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }

    componentDidMount() {
      fetchData({url: 'http://localhost:3000/list'}).then((resp) => {
        this.setState((prevState) => ({
          data: resp
        }))
      })
    }

    render() {
      return(
        <WrappedComponent data={this.state.data} {...this.props}/>
      )
    }
  }
}

export default passData;