import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ActionButtons(props) {
  const { classes, onPauseClick, onStartClick } = props;
  return (
    <div>
      <Button
        fab
        color="accent"
        aria-label="start"
        className={classes.button}
        onClick={onStartClick}
      >
        <PlayArrow />
      </Button>

      <Button
        fab
        color="primary"
        aria-label="stop"
        className={classes.button}
        onClick={onPauseClick}
      >
        <Pause />
      </Button>
    </div>
  );
}

ActionButtons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.String).isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ActionButtons);
