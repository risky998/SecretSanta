import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

export const CheckboxesGroup = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Art: true,
    Books: false,
    Fashion: false,
    Food: false,
    Games: false,
    Movies: false,
    Sports: false,
    Stationary: false,
    Other
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    if (event.target.checked) {
      props.onPriceRangeChange(name);
    }
  };

  const {
    Art,
    Books,
    Fashion,
    Food,
    Games,
    Movies,
    Sports,
    Stationary,
    Other
  } = state;
  const error =
    [
      Art,
      Books,
      Fashion,
      Food,
      Games,
      Movies,
      Sports,
      Stationary,
      Other
    ].filter(v => v).length !== 1;

  return (
    <div className={classes.root}>
      <FormControl
        required
        error={error}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Art}
                onChange={handleChange('Art')}
                value="Art"
              />
            }
            label="Art"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={eleven}
                onChange={handleChange('eleven')}
                value="eleven"
              />
            }
            label="$11 - $15"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sixteen}
                onChange={handleChange('sixteen')}
                value="sixteen"
              />
            }
            label="$16 - $20"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={twenty}
                onChange={handleChange('twenty')}
                value="twenty"
              />
            }
            label="$20+"
          />
        </FormGroup>
        <FormHelperText>Pick one!</FormHelperText>
      </FormControl>
    </div>
  );
};
