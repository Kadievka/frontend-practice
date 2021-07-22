import React, { Component } from 'react';
import '../css/NotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDizzy, faGrinBeamSweat
} from '@fortawesome/free-solid-svg-icons';
class NotFound extends Component {

    render() {
        return (
            <div className="not-found-page">
                <h2 className="not-found-message">
                  <FontAwesomeIcon icon={faDizzy} style={{color: 'yellow'}} /> 404 Not Found <FontAwesomeIcon icon={faGrinBeamSweat} style={{color: 'yellow'}}/>
                </h2>
                <p className="enjoy-text">Enjoy a game!</p>
                <iframe 
                  title="pacman-mini-game"
                  src="https://www.retrogames.cc/embed/9409-pac-man-plus.html"
                  width="100%"
                  height="450"
                  frameborder="no"
                  allowfullscreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  scrolling="no"></iframe>
                <button className="btn btn-outline-primary go-to-home-text">
                  <Link to="/" style= {{textDecoration: 'none'}}>Go to home</Link>
                </button>
            </div>
        );
    }
}

export default NotFound;