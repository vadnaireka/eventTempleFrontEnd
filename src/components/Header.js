import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
//import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import '../App.css';
import context from "../DataProvider";
import SearchResult from "./SearchResult";


class Header extends Component {

    state = {
        redirect: false,
        url:""
    };

    loadSavedEvents = () => {
        this.context.fetchData(`http://localhost:8080/saved/`, "saveddata", () => {
            this.context.saveddata.length > 0 ? this.redirectToSaved("/saved") : this.redirectToSaved("/login")
        });
    };

    redirectToSaved = (url) => {
        this.setState({url:url})
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
            <div>
                {this.renderRedirect()}
                <div className="header">
                    <h1>Event Temple</h1>
                </div>
                <div className="d-flex justify-content-center">
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