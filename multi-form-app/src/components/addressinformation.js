import { TextField,} from "@mui/material";
  
  import{ useFormContext , Controller } from "react-hook-form"

  const AddressInformation = ({handleChange})=> {
    const { control , formState: {errors}, } = useFormContext(); 
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

  export default AddressInformation;