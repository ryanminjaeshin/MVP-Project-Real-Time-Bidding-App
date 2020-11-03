import React from 'react';
import axios from 'axios';

import ProductInfo from '../ProductInfo/ProductInfo';
import Timer from '../Timer/Timer';
import Bid from '../Bid/Bid';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      description: '',
      startingBid: 0,
      image: '',
    };
    this.getOneItem = this.getOneItem.bind(this);
  }

  componentDidMount() {
    this.getOneItem(1);
  }

  getOneItem(id) {
    axios.get(`/gallery/${id}`)
      .then((res) => {
        this.setState(() => ({
          id: res.data.id,
          name: res.data.name,
          description: res.data.description,
          startingBid: res.data.startingBid,
          image: res.data.image,
        }), () => {
          console.log(this.state);
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  refreshTimer() {
    window.location.reload(false);
  }

  render() {
    const {
      id,
      name,
      description,
      startingBid,
      image,
    } = this.state;

    return (
      <div>
        <ProductInfo
          id={id}
          name={name}
          description={description}
          startingBid={startingBid}
          image={image}
        />
        <Timer refreshTimer={this.refreshTimer} />
        <Bid refreshTimer={this.refreshTimer} />
      </div>
    );
  }
}
