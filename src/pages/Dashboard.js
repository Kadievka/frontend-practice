import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const cookies = new Cookies();

class Dashboard extends Component {
    logout=()=>{
        cookies.remove('userId', {path: "/"});
        cookies.remove('jwt', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('jwt')){
            window.location.href="./";
        }
    }

    render() {
        return (
            <div>
                <h2>My Posts and Photos</h2>
                <br />
                <button className="btn btn-primary" onClick={()=>this.logout()}>Logout</button>
            </div>
        );
    }
}

export default Dashboard;