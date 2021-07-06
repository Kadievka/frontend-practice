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
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    Welcome to your dashboard
                </div>
                <div className="navbar-toggler">
                <button className="btn btn-info buttons-nav-bar" onClick={()=>this.goToPhotos()}>
                    Photos <FontAwesomeIcon icon={faImage} />
                </button>
                <button className="btn btn-info buttons-nav-bar" onClick={()=>this.goToPosts()}>
                    Posts <FontAwesomeIcon icon={faNewspaper} />
                </button>
                <button className="btn btn-primary" onClick={()=>this.logout()}>
                    Logout <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
                </div>
            </nav>
        );
    }
}

export default Header;