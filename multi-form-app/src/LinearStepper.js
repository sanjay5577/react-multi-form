import React, { useState } from "react";

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
  
  } = methods;

  console.log(formData);

 const handleChange =(e)=>{
  setFormData(prevData => ({
    ...prevData,
    [e.target.name]: e.target.value
  }));
  localStorage.setItem("react-multi-form-data", JSON.stringify({
    ...formData,
    [e.target.name]: e.target.value
  }));
 }

function getSteps() {
  return [
    "Personal Information",
    "Address Information",
    "Confirmation",
  ];
}


 const PersonalInformation = () => {
  const { control , formState: {errors},} = useFormContext(); 

  return( 
    <Box className="content">
      <Controller  
        control={control}
        name="name"
        rules ={{required : "Name is required.",
        validate: (value) =>
              value.trim() !== "" || "Name cannot be empty.",
        }}
        render={({ field }) => (
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            title="Name"
            placeholder="Enter Name"
            fullWidth
            {...field}  // Spread the field props which includes value and onChange
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}

            error ={Boolean(errors.name)}
            helperText = {errors.name?.message}
          />
        )}
      />

      <Controller  
        control={control}
        name="email"
        rules ={{required : "Email is required.",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      }}
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"  
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error ={Boolean(errors.email)}
            helperText = {errors.email?.message}
          />
        )}
      />

      <Controller  
        control={control}
        name="phonenumber"
        rules ={{required : "Phone Number is required.",
        pattern: {
          value: /^\d{10}$/, // Pattern for 10-digit phone number
          message: "Invalid phone number, must be 10 digits",
        },
        validate: {
          notAllZeros: (value) =>
            value !== "0000000000" || "Phone number cannot be all zeros",
        },
        }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error ={Boolean(errors.phonenumber)}
            helperText = {errors.phonenumber?.message}
          />
        )}
      />
    </Box>
  )
}


const AddressInformation = ()=> {
  const { control , formState: {errors},} = useFormContext(); 
  return(
    <>
          <Controller  
        control={control}
        name="addressline1"
        rules ={{required : "Address Line 1 is required.",
        validate: (value) =>
              value.trim() !== "" || "Address Line 1 cannot be empty.",
        
        }}
        render={({ field }) => (
          <TextField
          id="addressline1"
          label="Address Line 1"
          variant="outlined"
          placeholder="Enter Your Address Line 1"
          fullWidth
          margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error = {Boolean(errors.addressline1)}
            helperText = {errors.addressline1?.message}
          />
        )}
      />
       
       <Controller  
        control={control}
        name="addressline2"
        rules ={{required : "Address Line 2 is required.",
        validate: (value) =>
              value.trim() !== "" || "Address Line 2 cannot be empty.",
        }}
        render={({ field }) => (
          <TextField
          id="addressline2"
          label="Address Line 2"
          variant="outlined"
          placeholder="Enter Your Address Line 2"
          fullWidth
          margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
          
          error ={Boolean(errors.addressline2)}
          helperText = {errors.addressline2?.message}
          />
        )}
      />

<Controller  
        control={control}
        name="city"
        rules ={{required : "City is required.",
        validate: (value) =>
              value.trim() !== "" || "City cannot be empty.",
        }}
        render={({ field }) => (
          <TextField
          id="city"
          label="City"
          variant="outlined"
          placeholder="Enter Your City Name"
          fullWidth
          margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error ={Boolean(errors.city)}
            helperText = {errors.city?.message}
          />
        )}
      />
        
        <Controller  
        control={control}
        name="state"
        rules ={{required : "State is required.",
        validate: (value) =>
              value.trim() !== "" || "State cannot be empty.",
        }}
        render={({ field }) => (
          <TextField
          id="state"
          label="State"
          variant="outlined"
          placeholder="Enter Your State Name"
          fullWidth
          margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error ={Boolean(errors.state)}
            helperText = {errors.state?.message}
          />
        )}
      />


<Controller  
        control={control}
        name="zipcode"
        rules ={{required : "Zip Code is required.",
        pattern: {
                value: /^\d{6}$/, // Pattern for 10-digit phone number
                message: "Invalid Zip Code, must be 6 digits",
              },
         validate: {
                notAllZeros: (value) =>
                  value !== "000000" || "Zip Code cannot be all zeros",
         },
        }}
        render={({ field }) => (
          <TextField
          id="zipcode"
          label="Zip Code"
          variant="outlined"
          placeholder="Enter Your Zip Code"
          fullWidth
          margin="normal"
            {...field}  // Spread the field props
            onBlur={(e) => {
              field.onBlur();  // Call react-hook-form's onBlur
              handleChange(e)
            }}
            error ={Boolean(errors.zipcode)}
            helperText = {errors.zipcode?.message}
          />
        )}
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
        {` ${formData.phonenumber}`}
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


  const handleNext = async() => {
    const isStepValid = await methods.trigger();
    if (isStepValid) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    // if(! Boolean(Object.keys(methods.formState.errors).length)){
    //   setActiveStep(activeStep + 1);
    // }
    
   
  };

  if (activeStep === steps.length){
    localStorage.removeItem("react-multi-form-data");
  }


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const isStepFailed =()=>{
    return Boolean(Object.keys(methods.formState.errors).length)
  }


  return (
    <div>
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
        <Typography variant="h5" align="center">
          Form Submitted Successfully, Thank You!!
        </Typography>
      ) : (
        <>

           <FormProvider  {...methods}>
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