import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutMe from '../components/aboutMe';
import Summary from '../components/summary';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 20
  },
  image: {
    //maxWidth: 360, 
    width: '100%',
    maxWidth: 360,
    height: 'auto',

  },
  container: {
    padding: 20,
    flexGrow: 1, 
    marginLeft: 100, 
    marginRight: 100
  }, 
  imageBox: {
    // height: 480, 
    // padding: 0
  }, 
  bioText: {
    // height: 480
  }, 
  gridItem: {
    //borderStyle: 'solid',
    padding: theme.spacing.unit * 2,
  },
  '@media (max-width: 1024px)': {
    container: {
      marginLeft: 10, 
      marginRight: 10
    }
  }
});

const HomePage = ({classes}) => {
  return (
    <div>
      <div className={classes.container}>
        <Grid container justify='flex-start'>
          <Grid item className={classes.imageBox}>
            <img className={classes.image} src={require('../../resources/images/Me.jpg')} />
          </Grid>
          <Grid item className={classes.gridItem} xs>
            <AboutMe className={classes.bioText} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.container}>
        <Grid container justify='center'>
          <Grid item className={classes.gridItem} xs>
            <Summary className={classes.moreInfo}></Summary>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage);