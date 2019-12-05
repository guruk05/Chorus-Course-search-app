import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Card, Button, ListGroup, Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import myImage from "./cardImage.png";
import DisplayCard from "../Card/card";
import { IoLogoYoutube } from "react-icons/io";





class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }


    onChange = (event) => {
        this.setState({ value: event.target.value });
      }

      sendDataToParent = (e) => {
          e.preventDefault();
        this.props.sendDataToParent(this.state.value);
      }

    render(){
        return(
<Jumbotron className="jumbotron" fluid>
          <Container>
            <h1>Find Your dream courses here</h1>
            <form onSubmit={this.sendDataToParent}noValidate autoComplete="off">
              <TextField
                style={{ width: "35rem" }}
                id="standard-basic"
                label="Search By provider or child subject"
                value={this.state.value}
                 onChange={this.onChange}
              />
              <Button
                variant="secondary"
                className="searchButton"
                type="submit"
              >
                Search
              </Button>
            </form>
            <div className = "text"><h4>Study at your own pace with Chorus</h4></div>
          </Container>
        </Jumbotron>
        )
}
}


export default Form;