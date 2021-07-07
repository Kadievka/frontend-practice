import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faImage,
    faNewspaper,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css';

const cookies = new Cookies();
const jwt = cookies.get('jwt');
class Header extends Component {

    logout=()=>{
        if(window.confirm("Are you sure you want to exit?")){
            cookies.remove('userId', {path: "/"});
            cookies.remove('jwt', {path: "/"});
            window.location.href='/';
        }
    }

    goToPhotos=()=>{
        window.location.href="/photos";
    }

    goToPosts=()=>{
        window.location.href="/posts";
    }

    componentDidMount() {
        if(!jwt){
            window.location.href="/";
        }
    }

    render() {
        return (
            <nav className="nav-bar-color navbar navbar-light">
                <div className="navbar-brand">
                    <h2 className="welcome-message">Welcome to your dashboard</h2>
                </div>
                <div className="navbar-toggler">
                <button className="btn btn-info buttons-nav-bar" onClick={()=>this.goToPhotos()}>
                    Photos <FontAwesomeIcon icon={faImage} />
                </button>
                <button className="btn btn-info buttons-nav-bar" onClick={()=>this.goToPosts()}>
                    Posts <FontAwesomeIcon icon={faNewspaper} />
                </button>
                <button className="btn btn-primary buttons-nav-bar" onClick={()=>this.logout()}>
                    Logout <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
                </div>
            </nav>
        );
    }
}

export default Header;