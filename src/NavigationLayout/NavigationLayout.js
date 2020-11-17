import React from "react";
// import { Link, NavLink } from "react-router-dom";
import {AppBar,Toolbar,IconButton,Button,Typography, Icon} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {HomeIcon} from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import './NavigationLayout.module.css'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
function NavigationLayout() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          D3 Demo
        </Typography>
        <Button color="inherit"><NavLink to="/charts">Charts</NavLink></Button>
        <Button color="inherit"><NavLink to="/super-hero">Super Hero</NavLink></Button>
        <Button color="inherit">More</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default NavigationLayout;
