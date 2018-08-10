import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  header: {
    flexgrow: 1
  }
}

const Summary = ({classes}) => {
  return (
    <div>
      <Grid container justify='flex-start'>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Education</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Work Experience</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Technical Skills</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Summary.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Summary);