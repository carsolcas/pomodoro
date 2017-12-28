import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Replay from 'material-ui-icons/Replay';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ActionButtons(props) {
  const { classes, onPauseClick, onStartClick, isRuning } = props;
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
        onClick={onPauseClick}
      >
        <Replay />
      </Button>
    </div>
  );
}

ActionButtons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.String).isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired,
  isRuning: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ActionButtons);
