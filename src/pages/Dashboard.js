import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from '../components/PostsList';

const cookies = new Cookies();
const jwt = cookies.get('jwt');
class Dashboard extends Component {

    logout=()=>{
        cookies.remove('userId', {path: "/"});
        cookies.remove('jwt', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!jwt){
            window.location.href="./";
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="navbar-brand">
                        Welcome to your dasboard with posts and photos
                    </div>
                    <button className="btn btn-primary" onClick={()=>this.logout()}>Logout</button>
                </nav>
                <PostsList/>
                <div></div>
            </div>
        );
    }
}

export default Dashboard;