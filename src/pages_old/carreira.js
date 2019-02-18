import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import { phoneMask } from '../components/utils/phoneMask';

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
						<form className="contact-form" name="carreiras" method="post" data-netlify="true" action="/success" data-netlify-honeypot="bot-field">
							<input type="hidden" name="form-name" value="carreiras" />
							<div className="grid-x grid-margin-x">
								<div className="small-12 cell">
									<div className="grid-x grid-margin-x">
										<div className="medium-12 large-4 cell">
											<input type="text" name="nome" placeholder="Nome:" required />
										</div>
										<div className="medium-6 large-4 cell">
											<input type="text" name="email" placeholder="E-mail:" required />
										</div>
										<div className="medium-6 large-4 cell">
											<input type="text" name="atuacao" placeholder="Área de atuação:" required />
										</div>
										<div className="medium-8 cell">
											<input type="text" name="linkedin" placeholder="LinkedIn:" required />
										</div>
										<div className="medium-4 cell">
											<MaskedInput
												type="tel"
												name="telefone"
												mask={input => phoneMask(input)}
												placeholder="Telefone:"
												guide={false}
												required
											/>
										</div>
										<div className="medium-12 cell">
											<textarea type="text" name="mensagem" placeholder="Mensagem:" required />
										</div>
									</div>
								</div>
								{/*
								<label className="file button">
									<i className="icon-paperclip"></i> { this.state.uploadFileName }
									<input type="file" name="cv" onChange={ e => this.onSelectFileForUpload(e) } className="show-for-sr" />
								</label>
								*/}
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