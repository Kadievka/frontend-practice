import React, {Component} from "react";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import Cookies from 'universal-cookie';

const baseUrl = apiConstants.API_URL + apiConstants.USER + apiConstants.LOGIN;
const cookies = new Cookies();
const invalidUserError = new Error('Invalid email or password');

class Login extends Component {
    state={
        form:{
            email: '',
            password: ''
        }
    }

    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    loginRequest = async()=>{
        try {
            const response = await axios.post(baseUrl, {
                email: this.state.form.email,
                password: this.state.form.password
            });
            if(response.data.success && response.data.data){
                const data = response.data.data;
                cookies.set('userId', data._id, {path: "/"});
                cookies.set('jwt', data.jwt, {path: "/"});
                window.location.href="./posts";
            }else{
                throw invalidUserError;
            }
        } catch (error) {
            alert(invalidUserError);
        }
    }

    componentDidMount() {
        if(cookies.get('jwt')){
            window.location.href="./posts";
        }
    }

    render(){
        return (
            <div className="mainContainer">
                <div className="secondContainer">
                <div className="form-group">
                    <label>Email: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.handleChange}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={()=> this.loginRequest()}>Login</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;