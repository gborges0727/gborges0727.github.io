import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {

}

class AboutMe extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>Short Bio Here</div>
    )
  }
}

export default withStyles(styles)(AboutMe);