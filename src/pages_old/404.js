import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div className="main">
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="small-12 text-center cell">
          <h1>Página não existe</h1>
          <p>Volte para a <Link to="/">página inicial</Link></p>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
