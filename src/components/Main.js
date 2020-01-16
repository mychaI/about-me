import PropTypes from 'prop-types'
import React from 'react'
import battlestation from '../images/battlestation.png'
import virtualgroove from '../images/virtualgroove.png'
import starfleet from '../images/starfleet.png'
import architecture from '../images/architecture.png'
import tokyo from '../images/tokyo.jpg'
import kyoto from '../images/kyoto.jpg'
import peru from '../images/peru.jpg'


import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

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

	const workSlider = (
	  <AwesomeSlider cssModule={AwesomeSliderStyles}>
		<div data-src={starfleet} />
		<div data-src={virtualgroove} />
		<div data-src={architecture} />
	  </AwesomeSlider>
	);

	const aboutSlider = (
	  <AwesomeSlider cssModule={AwesomeSliderStyles}>
		<div data-src={tokyo} />
		<div data-src={kyoto} />
		<div data-src={peru} />
	  </AwesomeSlider>
	);

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
          <h2 className="major">Posts</h2>
          <span className="image main">
            <img src={battlestation} alt="" />
          </span>
          <p>
            Some articles I've written. </a>.
		  </p>
		  <div className='post'><img className='icon-post graphql' src='/icons/graphql-icon.svg'/><a href='https://dev.to/mychal/a-brief-tour-of-graphql-4lcg'>A Brief Intro to GraphQL</a></div>
		  <div className='post'><img className='icon-post react' src='/icons/react-brands.svg'/>React Hooks</div>
		  <div className='post'><img className='icon-post react' src='/icons/react-brands.svg'/>React Hooks</div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
		    {workSlider}
          </span>
		  <b>Starfleet | CLI tool to generate GraphQL projects from existing MongoDB models</b>
			<div>  ○ Generate GraphQL schema and resolvers with one command from the terminal </div>
			<div>  ○ Deploy projects via Docker containers for rapid development and testing </div>
			<div>  ○ Data-model driven development: start with your MongoDB/Mongoose schemas first and use Starfleet to create an app with CRUD functionality in seconds </div>
			<div>  ○ Reduces the need to write boilerplate and configuration code. Get up and running wth GraphQL instantly </div>
			<br/>
		  <b>VirtualGroove | Streaming music player w/ algorithm-based recommendations</b>
			<div>  ○ Front end UI built using React. State is managed through Redux to avoid prop drilling</div>
			<div>  ○ Client requests pass through a GraphQL gateway which routes to the proper service </div>
			<div>  ○ Auth flow is handled via AWS Lambda. Encrypted user data is stored on DynamoDB </div>
			<div>  ○ Main application is built with a Node.js/Express backend serving a RESTful API </div>
			<div>  ○ Recommendation logic runs on a separate server that communicates with the main app via a RabbitMQ broker. Real-time updates are pushed to the client via Socket.io </div>
			<div>  ○ Data from Spotify's API is stored on a PostgreSQL instance running on AWS RDS </div>
			<br />
		  <b>Campfires | Social-networking site that let's you better tell your story</b>
			<div>  ○ Single-page application that utilizes modular React components and Redux for state </div>
			<div>  ○ Data is stored in a non-relational database for faster development and scaling </div>
			<div>  ○ Authentication is enforced via Passport.js middleware and private route components in conjunction with React router. Sessions are stored via JSON web tokens </div>
			<br />
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
			{aboutSlider}
          </span>
          <p>
		  I build things for the modern web. My main stack is Node.js/Express on the backend and React on the frontend (often with Redux). In the past, I've built microservices connected by RabbitMQ, deployed serverless functions on AWS Lambda, and designed a GraphQL API gateway. Aside from coding, I am an aspiring woodworker, travel photographer, mechanical keyboard enthusiast, camping minimalist, and parent to a rather feisty, but loving dog. I currently reside in Southern California.
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
          <ul className="icons">
            <li>
              <a href="mailto:mychal.es@protonmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
			  <a href="https://linkedin.com/in/mychale" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mychaI"
                className="icon fa-github"
              >
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
