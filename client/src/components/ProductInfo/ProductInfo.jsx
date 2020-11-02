import React from 'react';

import ProductPrice from '../ProductPrice/ProductPrice';

export default class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Product Info
        <ProductPrice />
      </div>
    );
  }
}
