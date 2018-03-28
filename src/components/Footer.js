import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/img/logo.png';

const Footer = () => (
	<footer>
		<div className="grid-container">
			<div className="grid-x grid-padding-x">
				<div className="small-12 medium-4 large-6 cell">
					<img src={Logo} />
					<p>
						® Cinnecta do Brasil Ltda.<br />
						Rua Alagoas, 1314 - sl 816 - Belo Horizonte/MG
					</p>
					<p>
						Fale com um consultor:<br />
						<strong className="phone-number">+55 31 3245 1937</strong>
					</p>
					<a href="mailto:cinnecta@cinnecta.com">cinnecta@cinnecta.com</a>
				</div>
				<div className="small-12 medium-auto cell">
					<nav className="footer-nav">
						<h6>Soluções</h6>
						<ul>
							<li><Link to="/solucoes#experiencia">Gestão de Experiência do usuário</Link></li>
							<li><Link to="/solucoes#engajamento">Engajamento Personalizado</Link></li>
							<li><Link to="/solucoes#fraudes">Detecção e prevenção de fraudes</Link></li>
							<li><Link to="/solucoes#churn">Predição de Churn / Retenção</Link></li>
							<li><Link to="/solucoes#fencing">Geofencing</Link></li>
							<li><Link to="/solucoes#scoring">Social Scoring</Link></li>
						</ul>
					</nav>
				</div>
				<div className="small-12 medium-shrink cell">
					<nav className="footer-nav">
						<h6>Cinnecta</h6>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/empresa/">Quem somos</Link></li>
							{/*<li><Link to="/tecnologia/">Tecnologia</Link></li>*/}
							<li><Link to="/contato/">Contato</Link></li>
							<li><Link to="/carreira/">Trabalhe conosco</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer;