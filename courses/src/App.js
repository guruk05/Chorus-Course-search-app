import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Courses from "./Components/Courses/courses";
import Sample from "./sample";
import Display from "./Components/Card/card";
import { display } from "@material-ui/system";
import DisplayCard from "./Components/Card/card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
    
        <Header/>
        <Courses></Courses>
        
      </div>

    );
  }
}

export default App;
