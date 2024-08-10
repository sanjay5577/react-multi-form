import {
    Typography,useMediaQuery
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { useTheme } from "@mui/material/styles";

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

            <Typography variant= {isMobile ? 'h4' : 'h3'} component="h2" mb={2}>
              Multi Step Form
       </Typography>
       </Box>
    )
}

export default Navbar;
