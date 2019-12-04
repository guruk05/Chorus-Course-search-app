import React from "react";
import axios from "axios";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
      courses: [],
      value: "",
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
    const data = await axios.get(url);
    const courseData = await data.json();
    const courses = courseData.data;
    this.setState({ courseData: courses });
    this.setState({ loading: false });
    console.log("ComponentDidMOunt is Running");
  };

  render() {
    return <div>Courses</div>;
  }
}
