import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    paddingRight: 400, 
    paddingLeft: 400
  }, 
  imageBox: {
    height: 400
  }, 
  bioText: {
    height: 400
  }, 
  gridItem: {
    borderStyle: 'solid'
  }
});

class HomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container} spacing={24}>
        <Grid item className={`${classes.imageBox} ${classes.gridItem}`} xs={5}>
          <div>My Image Here</div>
        </Grid>
        <Grid item className={`${classes.bioText} ${classes.gridItem}`} xs={7}>
          <div>Short Bio Here</div>
        </Grid>
        <Grid item className={classes.gridItem} xs={12}>
          <div>More Information</div>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(HomePage);