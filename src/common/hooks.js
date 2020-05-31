import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const useForm = (labels, options, defaultStates) => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({
    dropdownInputValue: options[1],
    firstInputValue: defaultStates.firstInput || '',
    secondInputValue: defaultStates.secondInput || '',
    thirdInputValue: defaultStates.thirdInput || '',
    fourthInputValue: defaultStates.fourthInput || '',
    fifthInputValue: defaultStates.fifthInput || '',
    sixthInputValue: defaultStates.sixthInput || '',
  });

  const genericHandleChange = (type, event) => {
    setInputValues({ ...inputValues, [type]: event.target.value });
  };

  const form = () => (
    <form className={classes.root} noValidate autoComplete="off">
      {labels.dropdown && (
        <div>
          <TextField
            id="standard-select-usertype"
            select
            label="Kullanıcı Tipi"
            value={inputValues.dropdownInputValue}
            onChange={(e) => genericHandleChange('dropdownInputValue', e)}
            variant="outlined"
            required
          >
            {options.map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </TextField>
        </div>
      )}

      {labels.firstInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.firstInput}
            value={inputValues.firstInputValue}
            onChange={(e) => genericHandleChange('firstInputValue', e)}
            required
          />
        </div>
      )}
      {labels.secondInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.secondInput}
            value={inputValues.secondInputValue}
            onChange={(e) => genericHandleChange('secondInputValue', e)}
            required
          />
        </div>
      )}
      {labels.thirdInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.thirdInput}
            value={inputValues.thirdInputValue}
            onChange={(e) => genericHandleChange('thirdInputValue', e)}
            required
          />
        </div>
      )}
      {labels.fourthInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.fourthInput}
            value={inputValues.fourthInputValue}
            onChange={(e) => genericHandleChange('fourthInputValue', e)}
            required
          />
        </div>
      )}
      {labels.fifthInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.fifthInput}
            value={inputValues.fifthInputValue}
            onChange={(e) => genericHandleChange('fifthInputValue', e)}
            required
          />
        </div>
      )}
      {labels.sixthInput && (
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={labels.sixthInput}
            value={inputValues.sixthInputValue}
            onChange={(e) => genericHandleChange('sixthInputValue', e)}
            required
          />
        </div>
      )}
    </form>
  );

  return [
    form,
    [
      inputValues.dropdownInputValue,
      inputValues.firstInputValue,
      inputValues.secondInputValue,
      inputValues.thirdInputValue,
      inputValues.fourthInputValue,
      inputValues.fifthInputValue,
      inputValues.sixthInputValue,
    ],
  ];
};

export default useForm;
