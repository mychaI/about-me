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
          <h2 className="major">Posts</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Some articles I've written. Be sure to check out some of my <a href="#work">other work</a>.
		  </p>
		  <div className='post'><img className='icon-post graphql' src='/icons/graphql-icon.svg'/>A Brief Intro to GraphQL</div>
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
            <img src={pic02} alt="" />
          </span>
		  <b>Starfleet | CLI tool to generate GraphQL projects from existing MongoDB models</b>
			<div>  ○ Frontend UI built with React. State management is handled with Redux </div>
			<div>  ○ Client requests are routed through a GraphQL API gateway. </div>
			<div>  ○ Authentication is handled via AWS Lambda functions. Encrypted user data is stored on DynamoDB. </div>
			<div>  ○ Main application is built with a Node.js/Express backend </div>
			<div>  ○ Recommendation logic runs on a separate server that communicates with the main app via a RabbitMQ message broker. </div>
			<div>  ○ Data from Spotify's API is stored on a PostgreSQL instance running on AWS RDS </div>
			<br/>
		  <b>VirtualGroove | Streaming music player w/ algorithm-based recommendations</b>
			<div>  ○ Frontend UI built with React. State management is handled with Redux </div>
			<div>  ○ Client requests are routed through a GraphQL API gateway. </div>
			<div>  ○ Authentication is handled via AWS Lambda functions. Encrypted user data is stored on DynamoDB. </div>
			<div>  ○ Main application is built with a Node.js/Express backend </div>
			<div>  ○ Recommendation logic runs on a separate server that communicates with the main app via a RabbitMQ message broker. </div>
			<div>  ○ Data from Spotify's API is stored on a PostgreSQL instance running on AWS RDS </div>
			<br />
		  <b>Campfires | Social-networking site that let's you better tell your story</b>
			<div>  ○ Frontend UI built with React. State management is handled with Redux </div>
			<div>  ○ Client requests are routed through a GraphQL API gateway. </div>
			<div>  ○ Authentication is handled via AWS Lambda functions. Encrypted user data is stored on DynamoDB. </div>
			<div>  ○ Main application is built with a Node.js/Express backend </div>
			<div>  ○ Recommendation logic runs on a separate server that communicates with the main app via a RabbitMQ message broker. </div>
			<div>  ○ Data from Spotify's API is stored on a PostgreSQL instance running on AWS RDS </div>
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
            <img src={pic03} alt="" />
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
