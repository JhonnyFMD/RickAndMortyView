import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Check, Error, Loop, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';

import { useForm } from '../../hooks';
import { getLocationsGQL } from '../../store/apis/rickAndMortyGraphQL';
import { LocationCard } from '../components/LocationCard';
import { ViewerLayout } from '../layout/ViewerLayout';


const formData = {
  locationName: '',
}

export const LocationsPage = () => {

  const [ page, setPage ] = useState(1);

  const {locationName, onInputChange} = useForm(formData);

  useEffect(() => {
    setPage(1)
  }, [locationName])

  const { loading, data = {} } = useQuery(getLocationsGQL({page, locationName}));
  const { info: locationsInfo = {}, results: locations = [] } = data.locations || {};

  const locationsPages = locationsInfo.pages || '?';

  const nextPage = () => {
    if(page<locationsPages){
      setPage( (c) => c+1 )
    };
  }

  const prevPage = () => {
    if(page>1) setPage( (c) => c-1 )
  }

  return (
    <ViewerLayout>
      <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item display='flex' style={{ margin: '10px' }} >
          <h1> Ubicaciones </h1>
        </Grid>
        <Grid item display='flex' style={{ margin: '10px', justifyContent: 'flex-end', alignItems: 'center' }} >
          { ( loading === true ) ? <Loop fontSize="large" /> : <></> }
          { ( locationsPages === '?' && loading === false ) ? <Error fontSize="large" /> : <></> }
          { ( locationsPages !== '?' && loading === false ) ? <Check fontSize="large" style={{margin:'10px'}} /> : <></> }
          <form>
            <TextField
                  label='Busqueda'
                  type='text'
                  placeholder='Nombre'
                  name='locationName'
                  value={ locationName }
                  onChange={ onInputChange }
                />
          </form>
        </Grid>
      </Grid>
      <h5 style={{ textAlign:'end' }} >Pagina: {page+'/'+locationsPages}</h5>
      <Grid container>
        <Grid item xs={12} textAlign='end'>
          <IconButton onClick={ prevPage }>
            <NavigateBefore/>
          </IconButton>
          <IconButton onClick={ nextPage }>
            <NavigateNext/>
          </IconButton>
        </Grid>
      </Grid>
      <hr/>

      <Grid container>
        {
          ( locationsPages === '?') ? (
            ( loading === false ) 
              ? <p>NO SE ENCONTRO NINGUN RESULTADO</p>
              : <p> CARGANDO... </p>
          ) : (
            locations.map( location => (
              <LocationCard key={location.id} location={location} />
            ))
          )
        }
      </Grid>

    </ViewerLayout>
  )
}
