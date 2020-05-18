import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const renderTextField = ({
                             label,
                             input,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => (
    <TextField
        variant="outlined"
        required
        fullWidth
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderCheckBox = ({input, label}) => (
    // eslint-disable-next-line no-unused-expressions
    <FormControlLabel
        control={
            <Checkbox
                value="allowExtraEmails"
                name="allowEmail"
                color="primary"
                onChange={input.onChange} />}
        label={label}
    />
);

export {
  renderCheckBox,
  renderTextField,
};