import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
  fab: {
    paddingLeft: 20,
    paddingRight: 20,
    background: '#ff4b5a',
    color: 'white',

    '&:hover': {
      background: 'black'
    }
  },
  icon: {
    marginRight: 10
  }
}));

export const SignupButton = props => {
  const classes = useStyles();

  return (
    <div>
      <Fab
        variant="extended"
        className={classes.fab}
        onClick={props.handleSubmit}
      >
        <SendIcon className={classes.icon} />
        Submit
      </Fab>
    </div>
  );
};
