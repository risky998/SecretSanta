import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import './checkbox.css';

export const CheckboxesGroup = props => {
  const {
    Art,
    Books,
    Fashion,
    Food,
    Games,
    Movies,
    Sports,
    Stationery,
    Other
  } = props.categories;
  const error =
    [
      Art,
      Books,
      Fashion,
      Food,
      Games,
      Movies,
      Sports,
      Stationery,
      Other
    ].filter(v => v).length === 0;

  return (
    <div className="container">
      <FormControl required error={error} component="fieldset">
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Art}
                onChange={e => {
                  props.onCheckboxChange('Art', e);
                  console.log(e.target.checked);
                }}
              />
            }
            label="Art"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Books}
                onChange={e => props.onCheckboxChange('Books', e)}
              />
            }
            label="Books"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Fashion}
                onChange={e => props.onCheckboxChange('Fashion', e)}
              />
            }
            label="Fashion"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Food}
                onChange={e => props.onCheckboxChange('Food', e)}
              />
            }
            label="Food"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Games}
                onChange={e => props.onCheckboxChange('Games', e)}
              />
            }
            label="Games"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={Movies}
                onChange={e => props.onCheckboxChange('Movies', e)}
              />
            }
            label="Movies"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={Sports}
                onChange={e => props.onCheckboxChange('Sports', e)}
              />
            }
            label="Sports"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={Stationery}
                onChange={e => props.onCheckboxChange('Stationery', e)}
              />
            }
            label="Stationery"
          />
          <div className="container">
            <FormControlLabel
              control={
                <Checkbox
                  checked={Other}
                  onChange={e => props.onCheckboxChange('Other', e)}
                />
              }
              label="Other:"
            />
            <input
              className="input-other"
              disabled={!Other}
              onChange={e => props.onOtherInputChange(e)}
            />
          </div>
        </FormGroup>
        <FormHelperText stlye={{ marginTop: 15 }}>
          Pick at least one!
        </FormHelperText>
      </FormControl>
    </div>
  );
};
