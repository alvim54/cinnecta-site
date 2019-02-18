import React from 'react'

const NewsletterForm = () => (
  <section className="">
    <div className="grid-container">
      <form name="newsletter" method="post" data-netlify="true" action="/success" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter" />
        <p className="landing-page__text">Registre seu e-mail para receber novidades</p>
        <div className="grid-x align-middle">
          <div className="auto cell">
            <input type="text" className="landing-page__input" name="email" placeholder="Por favor, insira aqui o seu e-mail." required />
          </div>
          <div className="shrink cell">
            <button type="submit" className="button landing-page__button">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default NewsletterForm;