import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default class SwiperComponent extends Component {
  componentDidMount() {
    this.swiper = new Swiper(this.swiperContainer, this.props.options);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div ref={ node => this.swiperContainer = node } className="swiper-container">
        {this.props.children}
      </div>
    )
  }
}
