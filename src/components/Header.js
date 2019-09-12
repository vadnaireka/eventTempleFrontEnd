import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
//import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import '../App.css';
import context from "../DataProvider";
import SearchResult from "./SearchResult";
import AuthenticationNavBar from "./AuthenticationNavBar";
import {number} from "prop-types";
import Greeting from "./Greeting";
import Title from "./Title";


class Header extends Component {

    state = {
        redirect: false,
        url:""

    };

    loadSavedEvents = () => {
        if (localStorage.getItem("token") === null){
            this.redirectToUrl("/login")
        } else{
        this.context.fetchData(`http://localhost:8080/saved/`, "saveddata");
            this.redirectToUrl("/saved")
        }
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

    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    tokenPayload = () => {
        if (localStorage.getItem("token") !== null){
        this.parseJwt(localStorage.getItem("token"));
        } else {
            return null
        }
    };

    expirationdata = this.tokenPayload.exp;

    greetingUser = () => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === "undefined"){
            return <AuthenticationNavBar/>
        } else {
            if (Date.now() >= this.expirationdata*1000){
                localStorage.clear();
                return <AuthenticationNavBar/>
            } else {
             return <Greeting/>
            }
        }
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="header">
                    {this.greetingUser()}
                    <Title/>
                </div>
                <div className="d-flex justify-content-center pagebtn">
                    <Button className="btn gomb  d-flex justify-content-center" variant="outline-info"
                            onClick={(event) => {
                                this.loadSavedEvents();
                               // this.redirectToSaved();
                            }}>My Saved Events</Button>
                    <Button className="btn gomb  d-flex justify-content-center" variant="outline-info"
                            href="http://localhost:3000/searchform">Search for Events</Button>
                    <Button className="btn gomb d-flex justify-content-center" variant="outline-info"
                            href="http://localhost:3000/about">About</Button>
                </div>
            </div>

        )
    }
}

Header.contextType = context;
export default Header;