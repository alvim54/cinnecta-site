import React, { Component } from 'react';

class CarreiraPage extends Component {
	constructor() {
		super();
		this.state = {
			uploadFileName: 'Anexar currículo',
		}
	}
	onSelectFileForUpload(e) {
		let uploadFileName = e.target.value.split( '\\' ).pop();
		console.log(uploadFileName);
		if(uploadFileName) {
			this.setState({ uploadFileName })
		}
	}

	render() {
		return (
			<div className="main">
				<section className="contact-section">
					<div className="large-12 career-header text-center cell">
						<h2>Trabalhe conosco</h2>
						<p>Quer trabalhar em uma empresa super inovadora, com um time de alta performance com tecnologia de ponta?</p>
					</div>
					<div className="grid-container">
						<div className="grid-x grid-padding-x career-bullets">
							<div className="small-12 medium-4 cell">
								<h5>Time de Alta Performance</h5>
								<p>Trabalhamos com tecnologia de Ponta, incluindo Big Data, Analytics, Inteligência Artificial, Desenvolvimento Móvel e Web.</p>
							</div>
							<div className="small-12 medium-4 cell">
								<h5>Ambiente descontraído</h5>
								<p>Escritórios em BH e São Paulo.</p>
							</div>
							<div className="small-12 medium-4 cell">
								<h5>Empresa em rápida ascensão</h5>
								<p>Startup de destaque no cenário nacional presente na operação de várias entre as mais importantes empresas de grande porte no Brasil.</p>
							</div>
						</div>
						<h6>Envie seu currículo para <a className="default" href="mailto:jobs@cinnecta.com">jobs@cinnecta.com</a> ou preencha o formulário abaixo:</h6>
						<form className="contact-form">
							<div className="grid-x grid-margin-x">
								<div className="large-8 cell">
									<div className="grid-x grid-margin-x">
										<div className="medium-6 cell">
											<input type="text" placeholder="Nome:" />
										</div>
										<div className="medium-6 cell">
											<input type="text" placeholder="E-mail:" />
										</div>
										<div className="medium-12 cell">
											<input type="text" placeholder="LinkedIn:" />
										</div>
										<div className="medium-12 cell">
											<textarea type="text" placeholder="Mensagem:" />
										</div>
									</div>
								</div>
								<div className="large-4 contact-info cell">
									<select>
										<option disabled="disabled" selected="selected">Área de atuação</option>
										<option>Atendimento ao cliente</option>
										<option>Desenvolvimento (front-end)</option>
										<option>Desenvolvimento (back-end)</option>
										<option>Desenvolvimento (mobile)</option>
									</select>
									<input type="tel" placeholder="Telefone:" />
									<label className="file button">
										<i className="icon-paperclip"></i> { this.state.uploadFileName }
										<input type="file" onChange={ e => this.onSelectFileForUpload(e) } className="show-for-sr" />
									</label>
								</div>
								<div className="small-12 text-center cell">
									<button type="submit" className="secondary large button">Enviar</button>
								</div>
							</div> 
						</form>
					</div>
				</section>
			</div>
		)
	}
}

export default CarreiraPage;