import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    // LETS YOU CLOSE THE PAGES
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        
{/* INTRODUCTION PAGE */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Vladimir Romero</h2>
          <span className="image main">
            <img class="vlad" src={'https://cdn1.iconfinder.com/data/icons/finance-1-3/128/4-512.png'} alt="Author"/>
          </span>
          <p>
           Motivated individual with experience in technology and construction. 
           Currently in a Fellowship with Road To Hire, which is a rigorous fast-paced environment for professional and technological training. 
           Experiences with technologies such as HTML, CSS, React.js, Node.js, JavaScript, MySQL, Git, Github, Jest.
            {/* <a href="#work"> Projects</a>. */}
          </p>
          <p>
            Dedicated individual with technical skills seeking to fill the gaps in my knowledge to further enhance front and back-end web development to succeed in the workplace environment.
          </p>
           <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/vladromero/" className="icon fa-linkedin">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          
          {close}

{/* PROJECTS PAGE */}
        </article>
{/* FIRST */} <br/><br/>
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Gateway Project v1.0</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is my first iteration of my gateway project. 
            I built a website based on Singapore with link providing you with information, activities, professions and a contact form.
            <br/>
            Codepen was used to code this project. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://codepen.io/VladRomero/project/full/ZokOjQ" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/VladRomero/project/editor/ZokOjQ" className="icon fa-codepen">
                <span className="label">CodePen</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* SECOND */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Gateway Revision v2.0</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is my second iteration of my gateway project. 
            It is the same as my first iteration with the exception that it has been revised and formatted to become more HTML semantic. 
            <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://gatewaysingapore.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/Gateway" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* THIRD */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Hotel App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is a hotel application 
            <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://hotelsite.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/Romero-Hotel" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
  {/* FOURTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Speech Recognition</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            A Speech Recognition Guessing Game API
            <br/>
            It takes in whatever number you speak into the microphone and outputs it into the screen.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://speechrecognitions.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/speechRecognition" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* FIFTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Animated Navbar</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
           <p>
            This is an animated navigation bar.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://animatednavbars.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/animatedNavbar" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* SIXTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Pokemon App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is a pokemon application built with reactjs hooks.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://pokemonapps.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/Pokemon-App" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* SEVENTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Weather App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            My weather App will go here TBD.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* EIGTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Github Page Locator</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is a github page locator application.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://github-locator.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/react-github-cards" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
{/* NINTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">To-Do</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This is a To-Do List application that will create a list for you as you input the information.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://todolistsapp.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/TodoList-App" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>

{/* TENTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Tic-Tac-Toe </h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
             This is a tic-tac-toe game application for you to enjoy playing with a friend.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://tictactoegameapps.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/Tictactoe-App" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>

{/* ELEVENTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">E-Commerce Static </h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
             This is my first iteration of my e-commerce webpage. It is static.
          <br/>
            The source code is in Github and the live demo is in 000Webhost. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="http://code-test.site" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Code-7-Classroom/weeklychallenges2020-Vleezy/tree/master/eCommerce" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>

{/* TWELFTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">E-Commerce v1.5</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
             This is my second iteration of an e-commerce website in ReactJS that I am currently working on.

             <br/>
             Currently it is only the products page.
          <br/>
            The source code is in Github and the live demo is in Netlify. 
           
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="https://ecommerce-vlad.netlify.app/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vleezy/react-ecommerce" className="icon fa-github">
                <span className="label">Github Repository</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>

{/* THIRTEENTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Habfriend </h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
             This is a current project I am working on for learning purposes. Based on habbo platform and development.
             <br/>
             I created a project that I am hosting on a VPS with my personal Domain.
             {/* <br/>
             Tools:
             <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>PHP</li>
             <li>JS</li>
             <li>MySQL</li>
             <li>Flash</li>
             <li>VPS</li> */}
          <br/>
            The link to the live beta stage is below. I will not be providing the code. 
          </p>
          <p>
           <ul className="icons">
            <li>
              <a href="http://habfriend.com/" className="icon fa-gamepad">
                <span className="label">Live Demo</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>




{/* ABOUT PAGE */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={'https://github.com/Vleezy/Portfolio/blob/master/logo.png?raw=true'} alt="Logo" />
          </span>
          <p>
            Welcome to my Portfolio {" "} 
            <br/><br/>
            This is a portfolio to showcase some of the projects I have been working on over the course of time.
            I will be uploading projects from my Github Repository as well as netlifying them to create a live demo for anyone to play with.
            all my code will be open source for anyone to practice and learn on.
            <br/> <br/>
            I used GatsbyJs to create this portfolio.
            
          </p>
          {close}
        </article>


{/* CONTACT PAGE */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

{/* SOCIAL MEDIA LINKS */}
          <ul className="icons">
            <li>
              <a href="https://github.com/Vleezy" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vladromero/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/VladRomero/" className="icon fa-codepen">
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
