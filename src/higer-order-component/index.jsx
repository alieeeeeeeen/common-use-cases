import React from 'react';
import passData from './passData.jsx';
import GoodList from './GoodList.jsx';
import fetchData from './fetchData.js';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Component = passData(GoodList, fetchData);
    return <Component />
  }
}

export default ListComponent;