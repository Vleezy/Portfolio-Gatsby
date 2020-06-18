import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
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
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
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


        </article>
{/* FIRST */} <br/><br/>
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gateway Project</h2>
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
              <a href="https://codepen.io/VladRomero/project/full/ZokOjQ" className="icon fa-diamond">
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
          style={{ display: 'none' }}
        >
          <h2 className="major">Gateway Revision v2</h2>
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
              <a href="https://gatewaysingapore.netlify.app/" className="icon fa-diamond">
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
          style={{ display: 'none' }}
        >
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
              <a href="https://hotelsite.netlify.app/" className="icon fa-diamond">
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
          style={{ display: 'none' }}
        >
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
              <a href="https://speechrecognitions.netlify.app/" className="icon fa-diamond">
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
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
{/* SIXTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
{/* SEVENTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
{/* EIGTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
{/* NINTH */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>


        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
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



        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
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
              <a href="https://twitter.com/" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" className="icon fa-instagram">
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
