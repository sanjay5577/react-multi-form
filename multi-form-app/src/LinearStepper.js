import React, { useState } from "react";
import {useEffect} from 'react'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import{useForm  ,FormProvider  , useFormContext , Controller } from "react-hook-form"


const LinearStepper = () => {

function getSteps() {
  return [
    "Personal Information",
    "Address Information",
    "Confirmation",
  ];
}

const handleChange = (event) => {
  const { name, value } = event.currentTarget;
  setFormData({ ...formData, [name]: value });
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Enter Your Name"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </>
      );

    case 1:
      return (
        <>
          <TextField
            id="addressline1"
            label="Address Line 1"
            variant="outlined"
            placeholder="Enter Your Address Line 1"
            fullWidth
            margin="normal"
            name="addressline1"
            value={formData.addressline1}
            onChange={handleChange}
          />
          <TextField
            id="addressline2"
            label="Address Line 2"
            variant="outlined"
            placeholder="Enter Your Address Line 2"
            fullWidth
            margin="normal"
            name="addressline2"
            value={formData.addressline2}
            onChange={handleChange}
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Enter Your City Name"
            fullWidth
            margin="normal"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your State Name"
            fullWidth
            margin="normal"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <TextField
            id="zipcode"
            label="Zip Code"
            variant="outlined"
            placeholder="Enter Your Zip Code"
            fullWidth
            margin="normal"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </>
      );
    case 2:
      return (
        <>
          
        </>
      );
    default:
      return "unknown step";
  }
}



const [activeStep, setActiveStep] = useState(0);

const savedMultiForm = JSON.parse(localStorage.getItem('react-multi-form-data'));
  const[formData , setFormData] = useState(savedMultiForm ? savedMultiForm : {
        name: "",
        email: "",
        phonenumber: "",
        addressline1: "",
        addressline2: "",
        city: "",
        state: "",
        zipcode: "",
  })
  const steps = getSteps();

  useEffect(()=>{
    localStorage.setItem("react-multi-form-data" , JSON.stringify(formData))

  } , [formData])



  const handleNext = () => {
    setActiveStep(activeStep + 1);

   
  };

  if (activeStep === steps.length){
    localStorage.removeItem("react-multi-form-data");
  }


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>

           <FormProvider >
          <form>{getStepContent(activeStep)}</form>
          </FormProvider >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </FormProvider>
      )}
    </div>
  );
};

export default LinearStepper;