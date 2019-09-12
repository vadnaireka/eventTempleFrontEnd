import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import context from "../DataProvider";
import {Redirect} from 'react-router-dom';


class Signout extends Component {

    state = {
        redirect: false,
        url:""
    };

    // redirectToLogin = () => {
    //     this.setState({url:"/login"});
    //     this.setState({redirect: true});
    // };

    redirectToMain = () => {
        this.setState({url:"/"});
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={this.state.url}/>
        }
    };


    signout = () =>{
        localStorage.clear();
        this.redirectToMain();
    }
    render() {
        return (
            <div className="navbar">
                {this.renderRedirect()}
                <Button className="btn gomb  d-flex justify-content-center" variant="outline-info"
                        onClick={this.signout}>Sign out</Button>

            </div>
        )
    }
}

Signout.contextType = context;
export default Signout;