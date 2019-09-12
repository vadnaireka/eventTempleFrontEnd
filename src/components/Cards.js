import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import React, {Component} from "react";
import context from "../DataProvider";
import axios from "axios";
import {Button} from "react-bootstrap";


class Cards extends Component {

    deleteFromDB = (data) => {
        console.log(data);
        axios.post(`http://localhost:8080/deleteSavedEvent/`, {data: data}, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token") //the token is a variable which holds the token
            }})
        ;
    };

    saveRating = (data, rate) => {
        console.log(" and the rate: " + rate);
        axios.post(`http://localhost:8080/saverating/`, {rating: rate, eventEntityId: data.id}, {headers: {
                Authorization: "Bearer " + localStorage.getItem("token") //the token is a variable which holds the token
            }})
        ;
    };


    render() {
        return (
            <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
                <Card.Img className="card-image" variant="top" src={this.props.data.imageLink}/>
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{this.props.data.eventName}</Card.Title>
                    <Card.Text className="card-text">{this.props.data.date} {this.props.data.time}</Card.Text>
                    <Button className="btn" variant="danger"
                            onClick={() => this.deleteFromDB(this.props.data.id)}>Delete</Button>
                    <Rating onClick={(rate) => this.saveRating(this.props.data, rate)}
                            placeholderRating={this.props.data.averagerating}/>
                </Card.Body>
            </Card>
        )
    }

}


export default Cards;