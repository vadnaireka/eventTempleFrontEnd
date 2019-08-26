import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import * as PropTypes from "prop-types";
import '../App.css';


class EventCard extends Component {

    state = {
        button : "Save"
    };

    saveToDB = (data) => {
        console.log(data.id);
        axios.post(`http://localhost:8080/save/`, {
            eventEntity: data.id
        });
        this.setState({button: "Saved"})
    };


    render() {
        return <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
            <Card.Img variant="top" className="card-image" src={this.props.data.imageLink}/>
            <Card.Body>
                <Card.Title className="card-title">{this.props.data.eventName}</Card.Title>
                <Card.Text className="card-text">{this.props.data.date} {this.props.data.time}</Card.Text>
                <Button className="btn" variant="primary"
                        onClick={() => this.saveToDB(this.props.data)}>{this.state.button}</Button>
            </Card.Body>
        </Card>;
    }
}

EventCard.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.func,
    button: PropTypes.string
};

class SearchResult extends Component {

    state = {
        button: "Save"
    }



    render() {
        return (
            <div className="searchresult">
                {this.props.datas.map((data) => (

                    <EventCard data={data} onClick={() => this.saveToDB(data)} />
                ))}
            </div>
        )
    }
}

export default SearchResult;