import React from 'react';

import ProductInfo from '../ProductInfo/ProductInfo';
import Timer from '../Timer/Timer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      refresh: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <ProductInfo />
        <Timer time={this.state.time} refresh={this.state.refresh} />
      </div>
    );
  }
}
