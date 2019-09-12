import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import context from "../DataProvider";
import {Redirect} from 'react-router-dom';


class AuthenticationNavBar extends Component {

    state = {
        redirect: false,
        url:""
    };

redirectToLogin = () => {
    this.setState({url:"/login"});
    this.setState({redirect: true});
};

redirectToRegistration = () => {
    this.setState({url:"/registration"});
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
            <div className="navbar">
                {this.renderRedirect()}
                <Button className="btn gomb  d-flex justify-content-center" variant="outline-info"
                        onClick={this.redirectToLogin}>Login</Button>
                <Button className="btn gomb  d-flex justify-content-center registrationbtn" variant="outline-info"
                        onClick={this.redirectToRegistration}>Registration</Button>
            </div>
        )
    }
}

AuthenticationNavBar.contextType = context;
export default AuthenticationNavBar;