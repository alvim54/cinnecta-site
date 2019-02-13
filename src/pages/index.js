import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import video from '../../assets/videos/landing-page/render.mp4';
import poster from '../../assets/img/landing-page/video-poster.jpg';
import linkedin from '../../assets/img/landing-page/inpq.png'
import facebook from '../../assets/img/landing-page/fb.png'
import NewsletterForm from "../components/NewsletterForm";

const videoJsOptions = {
  controls: true,
  fluid: true,
  poster: poster,
  sources: [
    {
      src: video,
      type: 'video/mp4'
    }
  ]
}

const swiperOptions = {
  speed: 600,
  parallax: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

export class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLanguage: 'pt-br'
    }
  }

  render() {
    return (
      <div className="content landing-page">
        <div className="grid-container">
          <div className="grid-x grid-margin-x align-middle landing-page__grid">
            <div className="small-12 large-6 cell">
              <div className="main-banner">
                <h2 className="landing-page__title">Vem aí um novo conceito em inteligência de dados no ambiente mobile</h2>
                <div className="hide-for-medium landing-page__video-container">
                  <VideoPlayer { ...videoJsOptions } onRef={player => this.videoPlayer = player} />
                </div>
                <p className="landing-page__text">Enquanto isso, sinta-se à vontade para interagir conosco em nossas redes sociais:</p>
                <div className="landing-page__icon-container">
                  <a className="default" href="https://linkedin.com/company/cinnecta" target="_blank">
                    <img src={linkedin} />
                  </a>
                  <a className="default" href="https://www.facebook.com/cinnecta/" target="_blank">
                    <img src={facebook} />
                  </a>
                </div>
                <h5 className="landing-page__title">31 3267 1244 | cinnecta@cinnecta.com</h5>
              </div>
            </div>
            <div className="cell small-12 large-6">
              <div className="show-for-medium landing-page__video-container">
                <VideoPlayer { ...videoJsOptions } onRef={player => this.videoPlayer = player} />
              </div>
              <NewsletterForm/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default IndexPage