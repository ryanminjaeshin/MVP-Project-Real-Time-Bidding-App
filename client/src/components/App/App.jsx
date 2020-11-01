import React from 'react';
import axios from 'axios';

import ProductInfo from '../ProductInfo/ProductInfo';
import Timer from '../Timer/Timer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.state.refresh);
  }

  refreshTimer() {
    // this.setState((prevState) => ({
    //   refresh: !(prevState.refresh),
    // }), () => {
    //   window.location.reload(false);
    // });
    window.location.reload(false);
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
