import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import context from "../DataProvider";
import {Redirect} from 'react-router-dom';
import Signout from "./Signout";

class Greeting extends Component {

    state = {

    };




render() {
    return (
        <context.Consumer>
            {({user}) => (
            <div className="navbar">
            <h4 className="greeting">Hello, {user}!</h4>
            <Signout/>
            {/*<Button className="btn gomb  d-flex justify-content-center" variant="outline-info"*/}
            {/*        onClick={this.redirectToLogin}>Login</Button>*/}
            {/*<Button className="btn gomb  d-flex justify-content-center registrationbtn" variant="outline-info"*/}
            {/*        onClick={this.redirectToRegistration}>Registration</Button>*/}
             </div>
            )}
        </context.Consumer>
    )
}

}

Greeting.contextType = context;
export default Greeting;