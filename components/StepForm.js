import React, { useState } from 'react';
import { Stepper, Step, StepLabel, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Company Details', 'Company Description', 'Founders', 'Funding & Timeline'];
}

function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.actionsContainer}>
        {activeStep === 0 && (
          <>
            <TextField
              required
              id="company-name"
              label="Company Name (Brand Name)"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="legal-name"
              label="Legal Name (Registered Name)"
             fullWidth
              autoComplete="fname"
            />
            <br />
            <br />
            <TextField
              id="website"
              label="Website"
              placeholder="https://"
              fullWidth
              autoComplete="fname"
            />
            <br />
            <br />
            <p>Logo(300x300):</p>
            <br />
            <br />
            <input type="file" id="logo-file" />
            <br />
            <br />
            <TextField
              required
              id="incorporated-date"
              label="Incorporated Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="mt-4"
            />
            <br />
            <br />
            <TextField
              required
              id="primary-email"
              label="Primary Email"
              fullWidth
              autoComplete="fname"
            />
            <br />
            <TextField
              required
              id="phone-number"
              label="Phone Number"
              fullWidth
              autoComplete="fname"
            />
          </>
        )}
        {activeStep === 1 && (
          <div>
            <TextField
              required
              id="company-one-liner"
              label="One liner about your company (80-250 char)"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="company-description"
              label="Brief description of Company"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="app-link"
              label="Do you have any app? (If any)"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="company-linkedin"
              label="Company linkedin"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="company-twitter"
              label="Twitter"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="company-facebook"label="Facebook"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="company-wikipedia"
              label="Wikipedia"
              fullWidth
              autoComplete="fname"
            />
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <TextField
              required
              id="business-model"
              label="Business Model"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="industry"
              label="Industry"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="revenue-stream"
              label="What is your revenue Stream"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="founder-name"
              label="Founder name"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="founder-linkedin"
              label="Founder's Linkedin"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              id="add-more-founders"
              label="Do you want to add more founders?"
              fullWidthautoComplete="fname"
            />
          </div>
        )}
        {activeStep === 3 && (
          <div>
            <TextField
              required
              id="funding-status"
              label="Funding Status"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="target-segment"
              label="Target Segment"
              fullWidth
              autoComplete="fname"
            />
            <TextField
              required
              id="target-group"
              label="Target Group"
              fullWidth
              autoComplete="fname"
            />
          </div>
        )}
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
      {activeStep === steps.length && (
        <div className={classes.resetContainer}>
          <Typography>Thanks for taking the time out to fill the form. Our team will reach out to you in case we have any further questions.</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}

export default Form;