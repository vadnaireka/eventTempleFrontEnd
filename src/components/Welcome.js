import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
// import Col from "react-bootstrap/Col";

class Welcome extends Component {

    render() {
        return (
            <div className="homePage">
                <Container className="homeText">
                    <h1>Welcome to Event Temple</h1>
                    <h5>This page is created to supply you with events you just prayed for in the past. Our mission is
                        engaging the industry to provide information about their upcoming events, and connecting them to
                        a large consumer audience looking for one place to go to find out what’s on.</h5>
                </Container>
                <Container className="imageContainer">
                    <Row className="row">
                        <div className="col-xs-6 col-md-4">
                            <Image className="profilePicture" src="/images/reka.jpg" roundedCircle/>
                            <h6>Réka</h6>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <Image className="profilePicture" src="/images/david.jpg" roundedCircle/>
                            <h6>Dávid</h6>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <Image className="profilePicture" src="/images/gigi.jpg" roundedCircle/>
                            <h6>Gigi</h6>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Welcome;