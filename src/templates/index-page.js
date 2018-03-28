import React from 'react';
import Link from 'gatsby-link';
import VideoPlayer from '../components/VideoPlayer';
import Swiper from '../components/Swiper';
import WhitePaperForm from '../components/WhitePaperForm';
import testimonialBackground from '../../assets/img/testimonials/01.jpg';
import video from '../../assets/videos/intro.mp4';
import poster from '../../assets/img/video-poster.jpg';

const videoJsOptions = {
  controls: true,
  fluid: true,
  poster: poster,
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

export const IndexPageTemplate = ({ banner, featured, solutions }) => {
  console.log('solutions', solutions);
  return (
    <div className="content home">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="large-12 text-center cell">
            <div className="main-banner">
              <h1 dangerouslySetInnerHTML={{__html: banner.heading }}></h1>
              <p>{ banner.subheading }</p>
              <Link to="/solucoes/" className="secondary button">{ banner.callToAction }</Link>
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
          <h2 className="text-center" dangerouslySetInnerHTML={{__html: featured.heading }}></h2>
          <div className="grid-x">
            <div className="small-12 medium-5 cell">
              <i className="icon-tools"></i>
              <h5>{featured.reactive.heading}</h5>
              <span dangerouslySetInnerHTML={{__html: featured.reactive.content }}></span>
            </div>
            <div className="small-12 medium-2 cell spacer">
              <i className="icon-bullet-arrow-right"></i>
            </div>
            <div className="small-12 medium-5 cell">
              <i className="icon-robot"></i>
              <h5>{featured.proactive.heading}</h5>
              <span dangerouslySetInnerHTML={{__html: featured.proactive.content }}></span>
            </div>
          </div>
        </div>
        <div className="blue-circle"></div>
      </section>
      <div className="text-center featured-button">
        <Link to="/contato/" className="secondary button">{featured.callToAction}</Link>
      </div>
      <section className="toppics">
        <div className="grid-container">
          <h3 className="text-center">Soluções completas para gerenciar o comportamento do seu usuário:</h3>   
          <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
            {
              solutions.map(solution => {
                return (
                  <div className="cell" key={solution.node.id}>
                    <div className="solution-summary">
                      {solution.node.name}
                      <strong>{solution.node.description}</strong>
                      <Link to={`/solucoes#${solution.node.id}`}>Saiba mais</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="call-to-action-bar">
        <div className="text-center grid-container">
          <h4>Se sua empresa utiliza um aplicativo móvel, conte com a CINNECTA para gerenciar sua base de clientes!</h4>
          <Link to="/solucoes" className="light button">Conheça nossas soluções</Link>
        </div>
      </section>
      {/*
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
      */}
      <WhitePaperForm />
    </div>
        
  )
}

export default ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

	return (
		<IndexPageTemplate
        banner={frontmatter.banner}
        featured={frontmatter.featured}
        solutions={data.allSolutionsJson.edges}
		/>
	)
}
    
export const indexPageQuery = graphql`
	query IndexPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				banner {
					heading
					subheading
					callToAction
        }
        featured {
          heading
          callToAction
          reactive {
            heading
            content
          }
          proactive {
            heading
            content
          }
        }
			}
    }
    allSolutionsJson {
      edges {
        node {
          id
          name
          description
        }
      }
    }
	}
`