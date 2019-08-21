import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";

class School extends Component {
  //Setting the state of the componenet

  state = {
    name: "",
    subject: "",
    assignment: "",
    dueDate: ""
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
    console.log(this.state.name);
    if (
      this.state.name.length < 0 ||
      this.state.subject.length < 0 ||
      this.state.assignment.length < 0 ||
      this.state.dueDate.length < 0
    ) {
      alert("Fill out the form entriely before submitting");
      console.log(this.state.name);
    } else {
      console.log(this.state.name);
      alert(
        `Hey ${this.state.name} make sure you get your ${
          this.state.subject
        } homework done by ${this.state.dueDate}`
      );
    }
    this.setState({
      name: "",
      subject: "",
      assignment: "",
      dueDate: ""
    });
  };

  Form = props => (
    <FormControl onSubmit={this.handleFormSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
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
              name="subject"
              value={this.state.subject}
              label="Name"
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
              <Button
                onClick={() => {
                  console.log(this.state.name);
                }}
              />
              <Button>Done</Button>
              <Button>Help</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
            <TextField id="standard-name" label="Name" margin="normal" />

            <br />
            <TextField
              id="standard-name"
              label="Subject"
              rowsMax="4"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              label="Assignment"
              multiline
              rowsMax="4"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              label="Due Date"
              rowsMax="4"
              margin="normal"
            />
            <br />
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button>Done</Button>
              <Button>Help</Button>
            </ButtonGroup>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
            <TextField id="standard-name" label="Name" margin="normal" />

            <br />
            <TextField
              id="standard-name"
              label="Subject"
              rowsMax="4"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              label="Assignment"
              multiline
              rowsMax="4"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              label="Due Date"
              rowsMax="4"
              margin="normal"
            />
            <br />
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button>Done</Button>
              <Button>Help</Button>
            </ButtonGroup>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
            <TextField id="standard-name" label="Name" margin="normal" />

            <br />
            <TextField
              id="standard-name"
              label="Subject"
              rowsMax="4"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              label="Assignment"
              multiline
              rowsMax="4"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              label="Due Date"
              rowsMax="4"
              margin="normal"
            />
            <br />
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
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
