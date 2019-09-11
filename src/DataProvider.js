import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    alldata: [],
    searchdata: [],
    saveddata: [],
    userdata: [],
    fetchData: (url, stateName, cb) => {},
    errors :[],
    user : null,
    setUser: () => {}
});



export class DataProvider extends Component {
    state = {
        alldata: [],
        searchdata: [],
        saveddata: [],
        userdata: [],
        errors :[],
        fetchData: (url, stateName, cb) => {
            axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + userdata.token //the token is a variable which holds the token
                }})
                .then(response => {
                    this.setState({[stateName]: Array.from(response.data)});
                    if (cb !== null){
                        cb();
                    }
                }).catch(reason => {
                    console.log(reason);
                    this.setState({"errors":[reason]})
            })
            }
    };

    render(){
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        );
    }
}

export default context;