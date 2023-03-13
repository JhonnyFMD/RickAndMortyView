import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { AccessibilityNew, AccountCircle, LocationOn, LogoutOutlined, OndemandVideo } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

import { startLogout } from "../../store";


export const NavBar = () => {

  const dispatch = useDispatch();
  const { displayName } = useSelector( state => state.auth );

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar
      position='fixed'
      style={{minHeight: '80px'}}
    >

      <Toolbar>

        <Grid container
          direction='row'
          justifyContent='space-around'
        >

          <Grid item display='flex' textAlign='center' alignItems='center'>
            <Link to='/'  style={{ textDecoration: 'none' }} >
              <IconButton>
                <img src="/logo.png" style={{ width: '208px' }} />
              </IconButton>
            </Link>
          </Grid>

          <Grid item display='flex' textAlign='center' alignItems='center'>
            <Link to='/characters'  style={{ textDecoration: 'none' }} >
              <IconButton style={{color: 'white'}} >
                <AccessibilityNew fontSize="large" />
                &nbsp;
                <Typography > Personajes</Typography>
              </IconButton>
            </Link>
          </Grid>

          <Grid item display='flex' textAlign='center' alignItems='center'>
            <Link to='/locations'  style={{ textDecoration: 'none' }} >
              <IconButton style={{color: 'white'}} >
                <LocationOn fontSize="large" />
                &nbsp;
                <Typography > Ubicaciones</Typography>
              </IconButton>
            </Link>
          </Grid>

          <Grid item display='flex' textAlign='center' alignItems='center'>
            <Link to='/episodes'  style={{ textDecoration: 'none' }} >
              <IconButton style={{color: 'white'}} >
                <OndemandVideo fontSize="large" />
                &nbsp;
                <Typography > Episodios</Typography>
              </IconButton>
            </Link>
          </Grid>

          <Grid item display='flex' textAlign='center' alignItems='center'>
            <div style={{display: 'flex'}} >
              <IconButton style={{color: 'white'}}>
                <AccountCircle fontSize="large" />
                &nbsp;
                <Typography>{ displayName }</Typography>
              </IconButton>

              <IconButton onClick={ onLogout } color='error'>
                <LogoutOutlined fontSize="large" />
              </IconButton>
            </div> 
          </Grid>

        </Grid>

      </Toolbar>

    </AppBar>
  )
}
