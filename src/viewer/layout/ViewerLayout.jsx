import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"

import { NavBar } from "../../ui"


export const ViewerLayout = ({ children }) => {
  return (
    <Box 
      sx={{display: 'flex'}}
      className='animate__animated animate__fadeIn animate__faster'
    >
      
      <NavBar/>

      <Box 
        component='main'
        sx={{flexGrow: 1, p: 3}}
      >
        <Toolbar 
          position='fixed'
          style={{minHeight: '80px'}} 
        />
        { children }
      </Box>

    </Box>
  )
}
