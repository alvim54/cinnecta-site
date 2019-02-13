import React, { Component } from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/img/landing-page/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuActive: false
    }
  }
  render() {
    return (
      <header>
        <div className="grid-container">
          <div className="grid-x align-middle">
            <div className="cell small-6 medium-shrink">
              <h1 className="logo">
                <img src={Logo} alt="Cinnecta" title="Cinnecta" />
              </h1>
            </div>
            <div className="cell small-6 medium-auto">

            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;