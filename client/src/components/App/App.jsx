import React from 'react';

import ProductInfo from '../ProductInfo/ProductInfo';
import Timer from '../Timer/Timer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ProductInfo />
        <Timer />
      </div>
    );
  }
}
