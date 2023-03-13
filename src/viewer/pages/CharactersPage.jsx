import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Check, Error, Loop, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';

import { useForm } from '../../hooks';
import { getCharactersGQL } from '../../store/apis/rickAndMortyGraphQL';
import { CharacterCard } from '../components/CharacterCard';
import { ViewerLayout } from '../layout/ViewerLayout';


const formData = {
  characterName: '',
}

export const CharactersPage = () => {

  const [ page, setPage ] = useState(1);
  const {characterName, onInputChange} = useForm(formData);

  useEffect(() => {
    setPage(1)
  }, [characterName])
  
  const { loading, data = {} } = useQuery(getCharactersGQL({page, characterName}));
  const { info: charactersInfo = {}, results: characters = [] } = data.characters || {};

  const charactersPages = charactersInfo.pages || '?';

  const nextPage = () => {
    if(page<charactersPages){
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
          <h1> Personajes </h1>
        </Grid>
        <Grid item display='flex' style={{ margin: '10px', justifyContent: 'flex-end', alignItems: 'center' }} >
          { ( loading === true ) ? <Loop fontSize="large" /> : <></> }
          { ( charactersPages === '?' && loading === false ) ? <Error fontSize="large" /> : <></>}
          { ( charactersPages !== '?' && loading === false ) ? <Check fontSize="large" style={{margin:'10px'}} /> : <></> }
          <form>
            <TextField
                  label='Busqueda'
                  type='text'
                  placeholder='Nombre'
                  name='characterName'
                  value={ characterName }
                  onChange={ onInputChange }
                />
          </form>
        </Grid>
      </Grid>
      <h5 style={{ textAlign:'end' }} >Pagina: {page+'/'+charactersPages}</h5>
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
          (charactersPages === '?') ? (
            ( loading === false ) 
              ? <p>NO SE ENCONTRO NINGUN RESULTADO</p>
              : <p> CARGANDO... </p>
          ) : (
            characters.map( character => (
              <CharacterCard key={character.id} character={character} />
            ))
          )
        }
      </Grid>

    </ViewerLayout>
  )
}
