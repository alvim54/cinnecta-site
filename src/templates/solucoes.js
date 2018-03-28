import React from 'react';
import Link from 'gatsby-link';
import WhitePaperForm from '../components/WhitePaperForm';
import devicesImage from '../../assets/img/devices.png';
import placeholderImage from '../../assets/img/illustration-placeholder.png';
import imageGestaoExperienciaUsuario from '../../assets/img/solutions/gestao_experiencia_usuario.png';
import imageSocialScoring from '../../assets/img/solutions/social_scoring.png';
import imageEngajamentoPersonalizado from '../../assets/img/solutions/engajamento_personalizado.png';
import imagePredicaoChurn from '../../assets/img/solutions/predicao_churn.png';
import imageGeoFencing from '../../assets/img/solutions/geo_fencing.png';
import imageDeteccaoFraudes from '../../assets/img/solutions/deteccao_fraudes.png';

const SolucoesPage = () => (
	<div className="content">
		<section className="solutions-header">
			<h3 className="text-center">Soluções completas para sua empresa ter a real visibilidade do <strong>comportamento de seu usuário móvel</strong></h3>
			<img src={devicesImage} />
		</section>
		<section className="solutions">
			<div className="grid-container">
				<h4>Veja as principais soluções que a Cinnecta pode fornecer para sua empresa:</h4>
				<article className="solution" id="experiencia">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Gestão de experiência do usuário</h5>
							<p>Com a análise de indicadores de qualidade durante o período de uso do seu aplicativo e análise comparativa com padrões de qualidade de outros apps é possível identificar com precisão se a experiência do seu usuários ao utilizar o seu app é satisfatória ou quais as melhorias devem ser realizadas em sua aplicação para melhorar a experiência do seu usuário.</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imageGestaoExperienciaUsuario} />
						</div>
					</div>
				</article>
				<article className="solution" id="scoring">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Social Scoring</h5>
							<p>Analisando os hábitos do seu usuário, assim como perfil de deslocamento e uso de aplicativos específicos, a solução da Cinnecta atribui um Indicador social específico para cada que indica a sua propensão para consumir determinado produto, serviço ou receber determinado tipo de comunicação</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imageSocialScoring} />
						</div>
					</div>
				</article>
				<article className="solution" id="engajamento">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Engajamento personalizado</h5>
							<p>A solução da Cinnecta permite individualizar a comunicação com os usuários do seu aplicativo, através de uma segmentação personalizada, levando em consideração o perfil de cada usuário. Dessa forma, a solução permite a geração de campanhas personalizadas de engajamento e retenção.</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imageEngajamentoPersonalizado} />
						</div>
					</div>
				</article>
				<article className="solution" id="churn">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Predição de Churn / Retenção</h5>
							<p>A tomada de decisão de um cliente para deixar de consumir um serviço para iniciar um engajamento com o concorrente é previsível e pode ser identificada com antecedência quando avaliamos as variações no perfil a cada dia.</p>
							<p>A Solução da CINNECTA acompanha em tempo real o comportamento do usuário e é capaz de prever, de forma super assertiva, o início do engajamento de seus usuários com algum concorrente, o que permite a geração de campanhas de retenção direcionadas evitando a perda de clientes e aumentando o engajamento dos usuários com a sua plataforma.</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imagePredicaoChurn} />
						</div>
					</div>
				</article>
				<article className="solution" id="fencing">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Geofencing</h5>
							<p>No momento Certo! No Lugar Certo! Gere a comunicação com os usuários do seu aplicativo considerando o perfil individual de cada, o contexto e a geolocalização em tempo real e não perca nenhuma oportunidade de negócio.</p>
							<p>A solução da CINNECTA analisa em tempo real a geolocalização e o comportamento do usuário e, quando ele está em um local de interesse, disponibiliza esta informação para a geração de campanhas.</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imageGeoFencing} />
						</div>
					</div>
				</article>
				<article className="solution" id="fraudes">
					<div className="grid-x">
						<div className="small-12 medium-12 large-7 cell">
							<h5>Detecção e prevenção de fraudes</h5>
							<p>Conhecendo o perfil do usuário e suas atividades no smartphone em tempo real e geolocalizadas, nosso algoritmo é capaz de identificar acessos suspeitos ao seu app, indicando de forma pró-ativa usuários e eventos suspeitos.</p>
						</div>
						<div className="small-12 medium-8 large-5 text-center cell">
							<img src={imageDeteccaoFraudes} />
						</div>
					</div>
				</article>
			</div>
		</section>
		<section className="primary call-to-action-bar">
			<div className="text-center grid-container">
				<h4>Oferecemos a solução ideal para segmentar sua base de usuários móveis, através de uma simples integração com o seu aplicativo.</h4>
				<Link to="/contato" className="light button">Solicite uma demonstração</Link>
			</div>
		</section>
		{/*
		<section className="toppics">
			<div className="grid-container">
				<h3 className="text-center">Suspendisse accumsan, eros nec iaculis rutrum:</h3>   
				<div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Mauris faucibus ex</strong>
							<p>Cras at fringilla nunc. Suspendisse sit amet est non mauris pharetra accumsan.</p>
						</div>
					</div>
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Aenean rhoncus ullamcorper</strong>
							<p>Nunc est lorem, porta nec eleifend venenatis, scelerisque eget ante. Maecenas vitae urna risus.</p>
						</div>
					</div>
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Quisque a varius urna</strong>
							<p>Phasellus iaculis sapien erat, et finibus ex pellentesque ut. Vestibulum volutpat dictum sollicitudin.</p>
						</div>
					</div>
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Suspendisse accumsan</strong>
							<p>Aliquam sit amet nibh scelerisque dolor egestas hendrerit ut at sapien. Morbi ultricies et turpis non vulputate.</p>
						</div>
					</div>
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Maecenas consectetur</strong>
							<p>Fusce posuere mi sed est sagittis mollis. Praesent scelerisque sed leo ac  venenatis dolor eu tempus fringilla.</p>
						</div>
					</div>
					<div className="cell">
						<div className="toppic">
							<i className="icon-robot"></i>
							<strong>Ut eu sollicitudin sem</strong>
							<p>Aenean tempus aliquet mauris eget imperdiet. Curabitur ac venenatis nisl, ac rutrum mi.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		*/}
		<WhitePaperForm />
	</div>
)

export default SolucoesPage;