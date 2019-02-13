import React from 'react';
import Link from 'gatsby-link';
import cinnectaIcon from '../../assets/img/landing-page/icon.png'

const SuccessPage = () => (
    <div className="content">
        <section className="call-to-action-bar" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
					<div className="text-center grid-container">
						<img src={cinnectaIcon} style={{ width: '5rem', marginBottom: '3rem'}} />
						<h4>Seu formulário foi enviado com sucesso!</h4>
						<Link to="/" className="button">Voltar</Link>
					</div>
			</section>
    </div>
)

export default SuccessPage;