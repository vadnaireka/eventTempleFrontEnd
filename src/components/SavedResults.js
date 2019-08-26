import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



class SavedResults extends Component {

    render() {
        return (
            <div className="mycontainer">
                {this.props.savedDatas.map((data) => (
                    <Card className="float-left row-sm eventcard" style={{width: "18rem"}}>
                        <Card.Img className="card-image" variant="top" src={data.imageLink}/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{data.eventName}</Card.Title>
                            <Card.Text className="card-text">{data.date} {data.time}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

export default SavedResults;