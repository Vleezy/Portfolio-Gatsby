import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-mortar-board"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Vlad Romero</h1>
        <p>
          Technology Fellow{' '}
          <a href="http://roadtohire.org" alt="RoadToHire">R2H</a> 
          <br />
          Welcome to my online portfolio{' '}
          {/* <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>

    {/* NAVBAR */}
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
