import React from 'react';
import './App.css';
import Header from './Components/Header/header'
import Courses from './Components/Courses/courses'
import Sample from './sample'

class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
      {/* <Header/> */}
      <Courses></Courses>
      {/* <Sample></Sample> */}
      </div>
     
    )
  }
}

export default App;
