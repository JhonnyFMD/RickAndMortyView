import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Check, Error, Loop, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';

import { useForm } from '../../hooks';
import { getEpisodesGQL } from '../../store/apis/rickAndMortyGraphQL';
import { EpisodeCard } from '../components/EpisodeCard';
import { ViewerLayout } from '../layout/ViewerLayout';


const formData = {
  episodeName: '',
}

export const EpisodesPage = () => {

  const [ page, setPage ] = useState(1);

  const {episodeName, onInputChange} = useForm(formData);

  
  const { loading, data = {} } = useQuery(getEpisodesGQL({page, episodeName}));
  const { info: episodesInfo = {}, results: episodes = [] } = data.episodes || {};

  const episodesPages = episodesInfo.pages || '?';

  useEffect(() => {
    setPage(1)
  }, [episodeName])
  

  const nextPage = () => {
    if(page<episodesPages){
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
          <h1> Episodios </h1>
        </Grid>
        <Grid item display='flex' style={{ margin: '10px', justifyContent: 'flex-end', alignItems: 'center' }} >
          { ( loading === true ) ? <Loop fontSize="large" /> : <></> }
          { ( episodesPages === '?' && loading === false ) ? <Error fontSize="large" /> : <></> }
          { ( episodesPages !== '?' && loading === false ) ? <Check fontSize="large" style={{margin:'10px'}} /> : <></> }
          <form>
            <TextField
                  label='Busqueda'
                  type='text'
                  placeholder='Nombre'
                  name='episodeName'
                  value={ episodeName }
                  onChange={ onInputChange }
                />
          </form>
        </Grid>
      </Grid>
      <h5 style={{ textAlign:'end' }} >Pagina: {page+'/'+episodesPages}</h5>
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
          (episodesPages === '?') ? (
            ( loading === false ) 
              ? <p>NO SE ENCONTRO NINGUN RESULTADO</p>
              : <p> CARGANDO... </p>
          ) : (
            episodes.map( episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          )
        }
      </Grid>

    </ViewerLayout>
  )
}
