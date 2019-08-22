import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

class School extends Component {
  //Setting the state of the componenet

  state = {
    email: "",
    name: "",
    class: "",
    assignment: "",
    dueDate: ""
  };

  getSchool = id => {
    let route = {
      email: this.state.email,
      name: this.state.name,
      class: this.state.class,
      assignment: this.state.assignment,
      dueDate: this.state.dueDate
    };
    return axios.post("/api/homework", route);
  };
  getHomework = id => {
    let route = {
      email: this.state.email,
      name: this.state.name,
      class: this.state.class,
      assignment: this.state.assignment,
      dueDate: this.state.dueDate
    };
    return axios.get("/api/homework", route);
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name.length < 0 ||
      this.state.class.length < 0 ||
      this.state.assignment.length < 0 ||
      this.state.dueDate.length < 0
    ) {
      alert("Fill out the form entriely before submitting");
    } else {
      this.getSchool();
      alert(
        `Hey ${this.state.name} make sure you get your ${
          this.state.class
        } homework done by ${this.state.dueDate}`
      );
    }
    this.setState({
      email: "",
      name: "",
      class: "",
      assignment: "",
      dueDate: ""
    });
  };

  Form = props => (
    <FormControl onSubmit={this.handleFormSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
            <TextField
              className="form"
              id="standard-name"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              label="Email"
              margin="normal"
            />
            <br />
            <TextField
              className="form"
              id="standard-name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              label="Name"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              name="class"
              value={this.state.class}
              label="Class"
              onChange={this.handleInputChange}
              rowsMax="4"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              name="assignment"
              value={this.state.assignment}
              onChange={this.handleInputChange}
              label="Assignment"
              multiline
              rowsMax="4"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
              label="Due Date"
              rowsMax="4"
              margin="normal"
            />
            <br />
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button onClick={this.handleFormSubmit}>Post</Button>

              <Button>Done</Button>
              <Button>Help</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
      <br />
    </FormControl>
  );
  render() {
    return <div>{this.Form(this.props)}</div>;
  }
}
export default School;
