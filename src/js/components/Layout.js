import React from "react";

import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <Sidebar></Sidebar>
    );
  }
}
