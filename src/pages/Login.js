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
        form:{
            email: '',
            password: '',
            confirmPassword: ''
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
        await axios.post(loginRoute, {
            email: this.state.form.email,
            password: this.state.form.password
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
            email: this.state.form.email,
            password: this.state.form.password,
            confirmPassword: this.state.form.confirmPassword
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
            <div className="mainContainer">
                <div className="form-group form-private-class">
                    <div>
                        <label className="label-login">Email: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control input-with-shadow"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label className="label-login">Password: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control input-with-shadow"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label className="label-login">Confirm Password (Sign Up): </label>
                        <br />
                        <input
                            type="password"
                            className="form-control input-with-shadow"
                            name="confirmPassword"
                            onChange={this.handleChange}
                        />
                        <br />
                        <div className="list-group-horizontal">
                            <button className="btn btn-primary input-with-shadow send-request-button" onClick={()=> this.loginRequest()}>
                                Login <FontAwesomeIcon icon={faHome} />
                            </button>
                            <button className="btn btn-primary input-with-shadow send-request-button" onClick={()=> this.signInRequest()}>
                                Sign Up <FontAwesomeIcon icon={faSignInAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;