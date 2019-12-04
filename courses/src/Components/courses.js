import React from "react";
import axios from "axios";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import 'mdbreact / dist / css / mdb.css';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
      courses: [],
      search: "",
      loading: false,
      CoursesPerPage: [75],
      currentPage: [1],
      indexOfAllJobs: "1709"
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
    this.setState({ courseData: courseData });
    console.log(this.state.courseData);
    this.setState({ loading: false });
    console.log("ComponentDidMOunt is Running");
  };

  handleInput = () => {

  }

  handleSubmit = () => {

  }



  render() {
    return (
      <div>
        Courses
        <MDBCol md="12">
          <MDBFormInline className="md-form mr-auto mb-4" onSubmit = {this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value = {this.state.value}
              onChange = {this.handleInput}
            />
            <MDBBtn
              color="unique"
              rounded
              size="sm"
              type="submit"
              className="mr-auto"
            >
              Search
            </MDBBtn>
          </MDBFormInline>
        </MDBCol>
      </div>
    );
  }
}

export default Courses;
