import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  gridcontainer: {
    flexgrow: 1
  },
  header: {
    flexgrow: 1, 
  },
  indentedText: {
    paddingLeft: 10
  }, 
  subheading: {
    paddingTop: 15
  }, 
  title: {
    paddingTop: 15,
    paddingLeft: 10
  }, 
  gridItem: {
    //borderStyle: 'solid', 
    padding: 10
  }
}

const Summary = ({classes}) => {
  return (
    <div className={classes.gridcontainer}>
      <Grid container justify='flex-start'>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Education</Typography>
          <Typography className={classes.subheading} variant='headline'>University of Connecticut</Typography>
          <Typography className={classes.indentedText} variant='body2'>Attended Fall 2012 - Spring 2017</Typography>
          <Typography className={classes.indentedText} variant='body2'>B.S. Computer Science & B.A. English</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Work Experience</Typography>
          <Typography className={classes.subheading} variant='headline'>Neulion</Typography>
          <Typography className={classes.indentedText} variant='body2'>I will begin employment with Neulion on August 20th, 2018. I will be primarily a front-end developer working with React.</Typography>
          <Typography className={classes.subheading} variant='headline'>Gartner</Typography>
          <Typography className={classes.indentedText} variant='body2'>I worked at Gartner from June 2017 to August 2018. While there, I spent time working with two different teams.</Typography>
          <Typography className={classes.title} variant='title'>Product Delivery</Typography>
          <Typography className={classes.indentedText} variant='body2'>As a part of the product delivery team, I supported the client-facing Gartner.com website. This included new feature development as well as ongoing maintenance. One of the primary initiatives undertaken by the products team was to migrate from a monolithic backend to microservices based architecture written in Java (Spring). The front-end site was also migrated during this process from freemarker templating with jQuery into React.</Typography>
          <Typography className={classes.title} variant='title'>Corporate Business Systems</Typography>
          <Typography className={classes.indentedText} variant='body2'>Corporate Business Systems, CBS, was a team within Gartner that supported many internal applications. My role was in supporting an application used to automate order processing. The application was written using an Angular front-end with a Spring backend. Most of the application logic existed in the database written in PL/SQL.</Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs>
          <Typography className={classes.header} variant='display1'>Technical Skills</Typography>
          <Typography className={classes.subheading} variant='headline'>Languages:</Typography>
          <Typography className={classes.indentedText} variant='body2'>Java, Javascript, PL/SQL, Python, Swift</Typography>
          <Typography className={classes.subheading} variant='headline'>Technologies:</Typography>
          <Typography className={classes.indentedText} variant='body2'>Spring Framework, Maven, Node.js, React, Redis, RabbitMQ, JUnit, Tomcat, Git, SVN, Swagger, AWS, Docker</Typography>
          <Typography className={classes.subheading} variant='headline'>Software:</Typography>
          <Typography className={classes.indentedText} variant='body2'>Eclipse, xCode, Jira, Bamboo, Jenkins, Visual Studio Code</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Summary.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Summary);