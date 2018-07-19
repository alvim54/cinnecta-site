import React, { Component } from "react"
import * as PropTypes from "prop-types"
import favicon16 from '../assets/img/favicon-16x16.png';
import favicon32 from '../assets/img/favicon-32x32.png';
import favicon96 from '../assets/img/favicon-96x96.png';

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html op="news" lang="pt-br">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Site da Cinnecta do Brasil"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:title" content="Cinnecta" />
          <meta property="og:image" content="https://raw.githubusercontent.com/alvim54/cinnecta-site/master/assets/img/sn-image.jpg" />
          <meta property="og:type" content="company" />
          <meta property="og:description" content="A Cinnecta é uma empresa de tecnologia especializada em Gerenciamento de Comportamento do Usuário para canais digitais móveis. Fornecemos soluções inovadoras que permitem às empresas ter visibilidade sobre o Perfil de Uso e Experiência do seus clientes por meio do monitoramento do uso de smartphones, proporcionando o aumento do Engajamento e da Retenção." />
          <title>Cinnecta</title>
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html