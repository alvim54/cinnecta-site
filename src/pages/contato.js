import React from 'react';

const sendform = ({ name, company, email, phone, message }) => {
	
}

const ContatoPage = () => (
	<div className="main">
		<section className="contact-section">
			<div className="large-12 contact-intro text-center cell">
				<h2>Vamos tomar um café?</h2>
				<p>Agende a visita de um consultor e vamos conversar sobre como melhorar o seu negócio</p>
			</div>
			<div className="grid-container">
				<div className="grid-x grid-margin-x">
					<div className="large-8 cell">
						<form className="contact-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  							<input type="hidden" name="form-name" value="contact" />
							<div className="grid-x grid-margin-x">
								<div className="medium-6 cell">
									<input type="text" placeholder="Nome:" />
								</div>
								<div className="medium-6 cell">
									<input type="text" placeholder="Empresa:" />
								</div>
								<div className="medium-6 cell">
									<input type="text" placeholder="E-mail:" />
								</div>
								<div className="medium-6 cell">
									<input type="text" placeholder="Telefone:" />
								</div>
								<div className="medium-12 cell">
									<textarea type="text" placeholder="Mensagem:" />
								</div>
								<div className="medium-12 text-right cell">
									<button type="submit" className="secondary large button">Enviar</button>
								</div>
							</div>
						</form>
					</div>
					<div className="large-4 contact-info cell">
						<h6>Telefone:</h6>
						+55 31 3245 1937
						<h6>E-mail:</h6>
						<a href="mailto:comercial@cinnecta.com">comercial@cinnecta.com</a>
						<h6>Endereço</h6>
						Rua Alagoas, 1314 - sl 816 - Belo Horizonte/MG - CEP 30130-160
					</div>
				</div> 
    	</div>
		</section>
	</div>
)

export default ContatoPage;