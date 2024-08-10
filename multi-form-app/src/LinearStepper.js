import React, { useState , useEffect} from "react";

import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Box } from "@mui/system";

import{useForm  ,FormProvider } from "react-hook-form";
import Navbar from "./navbar";
import PersonalInformation from "./components/personalinformation";
import AddressInformation from "./components/addressinformation";
import Confirmation from "./components/confirmation"





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
  const methods = useForm({
    defaultValues: formData,
    shouldUnregister: false, 
   mode: "all"
  }); // Initialize form context

  const {
    trigger,
    clearErrors,
  } = methods;

  // console.log(formData);

 const handleChange =(e)=>{
  setFormData(prevData => ({
    ...prevData,
    [e.target.name]: e.target.value
  }));

 }

 useEffect (()=>{
  localStorage.setItem("react-multi-form-data", JSON.stringify({
    ...formData
  }));

 }, [formData])

 

function getSteps() {
  return [
    "Personal Information",
    "Address Information",
    "Confirmation",
  ];
}



function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <PersonalInformation handleChange = {handleChange}/>
          </>
      );

    case 1:
      return (
        <>
          <AddressInformation handleChange = {handleChange}/>
        </>
      );
    case 2:
      return (
        <>
           <Confirmation formData={formData}/>
        </>
      );
    default:
      return "unknown step";
  }
}




  const steps = getSteps();


  const handleNext = async() => {
    const isStepValid = await methods.trigger();
    if (isStepValid) {
      setActiveStep((prevStep) => prevStep + 1);
    }
   
  };

  if (activeStep === steps.length){
    localStorage.removeItem("react-multi-form-data");
  }


  const handleBack = () => {
    clearErrors();
    setActiveStep(activeStep - 1);
  };

  const isStepFailed =()=>{
    return Boolean(Object.keys(methods.formState.errors).length)
  }


  return (
   
    <Box
     >
      <Navbar/>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          if(isStepFailed() && activeStep === index){
            labelProps.error = true
          }

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h5" align="center" sx={{ color :'#1976d2',}} mt={2}>
          Form Submitted Successfully, Thank You!!
        </Typography>
      ) : (
        <>

           <FormProvider  {...methods}>
          <form>{getStepContent(activeStep)}</form>
          
          <Box
          display="flex"
          justifyContent="center"
          sx={{  width: '100%' }}
          >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
          </Box>

          </FormProvider >
        </>
      )}
    </Box>

  );
};

export default LinearStepper;