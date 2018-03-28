import React from 'react';
import Link from 'gatsby-link';
import WhitePaperForm from '../components/WhitePaperForm';

export const EmpresaPageTemplate = ({ heading, description }) => (
  <div className="content">
    <section className="company-header">
      <h3 className="text-center" dangerouslySetInnerHTML={{__html: heading }}></h3>
    </section>
    <section className="company-page">
        <div className="grid-container" dangerouslySetInnerHTML={{__html: description }}></div>
    </section>
    <section className="call-to-action-bar">
      <div className="text-center grid-container">
        <h4>Quer trabalhar em uma empresa super inovadora, com um time de alta performance com tecnologia de ponta?</h4>
        <Link to="/carreira" className="light button">Trabalhe conosco</Link>
      </div>
    </section>
    <WhitePaperForm />
  </div>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <EmpresaPageTemplate
      heading = {frontmatter.heading}
      description = {frontmatter.description}
    />
  )
}
  
export const productPageQuery = graphql`
  query EmpresaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`