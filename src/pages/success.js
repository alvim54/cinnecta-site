import React from 'react';
import Link from 'gatsby-link';

const SuccessPage = () => (
    <div className="content">
        <section className="call-to-action-bar">
			<div className="text-center grid-container">
				<h4>Seu formulário foi enviado com sucesso!</h4>
				<Link to="/contato" className="light button">Voltar</Link>
			</div>
		</section>
    </div>
)

export default SuccessPage;