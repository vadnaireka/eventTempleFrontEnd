import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import React, {Component} from "react";
import context from "../DataProvider";
import axios from "axios";
import {Button} from "react-bootstrap";


class Cards extends Component {

    state = {
        button: "save"
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


    render(){
    return(
        <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
            <Card.Img className="card-image" variant="top" src={this.props.data.eventEntity.imageLink}/>
            <Card.Body className="card-body">
                <Card.Title className="card-title">{this.props.data.eventEntity.eventName}</Card.Title>
                <Card.Text className="card-text">{this.props.data.eventEntity.date} {this.props.data.eventEntity.time}</Card.Text>
                <Button className="btn" variant="primary" onClick={() => this.saveToDB(this.props.data.eventEntity)}>{this.state.button}</Button>
                <Rating onClick={(rate) => this.saveRating(this.props.data.eventEntity, rate)} placeholderRating={this.props.data.averagerating}/>
            </Card.Body>
        </Card>
    )
}

}


export default Cards;