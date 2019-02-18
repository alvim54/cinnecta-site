import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header_old'
import '../styles/app.css'

const PageTemplate = ({ children }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

PageTemplate.propTypes = {
  children: PropTypes.object,
}

export default PageTemplate