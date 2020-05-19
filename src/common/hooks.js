import React, { useState } from 'react';
import '../App.css';

const useForm = (labels, options, defaultStates) => {
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
    <form>
      {labels.dropdown && (
        <div className="input-area">
          {labels.dropdown}
          <select
            className="new-user-form-input"
            value={inputValues.dropdownInputValue}
            onChange={(e) => genericHandleChange('dropdownInputValue', e)}
          >
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      )}
      {labels.firstInput && (
        <div className="input-area">
          <label>
            {labels.firstInput}
            <input
              key={labels.firstInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.firstInputValue}
              onChange={(e) => genericHandleChange('firstInputValue', e)}
            />
          </label>
        </div>
      )}
      {labels.secondInput && (
        <div className="input-area">
          <label>
            {labels.secondInput}
            <input
              key={labels.secondInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.secondInputValue}
              onChange={(e) => genericHandleChange('secondInputValue', e)}
            />
          </label>
        </div>
      )}
      {labels.thirdInput && (
        <div className="input-area">
          <label>
            {labels.thirdInput}
            <input
              key={labels.thirdInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.thirdInputValue}
              onChange={(e) => genericHandleChange('thirdInputValue', e)}
            />
          </label>
        </div>
      )}
      {labels.fourthInput && (
        <div className="input-area">
          <label>
            {labels.fourthInput}
            <input
              key={labels.fourthInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.fourthInputValue}
              onChange={(e) => genericHandleChange('fourthInputValue', e)}
            />
          </label>
        </div>
      )}
      {labels.fifthInput && (
        <div className="input-area">
          <label>
            {labels.fifthInput}
            <input
              key={labels.fifthInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.fifthInputValue}
              onChange={(e) => genericHandleChange('fifthInputValue', e)}
            />
          </label>
        </div>
      )}
      {labels.sixthInput && (
        <div className="input-area">
          <label>
            {labels.sixthInput}
            <input
              key={labels.sixthInput}
              className="new-user-form-input"
              type="text"
              value={inputValues.sixthInputValue}
              onChange={(e) => genericHandleChange('sixthInputValue', e)}
            />
          </label>
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
