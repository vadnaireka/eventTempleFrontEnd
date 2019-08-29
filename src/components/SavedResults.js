import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Rating from "react-rating";
import axios from "axios";
import context from "../DataProvider";
import Cards from "./Cards";



class SavedResults extends Component {
    state = {
        rating: 0
    };

    saveRating = (data, rate) => {
        console.log( " and the rate: " + rate);
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