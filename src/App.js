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
        console.log(dataFromChild);
        this.setState({datas: dataFromChild})
    };

    receivedSavedData = (dataFromChild) => this.setState({savedDatas: dataFromChild});


    render() {
        console.log("App : " + this.state.datas);
        return (
            <DataProvider>
                <Router>
                    <div className="app">
                        <Header sendDataToParent={this.receivedSavedData}/>
                        <Login/>
                        <Route path="/searchform" render={props => (
                            <SearchForm sendDataToParent={this.receivingData}/>
                        )}/>
                        <Route path="/about" render={props => (
                            <Welcome/>
                        )}/>
                        <Route path="/search" render={props => (
                            <SearchResult/>
                        )}/>
                        <Route path="/saved" render={props => (
                            <SavedResults savedDatas={this.state.savedDatas}/>
                        )}/>
                    </div>
                </Router>
            </DataProvider>
        )

    }

}

export default App;
