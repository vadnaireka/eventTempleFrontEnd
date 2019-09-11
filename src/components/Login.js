import React, {Component} from "react";
import context from "../DataProvider";
import axios from "axios";


class Login extends Component {
    state = {
        username : "",
        password : ""
    };

    onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/validation/${this.props.auth}`, {
            username: this.state.username,
            password: this.state.password
        }).then(
            this.context.fetchData(`http://localhost:8080/validation/${this.props.auth}`, "userdata")
        );

    };

    render() {
        return (
            //<context.Consumer>
            <div className="loginpage">
                <h4 className="loginheader">{this.props.header}</h4>
                <form className="login-form" onSubmit={this.onSubmit}>
                    <input className="auth-input" type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="User Name"/><br/>
                    <input className="auth-input" type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password"/><br/>
                    <input type="submit"  value={this.props.auth}/>
                </form>
            </div>
            //</context.Consumer>
        )
    }
}

Login.contextType = context;

export default Login;