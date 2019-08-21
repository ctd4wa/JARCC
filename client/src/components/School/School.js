import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// class Form extends Component {
//   //Setting the state of the componenet
//   state = {
//     name: "",
//     subject: "",
//     assignment: "",
//     dueDate: ""
//   };

//   handleInputChange = event => {
//     let value = event.target.value;
//     let name = event.target.name;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!this.state.name || !this.state.subject || !this.state.assignment || !this.state.dueDate) {
//       alert("Fill out the form entriely before submitting");
//     } else {
//       alert(`Hey ${this,state.name} make sure you get your ${this.state.subject} homework done by ${this.state.dueDate}`);
//     }
//     this.setState({
//       name: "",
//       subject: "",
//       assignment: "",
//       dueDate: ""
//     });
//   };

const School = props => (
  <div>
    <Grid container spacing={3}>
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
    <Grid container spacing={3}>
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
  </div>
);

export default School;
