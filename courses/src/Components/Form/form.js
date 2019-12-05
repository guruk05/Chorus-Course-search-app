import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Method for updating state with input value 

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  // Method for passing data to Course component 
  
  sendDataToParent = e => {
    e.preventDefault();
    this.props.sendDataToParent(this.state.value);
  };

  render() {
    return (
      <Jumbotron className="jumbotron" fluid>
        <Container>
          <h1>Find Your dream courses here</h1>
          <form onSubmit={this.sendDataToParent} noValidate autoComplete="off">
            <TextField
              style={{ width: "35rem" }}
              id="standard-basic"
              label="Search By provider or child subject"
              value={this.state.value}
              onChange={this.onChange}
            />
            <Button variant="secondary" className="searchButton" type="submit">
              Search
            </Button>
          </form>
          <div className="text">
            <h4>Study at your own pace with Chorus</h4>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Form;
