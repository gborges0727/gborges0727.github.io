import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  appbar: {
    paddingLeft: 100, 
    paddingRight: 100
  },
  '@media (max-width: 1024px)': {
    appbar: {
      paddingLeft: 10, 
      paddingRight: 10
    }
  },
  flex: {
    flexGrow: 1,
  },
  
};

const Header = ({classes}) => {
  return(
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Gabriel Borges
        </Typography>
        <Button color='inherit' href='https://github.com/gborges0727'>GitHub</Button>
        <Button color='inherit' href='https://www.linkedin.com/in/gabriel-borges-522ba910b/'>LinkedIn</Button>
        <Button color='inherit' href='../../resources/Resume.pdf'>Resume</Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);