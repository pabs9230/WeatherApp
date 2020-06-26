import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const CustomAppBar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2)
        },
        title: {
          flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <Typography color='inherit'>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon color="primary"/>
                </IconButton>
              </Typography>
              <Typography color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
    );
}

export default CustomAppBar;
