import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const RadioButtonsGroup = props => {
  const [value, setValue] = useState("five");

  const handleChange = event => {
    setValue(event.target.value);
    props.onPriceRangeChange(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel
          component="legend"
          style={{ fontFamily: "Poppins", marginBottom: 20 }}
        >
          How much are you willing to spend on the gift?
        </FormLabel>
        <RadioGroup name="priceRange" value={value} onChange={handleChange}>
          <FormControlLabel value="five" control={<Radio />} label="$5 - $10" />
          <FormControlLabel
            value="eleven"
            control={<Radio />}
            label="$11 - $15"
          />
          <FormControlLabel
            value="sixteen"
            control={<Radio />}
            label="$16 - $20"
          />
          <FormControlLabel value="twenty+" control={<Radio />} label="$20+" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
