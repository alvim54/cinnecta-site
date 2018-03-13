import React from 'react';

const WhitePaperForm = () => (
	<section className="white-papper-form">
		<div className="grid-container text-center">
			<form name="whitepaper" method="post" data-netlify="true" action="/success" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="whitepaper" />
				<div className="grid-x grid-padding-x">
					<div className="small-12 cell">
						<h3>Quer saber mais?</h3>
						<p>Preencha o formulário e baixe nosso material</p>
					</div>
					<div className="small-12 medium-6 cell">
						<input type="text" name="nome" placeholder="Nome" />
					</div>
					<div className="small-12 medium-6 cell">
						<input type="text" name="empresa" placeholder="Empresa" />
					</div>
					<div className="small-12 medium-6 cell">
						<input type="text" name="email" placeholder="E-mail" />
					</div>
					<div className="small-12 medium-6 cell">
						<input type="text" name="telefone" placeholder="Telefone" />
					</div>
				</div>
				<button type="submit" className="call-to-action button">Quero receber material exclusivo</button>
			</form>
		</div>
	</section>
);

export default WhitePaperForm;