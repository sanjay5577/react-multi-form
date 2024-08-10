import {
    Typography,useMediaQuery
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { useTheme } from "@mui/material/styles";
  import Image from 'mui-image'


  import logo from "./assests/job_10485121.png"

   const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is small (mobile)

  
    return(
        <Box
        height={100}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={2}
      
      sx={{ border: '1px solid grey' , backgroundColor :'#1976d2', color : 'white', width: '100%', borderRadius: '10px' }}
>
  
      <Image src={logo} alt="form img" height="60" width ={60}/>
            <Typography variant= {isMobile ? 'h4' : 'h3'} component="h2" mb={2}>
              Multi Step Form
       </Typography>
       </Box>
    )
}

export default Navbar;
