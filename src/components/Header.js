import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const cookies = new Cookies();
const jwt = cookies.get('jwt');
class Header extends Component {

    logout=()=>{
        cookies.remove('userId', {path: "/"});
        cookies.remove('jwt', {path: "/"});
        window.location.href='./';
    }

    goToPhotos=()=>{
        window.location.href='./photos';
    }

    goToPosts=()=>{
        window.location.href='./posts';
    }

    componentDidMount() {
        if(!jwt){
            window.location.href="./";
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    Welcome to your dashboard
                </div>
                <button className="btn btn-info" onClick={()=>this.goToPhotos()}>Photos</button>
                <button className="btn btn-info" onClick={()=>this.goToPosts()}>Posts</button>
                <button className="btn btn-primary" onClick={()=>this.logout()}>Logout</button>
            </nav>
        );
    }
}

export default Header;