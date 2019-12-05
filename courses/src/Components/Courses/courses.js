import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Form from "../Form/form";
import { Card, Button, ListGroup, Spinner, Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import myImage from "./cardImage.png";
import DisplayCard from "../Card/card";
import { IoLogoYoutube } from "react-icons/io";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
      value: "",
      loading: false,
      indexOfAllCourses: "4095",
      filteredData: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://nut-case.s3.amazonaws.com/coursessc.json";
    this.setState({ loading: true });
    const data = await fetch(url);
    const courseData = await data.json();
    this.setState({ courseData: courseData, filteredData: courseData });
    this.setState({ loading: false });
  };

  receiveDataFromChild = async data => {
    await this.setState({ value: data });
    this.filterData();
  };

  filterData = () => {
    console.log(this.state.value);
    let filteredCourses = this.state.courseData.filter(
      course =>
        course["Child Subject"].toLowerCase() === this.state.value.toLowerCase()||
        course.Provider.toLowerCase() === this.state.value.toLowerCase()
    );
    console.log(filteredCourses);
    this.setState({ filteredData: filteredCourses });
    let indexOfFilteredCourses = filteredCourses.length;
    this.setState({ indexOfAllCourses: indexOfFilteredCourses });
  };

  sortData = () => {
    let sortedData = this.state.filteredData.sort(function (a, b) {
      return a.Length - b.Length;
    });
    this.setState({ filteredData: sortedData});
    let indexOfSortedCourses = sortedData.length;
    this.setState({ indexOfAllCourses: indexOfSortedCourses });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
  
  if (this.state.loading) {
    return (
      <Spinner animation="border" className = "loader" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
    );
  }

  
    console.log("Rendereing");
    return (
      <div>
        <DisplayCard></DisplayCard>
        <Form sendDataToParent={this.receiveDataFromChild} />
        <h3 className = "indexOfJobs">Total courses found : {this.state.indexOfAllCourses}</h3>
        <Button style={{width:"10rem"}}
                variant="secondary"
                className="sortButton"
                type="submit"
                onClick={this.sortData}
              >
                Sort By Length
              </Button>
        {this.state.filteredData.map(courses => {
          return (
            <div key={courses["Course Id"]}>
              <div
                className="courses"
                style={{ flex: 1 }}
                style={{ width: "90rem" }}
              >
                <hr></hr>

                <Card
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "16rem"
                  }}
                >
                  <div className="image">
                    <Card.Img
                      variant="top"
                      style={{ width: "18rem", border: "1px solid #ddd" }}
                      src={myImage}
                      defaultValue="Preview"
                    />
                    <p className="overlay"><Button   variant="outline-secondary">
                        <a className="videoButton" href={courses['Video(Url)']}>
                        <IoLogoYoutube />

                          {" "}
                          Watch{" "}
                        </a>
                      </Button>
                    </p>
                  </div>

                  <Card.Body>
                    <Card.Title>
                      <h2>{courses["Course Name"]}</h2>
                    </Card.Title>
                    <Card.Text>
                      {courses["Parent Subject"]}
                      <p>{courses["Child Subject"]}</p>
                      <Button variant="primary">
                        <a className="courseLink" href={courses.Url}>
                          {" "}
                          Apply here{" "}
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <br></br>
                    <p>{courses["Universities/Institutions"]}</p>
                    <p>{courses["Next Session Date"]}</p>
                    <p>{courses.Provider}</p>
                    <p>{courses.Length}</p>
                    <br></br>
                  </ListGroup>
                  <Card.Body className="apply"></Card.Body>
                </Card>
                <hr></hr>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Courses;
