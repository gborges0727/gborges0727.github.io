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
  container: {
    padding: 20,
    flexGrow: 1, 
    marginLeft: 100, 
    marginRight: 100
  }, 
  imageBox: {
    height: 480, 
    padding: 0
  }, 
  image: {
    height: 480, 
    width: 360,
  },
  bioText: {
    height: 480
  }, 
  gridItem: {
    //borderStyle: 'solid',
    padding: theme.spacing.unit * 2,
  }
});

class HomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div>
        <div className={classes.container}>
          <Grid container justify='flex-start'>
            <Grid item className={classes.imageBox}>
              <img className={classes.image} src={require('../../images/Me.jpg')} />
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
  };
}

export default withStyles(styles)(HomePage);