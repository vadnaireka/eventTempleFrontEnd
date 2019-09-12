import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import React, {Component} from "react";
import context from "../DataProvider";
import axios from "axios";


class Cards extends Component {


    saveRating = (data, rate) => {
        console.log( " and the rate: " + rate);
        axios.post(`http://localhost:8080/saverating/`, {rating: rate, eventEntityId: data.id});
    };


    render(){
    return(
        <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
            <Card.Img className="card-image" variant="top" src={this.props.data.imageLink}/>
            <Card.Body className="card-body">
                <Card.Title className="card-title">{this.props.data.eventName}</Card.Title>
                <Card.Text className="card-text">{this.props.data.date} {this.props.data.time}</Card.Text>
                <Rating onClick={(rate) => this.saveRating(this.props.data, rate)} placeholderRating={this.props.data.averagerating}/>
            </Card.Body>
        </Card>
    )
}

}


export default Cards;