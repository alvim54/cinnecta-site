import React from 'react';
import Link from 'gatsby-link';
import VideoPlayer from '../components/VideoPlayer';
import Swiper from '../components/Swiper';
import WhitePaperForm from '../components/WhitePaperForm';
import testimonialBackground from '../../assets/img/testimonials/01.jpg';
import video from '../../assets/videos/intro.mp4';

const videoJsOptions = {
  controls: true,
  fluid: true,
  sources: [{
    src: video,
    type: 'video/mp4'
  }]
}

const swiperOptions = {
  speed: 600,
  parallax: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const IndexPage = () => (
  <div className="content home">
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="large-12 text-center cell">
          <div className="main-banner">
            <h1>Conheça seus clientes.<br />Fidelize sua marca.</h1>
            <p>Entenda o comportamento do seu cliente e gere comunicação personalizada, assertiva e eficaz.</p>
            <Link to="/solucoes/" className="secondary button">Conheça nossas soluções</Link>
          </div>
        </div>
      </div> 
    </div>
    <section className="feature-area">
      <div className="video-area">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell small-12">
              <VideoPlayer { ...videoJsOptions } />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container featured-content">
        <h2 className="text-center">Entenda o <strong>comportamento do seu cliente</strong> e aumente o engajamento nos canais digitais móveis</h2>
        <div className="grid-x">
          <div className="small-12 medium-5 cell">
            <i className="icon-tools"></i>
            <h5>PROCESSOS REATIVOS de análise de comportamento do usuário:</h5>
            <p>Ter a visibilidade do comportamento dos usuários do seu app é um dos maiores desafios atuais das empresas. Analisar o comportamento e segmentar a base de usuários de acordo com as experiências e o perfil de consumo de cada um é uma necessidade para permitir comunicação mais assertiva e garantir maior engajamento com sua marca. Processos tradicionais de identificação de comportamento e coleta de feedback de clientes são reativos, feitos por amostragem e apresentam resultado geralmente impreciso.</p>
          </div>
          <div className="small-12 medium-2 cell spacer">
            <i className="icon-bullet-arrow-right"></i>
          </div>
          <div className="small-12 medium-5 cell">
            <i className="icon-robot"></i>
            <h5>PROCESSOS PROATIVOS usando as soluções da Cinnecta:</h5>
            <p>Com a solução da CINNECTA sua empresa terá a visibilidade do comportamento e da rotina de cada usuário. Isso permite o planejamento e geração de campanhas individualizadas e proativas para aumento de engajamento e retenção no seu app. Integrando nossa plataforma, você terá acesso a dados valiosos sobre o perfil de cada usuário e, através de uma interface gráfica amigável e intuitiva, poderá planejar as ações para minimizar o impacto de experiências negativas, investidas da concorrência ou para aumentar o engajamento.</p>
          </div>
        </div>
      </div>
      <div className="blue-circle"></div>
    </section>
    <div className="text-center featured-button">
      <Link to="/contato/" className="secondary button">Solicite o contato de um consultor</Link>
    </div>
    <section className="toppics">
      <div className="grid-container">
        <h3 className="text-center">Soluções completas para gerenciar o comportamento do seu usuário:</h3>   
        <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
          <div className="cell">
            <div className="solution-summary">
              Gestão de experiência do usuário
              <strong>Entenda a percepção do usuário de seu app em relação à qualidade do serviço</strong>
              <Link to="/solucoes#experiencia">Saiba mais</Link>
            </div>
          </div>
          <div className="cell">
            <div className="solution-summary">
              Social Scoring
              <strong>Faça o ranking de seus usuários de acordo com o comportamento</strong>
              <Link to="/solucoes#scoring">Saiba mais</Link>
            </div>
          </div>
          <div className="cell">
            <div className="solution-summary">
              Engajamento Personalizado
              <strong>Conheça o perfil de cada usuário e gere campanhas mais assertivas</strong>
              <Link to="/solucoes#engajamento">Saiba mais</Link>
            </div>
          </div>
          <div className="cell">
            <div className="solution-summary">
              Predição de Churn / Retenção
              <strong>Conheça os usuários com maior propensão a se engajar com seus concorrentes</strong>
              <Link to="/solucoes#churn">Saiba mais</Link>
            </div>
          </div>
          <div className="cell">
            <div className="solution-summary">
              Geofencing
              <strong>Gere comunicação com seus usuários na hora certa e no lugar certo</strong>
              <Link to="/solucoes#fencing">Saiba mais</Link>
            </div>
          </div>
          <div className="cell">
            <div className="solution-summary">
              Detecção e prevenção de fraudes
              <strong>Receba alarmes em tempo real a cada acesso considerado suspeito</strong>
              <Link to="/solucoes#fraudes">Saiba mais</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="call-to-action-bar">
      <div className="text-center grid-container">
        <h4>Se sua empresa utiliza um aplicativo móvel, conte com a CINNECTA para gerenciar sua base de clientes!</h4>
        <Link to="/solucoes" className="light button">Conheça nossas soluções</Link>
      </div>
    </section>
    <section className="testimonials">
      <Swiper options={swiperOptions}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="parallax-bg" style={{backgroundImage: `url(${testimonialBackground})`}} data-swiper-parallax="0"></div>
            <p className="testimonial-quote" data-swiper-parallax="-600">“Suspendisse accumsan, eros nec iaculis rutrum, lacus nisl venenatis erat, eu ultricies arcu tortor eget massa. Quisque a varius urna, id faucibus ligula.”</p>
            <p className="testimonial-name" data-swiper-parallax="-400">Eduardo Navarro</p>
            <span className="testimonial-position" data-swiper-parallax="-200">Presidente Executivo - Telefonica Brasil</span>
          </div>
          <div className="swiper-slide">
            <div className="parallax-bg" style={{backgroundImage: `url(${testimonialBackground})`}} data-swiper-parallax="0"></div>
            <p className="testimonial-quote" data-swiper-parallax="-600">“Suspendisse accumsan, eros nec iaculis rutrum, lacus nisl venenatis erat, eu ultricies arcu tortor eget massa. Quisque a varius urna, id faucibus ligula.”</p>
            <p className="testimonial-name" data-swiper-parallax="-400">Eduardo Navarro</p>
            <span className="testimonial-position" data-swiper-parallax="-200">Presidente Executivo - Telefonica Brasil</span>
          </div>
          <div className="swiper-slide">
            <div className="parallax-bg" style={{backgroundImage: `url(${testimonialBackground})`}} data-swiper-parallax="0"></div>
            <p className="testimonial-quote" data-swiper-parallax="-600">“Suspendisse accumsan, eros nec iaculis rutrum, lacus nisl venenatis erat, eu ultricies arcu tortor eget massa. Quisque a varius urna, id faucibus ligula.”</p>
            <p className="testimonial-name" data-swiper-parallax="-400">Eduardo Navarro</p>
            <span className="testimonial-position" data-swiper-parallax="-200">Presidente Executivo - Telefonica Brasil</span>
          </div>
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </Swiper>
    </section>
    <WhitePaperForm />
  </div>
      
)

export default IndexPage
