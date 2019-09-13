import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import SavedResults from "./components/SavedResults";
import Welcome from "./components/Welcome";
import {DataProvider} from "./DataProvider";
import Login from "./components/Login";

class App extends Component {
    state = {
        datas: [],
        savedDatas: []
    };

    receivingData = (dataFromChild) => {
        this.setState({datas: dataFromChild})
    };

    receivedSavedData = (dataFromChild) => this.setState({savedDatas: dataFromChild});


    render() {
        return (
            <DataProvider>
                <Router>
                    <div className="app">
                        <Route path="/" render={props => (
                            <Header />
                            )}/>
                        <Route path="/login" render={props => (
                            <Login auth="login" header="Please log in!" footer="For registration, click here!"/>
                        )}/><Route path="/registration" render={props => (
                            <Login auth="registration" header="Please register!" footer="After registration, please log in!"/>
                        )}/>
                        <Route path="/searchform" render={props => (
                            <SearchForm/>
                        )}/>
                        <Route path="/about" render={props => (
                            <Welcome/>
                        )}/>
                        <Route path="/search" render={props => (
                            <SearchResult/>
                        )}/>
                        <Route path="/saved" render={props => (
                            <SavedResults/>
                        )}/>
                    </div>
                </Router>
            </DataProvider>
        )

    }

}

export default App;
