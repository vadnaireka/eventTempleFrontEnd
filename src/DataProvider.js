import React, {Component} from "react";

const context = React.createContext({
    alldata: [],
    saveAllData: () => {},
    user : null,
    setUser: () => {}
});

export class DataProvider extends Component {
    state = {
        alldata: [],
        saveAllData: (data) => {
            this.setState({
                alldata: data
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