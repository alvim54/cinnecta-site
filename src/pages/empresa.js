import React from 'react';
import Link from 'gatsby-link';
import WhitePaperForm from '../components/WhitePaperForm';

const EmpresaPage = () => (
    <div className="content">
        <section className="company-header">
			<h3 className="text-center">Nunc mollis elit quis <strong>porta tincidunt</strong>. Suspendisse accumsan, eros nec iaculis rutrum</h3>
		</section>
        <section className="company-page">
            <div className="grid-container">
                <p>A forma como as pessoas interagem com seu smartphone revela seus interesses, poder aquisitivo e perfil de consumo. Ter a visibilidade sobre esses aspectos é um dos grandes desafios para empresas, e experiências negativas são frequentemente geradas através de campanhas fora do contexto do usuário. A CINNECTA oferece a visibilidade do perfil de cada usuário, a partir do monitoramento do uso de aplicativos e geolocalização.</p>
                <p>A Cinnecta é uma empresa de tecnologia especializada em Gerenciamento de Comportamento do Usuário para canais digitais móveis e fornece uma solução inovadora que permite dar visibilidade sobre o Perfil de Uso e Experiência do Usuário através do monitoramento do uso de smartphones, com o objetivo de aumentar Engajamento e Retenção.</p>
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