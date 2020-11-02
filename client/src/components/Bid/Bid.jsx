import React from 'react';

import BidAmount from '../BidAmount/BidAmount';

export default class Bid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    // const bidButtonComponent =
    return (
      <div onClick={this.props.refreshTimer}>
        NEED TO ADD BIT BUTTON COMPONENT
        <BidAmount />
      </div>
    )
  }
}