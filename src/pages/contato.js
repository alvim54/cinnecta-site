import React, { Component } from 'react';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

  class ContatoPage extends Component{
	  constructor(props) {
		super(props);
		this.state = {};
	  }
	
	  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	  }
	
	  handleSubmit = e => {
		fetch("/", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: encode({ "form-name": "contato", ...this.state })
		})
		  .then(() => alert("Sucesso!"))
		  .catch(error => alert(error));
	
		e.preventDefault();
	  };

	render() {
		return (
			<div className="main">
				<section className="contact-section">
					<div className="large-12 contact-intro text-center cell">
						<h2>Vamos tomar um café?</h2>
						<p>Agende a visita de um consultor e vamos conversar sobre como melhorar o seu negócio</p>
					</div>
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="large-8 cell">
								<form className="contact-form" name="contato" method="post" data-netlify="true" action="/success" onSubmit={this.handleSubmit} data-netlify-honeypot="bot-field">
									<input type="hidden" name="bot-field" />
									<div className="grid-x grid-margin-x">
										<div className="medium-6 cell">
											<input type="text" name="nome" placeholder="Nome:" onChange={this.handleChange} />
										</div>
										<div className="medium-6 cell">
											<input type="text" name="empresa" placeholder="Empresa:" onChange={this.handleChange} />
										</div>
										<div className="medium-6 cell">
											<input type="text" name="email" placeholder="E-mail:" onChange={this.handleChange} />
										</div>
										<div className="medium-6 cell">
											<input type="text" name="telefone" placeholder="Telefone:" onChange={this.handleChange} />
										</div>
										<div className="medium-12 cell">
											<textarea type="text" name="mensagem" placeholder="Mensagem:" onChange={this.handleChange} />
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
	}
}

export default ContatoPage;