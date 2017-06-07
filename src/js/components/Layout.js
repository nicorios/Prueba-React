import React from "react";
import { Route } from "react-router-dom"
import Sidebar from "./Sidebar";
import Home from "./Home";
import Socios from "./Socios";
import Estadisticas from "./Estadisticas";

export default class Layout extends React.Component {
  

  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <Route path="/principal" component={Home}/>
        <Route path="/socios" component={Socios}/>
        <Route path="/estadisticas" component={Estadisticas}/>
      </div>
    );
  }
}
