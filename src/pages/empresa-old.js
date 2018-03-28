import React from 'react';
import Link from 'gatsby-link';
import WhitePaperForm from '../components/WhitePaperForm';

const EmpresaPage = () => (
    <div className="content">
        <section className="company-header">
			<h3 className="text-center">Quanto maior o <strong>conhecimento sobre seu cliente</strong>, maior o valor que você será capaz de entregar</h3>
		</section>
        <section className="company-page">
            <div className="grid-container">
                <p>A Cinnecta é uma empresa de tecnologia especializada em Gerenciamento de Comportamento do Usuário para canais digitais móveis. Fornecemos soluções inovadoras que permitem às empresas ter visibilidade sobre o Perfil de Uso e Experiência do seus clientes por meio do monitoramento do uso de smartphones, proporcionando o aumento do Engajamento e da Retenção.</p>
                <p>Entendemos que a forma como as pessoas interagem com seu smartphone revela seus interesses, poder aquisitivo e perfil de consumo. Ter visibilidade sobre esses aspectos é um dos grandes desafios para empresas. A Cinnecta fornece soluções que permitem conhecer profundamente o cliente através da analise de dados de comportamento e de geolocalização.</p>
            </div>
        </section>
        <section className="call-to-action-bar">
			<div className="text-center grid-container">
				<h4>Quer trabalhar em uma empresa super inovadora, com um time de alta performance com tecnologia de ponta?</h4>
				<Link to="/carreira" className="light button">Trabalhe conosco</Link>
			</div>
		</section>
        <WhitePaperForm />
    </div>
)

export default EmpresaPage;