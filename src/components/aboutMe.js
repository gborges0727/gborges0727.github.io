import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    padding: 10
  }, 
  textbody: {
    paddingTop: 10, 
    paddingRight: 150
  }
}

class AboutMe extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant='display1'>About Me</Typography>
        <Typography className={classes.textbody} variant='body2'>
          I am a software developer with an interest in various web technologies. I currently develop software for Neulion, working on their front-end React-based code. I studied at UConn where I received a B.S. in Computer Science and a B.A. in English. Yep, a bit of an unusual combo, but I greatly valued the experience to develop my both my communicative and technological skills.
        </Typography>
        <Typography className={classes.textbody} variant='body2'>
          I am always looking for new trends in tech, and am always eager to learn and hear about various technologies and development methodologies. I have side-interests in both security and Artificial Intelligence.
        </Typography>
        <Typography className={classes.textbody} variant='body2'>
          Outside of tech, I love playing chess! I do my best to play a couple tournaments a month (time providing). I'm also very big into all types of tea! I'm partial to a good high-mountain Taiwanese Oolong, but definitely enjoy everything from green to pu-erh. 
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(AboutMe);