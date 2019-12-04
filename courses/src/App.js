import React from 'react';
import './App.css';
import Header from './Components/Header/header'
import Courses from './Components/Courses/courses'

class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
      {/* <Header/> */}
      <Courses></Courses>
      </div>
     
    )
  }
}

export default App;
