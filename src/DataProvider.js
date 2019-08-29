import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    alldata: [],
    fetchData: () => {},
    user : null,
    setUser: () => {}
});

export class DataProvider extends Component {
    state = {
        alldata: [],
        fetchData: (url, stateName) => {
            axios.get(url)
                .then(response => {
                    this.setState({[stateName]: Array.from(response.data)});
                    console.log("searchform : " + response.data);
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