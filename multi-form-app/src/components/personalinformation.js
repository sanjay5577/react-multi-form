

import {
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import{ useFormContext , Controller } from "react-hook-form";

const PersonalInformation = ({handleChange}) => {
    const { control , formState: {errors}, } = useFormContext(); 
  
    return( 
      <Box className="content" mt={2}>
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

  
  export default PersonalInformation;