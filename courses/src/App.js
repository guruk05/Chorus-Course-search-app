import React from 'react';
import './App.css';
import Header from './Components/header'
import Courses from './Components/courses'

class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <Courses/>
    )
  }
}

export default App;
