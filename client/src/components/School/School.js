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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const School = props => (
  <div>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      aria-label="Vertical tabs example"
    >
      <Tab label="Item One" {...a11yProps(0)} />
      <Tab label="Item Two" {...a11yProps(1)} />
      <Tab label="Item Three" {...a11yProps(2)} />
      <Tab label="Item Four" {...a11yProps(3)} />
      <Tab label="Item Five" {...a11yProps(4)} />
      <Tab label="Item Six" {...a11yProps(5)} />
      <Tab label="Item Seven" {...a11yProps(6)} />
    </Tabs>
    <TabPanel index={0}>Item One</TabPanel>
    <TabPanel index={1}>Item Two</TabPanel>
    <TabPanel index={2}>Item Three</TabPanel>
    <TabPanel index={3}>Item Four</TabPanel>
    <TabPanel index={4}>Item Five</TabPanel>
    <TabPanel index={5}>Item Six</TabPanel>
    <TabPanel index={6}>Item Seven</TabPanel>

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
