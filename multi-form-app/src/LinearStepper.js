import React, { useState , memo} from "react";
import {useEffect} from 'react'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Box } from "@mui/system";

import{useForm  ,FormProvider  , useFormContext , Controller } from "react-hook-form"

const MemoizedTextField = memo((props) => {
  return <TextField {...props} />;
});


const LinearStepper = () => {

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

function getSteps() {
  return [
    "Personal Information",
    "Address Information",
    "Confirmation",
  ];
}

const handleChange = (e)=>{
  setFormData( 
   {...formData,[e.target.name] :e.target.value}
  )
 }

const PersonalInformation = ()=>{
  return(
    <Box className="content">
    <TextField
            id="name"
            label="Name"
            variant="outlined"
            title="Name"
            name="name"
            placeholder="Enter Name"
            fullWidth
            onChange={(e)=> {handleChange(e)}}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            name="email"
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
            onChange={handleChange}
          />
    </Box>
  )
}

const AddressInformation = ()=> {
  return(
    <>
    <TextField
            id="addressline1"
            label="Address Line 1"
            variant="outlined"
            placeholder="Enter Your Address Line 1"
            fullWidth
            margin="normal"
            name="addressline1"
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
            onChange={handleChange}
          />
    </>
  )
}

const Confirmation = ()=>{
  return(
    <>
     <Typography variant="h6" component="span">
        Name : 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.name}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        Email : 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.email}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        Phone Number: 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.phonennumber}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        Address Line 1: 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.addressline1}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
      Address Line 2: 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.addressline2}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        City : 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.city}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        State : 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.state}`}
      </Typography>
      <br />
      <Typography variant="h6" component="span">
        Zip Code: 
      </Typography>
      <Typography variant="body1" component="span">
        {` ${formData.zipcode}`}
      </Typography>
    </>
  )
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <PersonalInformation/>
          </>
      );

    case 1:
      return (
        <>
          <AddressInformation/>
        </>
      );
    case 2:
      return (
        <>
           <Confirmation/>
        </>
      );
    default:
      return "unknown step";
  }
}




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
        <Typography variant="h5" align="center">
          Form Submitted Successfully, Thank You!!
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
        </>
      )}
    </div>
  );
};

export default LinearStepper;