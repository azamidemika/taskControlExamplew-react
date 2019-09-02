import React, { Component } from "react";
import "./Form.css";
import Tasks from "./Tasks";
export default class Form extends Component {
  componentDidMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }
  render() {
    if (this.state == null) return null;
    let handleSubmit = e => {
      e.preventDefault();
      var newTask = document.getElementById("task");
      var newDescription = document.getElementById("description");
      var newAsignedTo = document.getElementById("asignedTo");
      let taskId = "tsk" + parseInt(Math.random() * 10201099);
      let Tasks = this.state.tasks;
      var TaskToAdd = {
        task: newTask.value,
        description: newDescription.value,
        asignedTo: newAsignedTo.value,
        id: taskId
      };
      newTask.value = "";
      newDescription.value = "";
      newAsignedTo.value = "";
      Tasks.push(TaskToAdd);
      this.setState({
        tasks: Tasks
      });
    };
    return (
      <div className="animated fadeIn">
        <form className="col-sm-3" onSubmit={handleSubmit}>
          Task:
          <input type="text" className="form-control" id="task" required />
          Description:
          <textarea
            type="text"
            className="form-control"
            id="description"
            required
          />
          Asigned to:
          <input type="text" className="form-control" id="asignedTo" required />
          <br />
          <input
            className="btn btn-success"
            type="submit"
            value="Create task"
          />
        </form>
        <div id="taskDiv">
          <Tasks tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
