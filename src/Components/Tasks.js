import React, { Component } from "react";

export default class Task extends Component {
  componentDidMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }
  render() {
    if (this.state == null) return null;
    var tasks = this.state.tasks;
    let removeTask = removed => {
      let myTasks = tasks;
      let taskToRemove = removed;
      let toRemove = myTasks
        .map(task => {
          return task.id;
        })
        .indexOf(taskToRemove);
      var confirmation = window.confirm(
        "Are you sure you want to delete this task?"
      );
      if (confirmation) {
        myTasks.splice(toRemove, 1);
        let a = document.getElementById(removed);
        a.className = "card col-sm-2 animated flipOutY";
        setTimeout(() => {
          this.setState({
            tasks: myTasks
          });
        }, 1000);
      }
    };
    let allTasks = tasks.map(task => (
      <div
        className="card col-sm-2 animated fadeIn"
        id={task.id}
        style={{ margin: "10px 15px", padding: "10px 10px" }}
        key={Math.random()}
      >
        <button className=" btn btn-danger" onClick={() => removeTask(task.id)}>
          <a className="fa fa-times-circle" style={{ margin: "4px" }} />
          Remove Task
        </button>
        <hr />
        <p>{task.task}</p>
        <p>
          <b>Description</b>: {task.description}
        </p>
        <p>
          <b>Asigned to</b>: {task.asignedTo}
        </p>
      </div>
    ));
    let tasksInfo =
      tasks.length > 0
        ? "Total tasks: " + tasks.length
        : "There are no pending tasks!";
    return (
      <>
        <hr />
        <h3 className="lead">{tasksInfo}</h3>
        <div className="row">{allTasks}</div>
      </>
    );
  }
}
