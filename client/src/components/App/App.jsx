import React from 'react';
import axios from 'axios';

import ProductInfo from '../ProductInfo/ProductInfo';
import Timer from '../Timer/Timer';
import Bid from '../Bid/Bid';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  refreshTimer() {
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <ProductInfo />
        <Timer refreshTimer={this.refreshTimer} />
        <Bid refreshTimer={this.refreshTimer}/>
      </div>
    );
  }
}
