import {Typography,} from "@mui/material";

const Confirmation = ({formData})=>{
    return(
      <>
       <Typography variant="h6" component="span"  sx={{ color :'#1976d2',}}>
          Name     : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.name}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          Email     : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.email}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          Phone Number : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.phonenumber}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          Address Line 1 : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.addressline1}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
        Address Line 2 : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.addressline2}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          City         : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.city}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          State        : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.state}`}
        </Typography>
        <br />
        <Typography variant="h6" component="span"sx={{ color :'#1976d2',}}>
          Zip Code      : 
        </Typography>
        <Typography variant="h6" component="span">
          {` ${formData.zipcode}`}
        </Typography>
      </>
    )
  }

  export default Confirmation;