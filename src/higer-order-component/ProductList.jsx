import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
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