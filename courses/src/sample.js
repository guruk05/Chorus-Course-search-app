import React from 'react'
// import {  } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";



class Sample extends React.Component{

render() {
    return(
<div class="card" className = "m"  style={{flex: 1}}>

  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>

  <div class="card-body">

    <h4 class="card-title"><a>Card title</a></h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Button</a>

  </div>

</div>
    )

}
}

export default Sample;