import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    alldata: [],
    searchdata: [],
    saveddata: [],
    fetchData: () => {},
    user : null,
    setUser: () => {}
});

export class DataProvider extends Component {
    state = {
        alldata: [],
        searchdata: [],
        saveddata: [],
        fetchData: (url, stateName) => {
            axios.get(url)
                .then(response => {
                    this.setState({[stateName]: Array.from(response.data)});
                });
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