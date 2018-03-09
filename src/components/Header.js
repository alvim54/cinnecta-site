import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/img/logo.png';

const Header = () => (
  <header>
    <div className="grid-x align-middle">
      <div className="cell small-6 medium-shrink">
        <h1 className="logo">
        <Link to="/"><img src={Logo} alt="Cinnecta" title="Cinnecta" /></Link>
        </h1>
      </div>
      <div className="cell small-6 medium-auto">
        <nav className="main-menu">
            <div className="toggle-menu">
              <div className="active-status">
                <i className="icon-close"></i>
              </div>
              <div className="disabled-status">
                Menu <i className="icon-menu"></i>
              </div>
            </div>
            <ul>
              <li><Link to="/empresa/">Empresa</Link></li>
              {/*<li><Link to="/tecnologia/">Tecnologia</Link></li>*/}
              <li>
                <Link to="/solucoes/">Soluções <i className="icon-angle-down show-for-large"></i></Link>
                <ul>
                  <li><Link to="/solucoes#experiencia">Gestão de Experiência do usuário</Link></li>
                  <li><Link to="/solucoes#engajamento">Engajamento Personalizado</Link></li>
                  <li><Link to="/solucoes#fraudes">Detecção e prevenção de fraudes</Link></li>
                  <li><Link to="/solucoes#churn">Predição de Churn / Retenção</Link></li>
                  <li><Link to="/solucoes#fencing">Geofencing</Link></li>
                  <li><Link to="/solucoes#scoring">Social Scoring</Link></li>
                </ul>
              </li>
              <li><Link to="/contato/">Contato</Link></li>
            </ul>
          </nav>
      </div>
      <div className="cell shrink show-for-large">
        <Link to="/contato/">Solicite uma demonstração</Link>
      </div>
    </div>
  </header>
);

export default Header;