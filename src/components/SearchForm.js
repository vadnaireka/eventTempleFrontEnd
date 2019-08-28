import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import context from "../DataProvider";


class SearchForm extends Component {
    state = {
        city: "",
        startDate: "",
        endDate: "",
        keyword: "",
        redirect: false,
        receivedResponse: null
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        this.setState({redirect: false});
        e.preventDefault();
        axios.get(`http://localhost:8080/search/${this.state.city}/${this.state.startDate}/${this.state.endDate}/${this.state.keyword}/`)
            .then(response => {
                this.setState({receivedResponse: Array.from(response.data)});
                this.props.sendDataToParent(Array.from(response.data));
                this.context.saveAllData(response.data);
                this.setState({redirect: true});
                console.log("searchform : " + response.data);
            })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/search"/>
        }
    }


    render() {
        return (
            <div className="searchform">
                {this.renderRedirect()}
                <form className="form" onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} className="input" type="text" name="city" placeholder="City Name"
                           value={this.state.city}/>
                    <input onChange={this.onChange} className="input" type="text" name="startDate"
                           placeholder="Date from : 2019-10-01" value={this.state.startDate}/>
                    <input onChange={this.onChange} className="input" type="text" name="endDate"
                           placeholder="Date to : 2019-10-02" value={this.state.endDate}/>
                    <input onChange={this.onChange} className="input" type="text" name="keyword" placeholder="music"
                           value={this.state.keyword}/>
                    <p><input className="btn btn-outline-secondary" type="submit" name="" value="Submit"/></p>
                </form>
            </div>
        )
    }
}

SearchForm.contextType = context;

export default SearchForm;