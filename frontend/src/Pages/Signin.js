import React from 'react';
import './Signin.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, History, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import axios from "axios";

var roomExists = false;

function createUserRoom(){
  var array = ["room", document.getElementById('userNameVal').value]
  axios.post('http://localhost:5000/rooms/addRoom', {
    roomCode: document.getElementById('roomCodeVal').value,
    members: array,
    numMembers: 1,
  })
  .then(function (response) {
    console.log(response);
    roomExists = false;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = true;
    return;
  });
  axios.post('http://localhost:5000/users/makeUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

function updateUserRoom(){
  axios.post('http://localhost:5000/rooms/updateRoom', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value,
  })
  .then(function (response) {
    console.log(response);
    roomExists = true;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = false;
    return;
  });
  axios.post('http://localhost:5000/users/makeUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const StyledTextField = styled(TextField)`
  label.focused {
    color: #ffffff;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #83A3BC;
    }
    &:hover fieldset {
      border-color: #294662;
    }
    &.Mui-focused fieldset {
      border-color: #294662;
    }
  }
  textInputStyle: {
    color: 'white',
  }
`;

const useStyles = makeStyles({
  root: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    height: 500,
    width: 400,
    margin: 40,
    padding: '0 30px'
  },
  centeredcard: {
    marginLeft: 95,
    marginRight: 95,
    marginBottom: 20,
    marginTop: 30
  },
  title: {
    fontSize: 43,
    fontFamily: 'Helvetica',
    color: '#444444'
  },
  titlecontent: {
    marginBottom: -20
  },
  textbox: {
    padding: 10
  },
});

function Signin() {
  const history = useHistory();
  const classes = useStyles();

  //routing to new room
  const routeChangeCreate = () =>{ 
    createUserRoom();
    if (roomExists == true) {
      handleClick();
    } else {
      let path = "/RoomLobby"; 
      history.push(path);
    }
  }

  //routing to existing room
  const routeChangeJoin = () =>{ 
    updateUserRoom();
    if (roomExists == false) {
      handleClick1();
    } else {
      let path = "/RoomLobby"; 
      history.push(path);
    }
  }
  
  //error message if room exists
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //error message if room doesn't exist
  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  return (
    <React.Fragment>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
        <div className={classes.centeredcard}>
          <Grid item xs={12} className={classes.titlecontent}>
            <h1 className={classes.title}>
              Groceries
            </h1>
          </Grid>
          <Grid item xs={12} className={classes.textbox}>
            <StyledTextField id="userNameVal" label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} className={classes.textbox}>
            <StyledTextField id="roomCodeVal" label="Room Code" variant="outlined" />
          </Grid>
          <Grid item xs={12} style={{padding: "5%", marginLeft: "9%"}} >
            <Button variant="outlined" borderColor="white" onClick={routeChangeCreate}>Create Room</Button>
          </Grid>
          <Grid item xs={12} style={{padding: "5%", marginLeft: "15%"}} >
            <Button variant="outlined" borderColor="white" onClick={routeChangeJoin}>Join Room</Button>
          </Grid>
        </div>
        </Grid>
      </CardContent>
    </Card>

    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="The room already exists"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />

    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="The room doesn't exist"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose1}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />

    </React.Fragment>
  )
}
export default Signin;