import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> Romero's Portfolio 2020 &copy; | Design: HTML5 UP</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

