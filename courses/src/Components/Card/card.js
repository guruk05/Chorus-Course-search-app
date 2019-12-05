import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import cardImage from "./cardImage.png";

class DisplayCard extends Component {
  render() {
    return (
      // Displaying an image using react-Bootstrap card

      <Card className="bg-dark text-white">
        <Card.Img src={cardImage} alt="Card image" />
      </Card>
    );
  }
}

export default DisplayCard;
