import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    alldata: [],
    searchdata: [],
    saveddata: [],
    userdata: [],
    fetchData: (url, stateName) => {},
    errors :[],
    user : null,
    setUser: (username) => {}
});



export class DataProvider extends Component {
    state = {
        alldata: [],
        searchdata: [],
        saveddata: [],
        userdata: [],
        errors :[],
        user : localStorage.getItem("name"),
        fetchData: (url, stateName) => {
            axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token") //the token is a variable which holds the token
                }})
                .then(response => {
                    this.setState({[stateName]: Array.from(response.data)});
                }).catch(reason => {
                    console.log(reason);
                    this.setState({"errors":[reason]})
            })
            },
        setUser: (username) => {
            this.setState({"user":[username]})
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