import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
} from "react-bootstrap";
import myImage from "./cardImage.png";

class DisplayCard extends Component {
  render() {
    return (
      <Card className="bg-dark text-white">
        <Card.Img src={myImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default DisplayCard;