import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { useLocation } from 'react-router-dom';

import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const SimpleStepper = () => {
  const location = useLocation();
  const classes = useStyles();

  const steps = ['Talep Oluştur', 'Talebi Onayla', 'Talebiniz Alınmıştır!'];

  const getActiveStep = () => {
    if (location.pathname === '/request') return 0;
    if (location.pathname === '/request-submit') return 1;
    if (location.pathname === '/request-success') return 3;
    return 0;
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={getActiveStep()} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default SimpleStepper;
