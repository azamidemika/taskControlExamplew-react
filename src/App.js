import React, { Component } from "react";
import Form from "./Components/Form";
export default class App extends Component {
  componentDidMount() {
    this.setState({
      tasks: []
    });
  }
  render() {
    if (this.state == null) return null;
    return (
      <>
        <div>
          <h3 className="animated fadeInDown">Task control</h3>
          <Form tasks={this.state.tasks} />
        </div>
      </>
    );
  }
}
