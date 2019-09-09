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
        axios.post(`http://localhost:8080/validation/login`, {
            userName: this.state.username,
            password: this.state.password
        });

    };

    render() {
        return (
            //<context.Consumer>
                <form className="login-form" onSubmit={this.onSubmit}>
                    <input type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="User Name"/>
                    <input type="text" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password"/>
                    <input type="submit" value="Submit"/>
                </form>
            //</context.Consumer>
        )
    }
}

//Login.contextType = context;

export default Login;