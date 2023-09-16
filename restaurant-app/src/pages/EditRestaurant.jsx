import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchRestaurant from '../components/SearchRestaurant';

const steps = ['Select Restaurant', 'Update Restaurant'];

export default function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [restaurantName, setRestaurantName] = React.useState('');

  const isStepOptional = (step) => {
    return step === 1;
  };



  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNameChange = (event) => {
    setRestaurantName(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        marginTop: '10px'
      }}
    >
      <Box sx={{ width: '60%', mt: 7 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Successfully Updated
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (

              <SearchRestaurant handleNameChange={handleNameChange} restaurantName={restaurantName} />
            )}

            {activeStep === 1 && <UpdateRestaurant />} {/* Display UpdateRestaurant component in step 1 */}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />


              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Update Restaurant' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}

// Define your UpdateRestaurant component separately
function UpdateRestaurant() {
  // Your UpdateRestaurant component content here
  return (
    <div>
      {/* Add your UpdateRestaurant component content here */}
    </div>
  );
}
