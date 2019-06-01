import React from 'react';
import profile from '../../images/alain.JPG';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
        <div className="container v-centered">
          <div className="columns">
            <div className="column has-text-centered">
                <img src={profile} alt="My profile picture" className="profile-image"/>
            </div>
            <div className="column">
              <h1 className="title is-1">I am Alain Burindi</h1>
              <h3 className="title is-5">Software Engineer -2 Years</h3>
              <hr/>

              <p className="about-me">
                  A backend developer, who love building projects
              </p>
              <div className="columns">
                <div className="column">
                  <Link to="/resume" className="button is-info is-large is-fullwidth">RESUME</Link>
                </div>
                <div className="column">
                  <Link to="/contact" className="button is-info is-large is-fullwidth">CONTACT</Link>
                </div>
              </div>
              <p className="social-icons">
                  <a href="https://github.com/alainburindi" target="_blank"
                   className="social-icon" rel="noopener noreferrer">
                   <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com/alainburindi" target="_blank"
                   className="social-icon" rel="noopener noreferrer">
                   <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://facebook.com/alainburindi" target="_blank"
                   className="social-icon" rel="noopener noreferrer">
                   <i className="fab fa-facebook"></i>
                  </a>
              </p>
            </div>
          </div>
          
        </div>
    </div>
  </div>
);

export default Home;