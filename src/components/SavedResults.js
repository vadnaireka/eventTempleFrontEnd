import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import axios from "axios";
import context from "../DataProvider";
import Cards from "./Cards";


class SavedResults extends Component {
    state = {
        rating: 0
    };

    saveRating = (data, rate) => {
        axios.post(`http://localhost:8080/saverating/`, {rating: rate, eventEntityId: data.id});
    };

    render() {
        return (
            <context.Consumer>
                {({saveddata}) => (
                <div className="mycontainer">
                    {saveddata.map((data) => (
                        <Cards data={data}/>
                    ))}
                </div>
                )}
            </context.Consumer>
        )
    }
}

SavedResults.contextType = context;

export default SavedResults;