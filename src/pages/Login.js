import React, {Component} from "react";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHome,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

const userRoute = apiConstants.API_URL + apiConstants.USER
const loginRoute = userRoute + apiConstants.LOGIN;
const cookies = new Cookies();
const errorMessage = (message)=> new Error(message || 'Please, verify the inputs you are sending in the form');

class Login extends Component {
    state={
        loginForm:{
            email: '',
            password: ''
        },
        registerForm:{
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleRegisterChange= async e=>{
        await this.setState({
            registerForm:{
                ...this.state.registerForm,
                [e.target.name]: e.target.value
            }
        });
    }

    handleLoginChange= async e=>{
        await this.setState({
            loginForm:{
                ...this.state.loginForm,
                [e.target.name]: e.target.value
            }
        });
    }

    loginRequest = async()=>{
        await axios.post(loginRoute, {
            email: this.state.loginForm.email,
            password: this.state.loginForm.password
        }).then((response)=>{
            if(response.data.success && response.data.data){
                const data = response.data.data;
                cookies.set('userId', data._id, {path: "/"});
                cookies.set('jwt', data.jwt, {path: "/"});
                window.location.href="./posts";
            }else{
                throw errorMessage;
            }
        }).catch((error)=>{
            const message = error.response.data.message;
            alert(errorMessage(message));
        });
    }

    signInRequest = async()=>{
        await axios.post(userRoute, {
            email: this.state.registerForm.email,
            password: this.state.registerForm.password,
            confirmPassword: this.state.registerForm.confirmPassword
        }).then((response)=>{
            if(response.data.success && response.data.data){
                const data = response.data.data;
                alert(`Success!! registered email: ${data.email}`);
            }else{
                throw errorMessage;
            }
        }).catch((error)=>{
            const message = error.response.data.message;
            alert(errorMessage(message));
        });
    }

    componentDidMount() {
        if(cookies.get('jwt')){
            window.location.href="./posts";
        }
    }

    render(){
        return (
            <div className="container mainContainer ">
                <div className="row secondContainer">
                    <div className="col-md-5 form-group form">
                        <label>Email: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={this.handleRegisterChange}
                        />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleRegisterChange}
                        />
                        <br />
                        <label>Confirm Password: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            onChange={this.handleRegisterChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={()=> this.signInRequest()}>
                            Sing In <FontAwesomeIcon icon={faSignInAlt} />
                        </button>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 form-group form">
                        <label>Email: </label>
                        <br />
                        <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.handleLoginChange}
                        />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleLoginChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={()=> this.loginRequest()}>
                            Login <FontAwesomeIcon icon={faHome} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;