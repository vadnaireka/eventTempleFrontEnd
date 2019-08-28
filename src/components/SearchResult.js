import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import * as PropTypes from "prop-types";
import '../App.css';
import Rating from "react-rating";
import context from "../DataProvider";


class EventCard extends Component {

    state = {
        button: "Save",
        rating: 0
    };

    saveToDB = (data) => {
        console.log(data.id);
        axios.post(`http://localhost:8080/save/`, {
            eventEntity: data.id
        });
        this.setState({button: "Saved"})
    };

    saveRating = (data, rate) => {
        console.log( " and the rate: " + rate);
        axios.post(`http://localhost:8080/saverating/`, {rating: rate, eventEntityId: data.id});
    };


    render() {
        return <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
                <Card.Img variant="top" className="card-image" src={this.props.data.eventEntity.imageLink}/>
                    <Card.Body>
                        <Card.Title className="card-title">{this.props.data.eventEntity.eventName}</Card.Title>
                        <Card.Text className="card-text">{this.props.data.eventEntity.date} {this.props.data.eventEntity.time}</Card.Text>
                        <Button className="btn" variant="primary"
                                onClick={() => this.saveToDB(this.props.data)}>{this.state.button}</Button>
                        <Rating onClick={(rate) => this.saveRating(this.props.data, rate)} placeholderRating={this.props.data.averageRating}/>
                    </Card.Body>
                </Card>
    }
}

EventCard.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.func,
    button: PropTypes.string
};

class SearchResult extends Component {

    state = {
        datas: [],
        button: "Save"
    }

    receivingData = (dataFromChild) => this.setState({datas: dataFromChild});


    render() {
        console.log("searchresult : " + this.props.datas);
        return (
            <context.Consumer>
                {({alldata}) => (
                    <div className="searchresult">
                        {/*<SearchForm sendDataToParent={this.receivingData}/>*/}
                        {alldata.map((data) => (
                            <EventCard data={data} onClick={() => this.saveToDB(data)}/>
                        ))}
                    </div>
                )}
            </context.Consumer>
        )
    }
}

export default SearchResult;