import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Rating from "react-rating";
import axios from "axios";


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
            <div className="mycontainer">
                {this.props.savedDatas.map((data) => (
                    <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
                        <Card.Img className="card-image" variant="top" src={data.imageLink}/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{data.eventName}</Card.Title>
                            <Card.Text className="card-text">{data.date} {data.time}</Card.Text>
                            <Rating onClick={(rate) => this.saveRating(data, rate)} placeholderRating={data.averagerating}/>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

export default SavedResults;