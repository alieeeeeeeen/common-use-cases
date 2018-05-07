import React from 'react';

class GoodList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { data } = this.props;
    const attributes = Object.keys(data);
    return (
      attributes.length > 0 && attributes.map((prop) => (
        <li key={data[prop]['id']}>{data[prop]['name']}</li>
      ))
    )
  }
}

export default GoodList;