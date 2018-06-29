import React from 'react';
import videojs from 'video.js';
import 'videojs-font/css/videojs-icons.css';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady', this)
      this.props.onRef(this.player)
    });
  }
  
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
      this.props.onRef(undefined)
    }
  }

  render() {
    return (
      <div>    
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}