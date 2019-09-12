import React, {Component} from "react";
import context from "../DataProvider";
import axios from "axios";
import {Redirect} from 'react-router-dom';



class Login extends Component {
    state = {
        username: "",
        password: "",
        redirect: false
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/validation/${this.props.auth}`, {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            console.log(localStorage.getItem("token"));
            this.context.setUser(response.data.username)
            }
        );
        this.redirectToUrl("/about");

    };

    redirectToUrl = (url) => {
        this.setState({url:url});
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={this.state.url}/>
        }
    };


    render() {
        return (
            //<context.Consumer>
            <div className="loginpage">
                {this.renderRedirect()}
                <h4 className="loginheader">{this.props.header}</h4>
                <form className="login-form" onSubmit={this.onSubmit}>
                    <input className="auth-input" type="text" name="username" onChange={this.onChange}
                           value={this.state.username} placeholder="User Name"/><br/>
                    <input className="auth-input" type="password" name="password" onChange={this.onChange}
                           value={this.state.password} placeholder="Password"/><br/>
                    <input className="auth-input" type="submit" value={this.props.auth}/>
                </form>
                <p className="loginfooter"><a className="link" href="/registration"> {this.props.footer}</a></p>
            </div>
            //</context.Consumer>
        )
    }
}

Login.contextType = context;

export default Login;