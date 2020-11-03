import React from 'react';

import ProductPrice from '../ProductPrice/ProductPrice';
import styles from './productInfo.css';

export default class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      id,
      name,
      description,
      startingBid,
      image,
    } = this.props;

    return (
      <div>
        Product Info
        <h1>
          NAME :
          {name}
        </h1>
        <p>
          ID :
          {id}
        </p>
        <img className={styles.image} src={image} alt={name} />
        <p>
          Description:
          {description}
        </p>
        <ProductPrice />
      </div>
    );
  }
}
