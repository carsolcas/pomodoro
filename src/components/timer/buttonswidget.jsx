import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Replay from 'material-ui-icons/Replay';
import Skip from 'material-ui-icons/SkipNext';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ActionButtons(props) {
  const {
    classes, onPauseClick, onStartClick, onRestartClick, isRuning, onSkipClick,
  } = props;

  const actionIcon = (isRuning) ? (<Pause />) : (<PlayArrow />);
  const eventClick = (isRuning) ? onPauseClick : onStartClick;
  const buttonColor = (isRuning) ? 'primary' : 'accent';

  return (
    <div>
      <Button
        fab
        color={buttonColor}
        aria-label="stop"
        className={classes.button}
        onClick={eventClick}
      >
        {actionIcon}
      </Button>

      <Button
        fab
        color="primary"
        aria-label="stop"
        className={classes.button}
        onClick={onRestartClick}
      >
        <Replay />
      </Button>

      <Button
        fab
        color="primary"
        aria-label="stop"
        className={classes.button}
        onClick={onSkipClick}
      >
        <Skip />
      </Button>
    </div>
  );
}

ActionButtons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onRestartClick: PropTypes.func.isRequired,
  onSkipClick: PropTypes.func.isRequired,
  isRuning: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ActionButtons);
