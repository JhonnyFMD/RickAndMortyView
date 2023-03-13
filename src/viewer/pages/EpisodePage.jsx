import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';

import { getEpisodeGQL } from '../../store/apis/rickAndMortyGraphQL';
import { CharacterCard } from '../components/CharacterCard';
import { ViewerLayout } from '../layout/ViewerLayout';


export const EpisodePage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  
  const onNavigateBack = () => {
    navigate(-1)
  }

  const { loading, data = {} } = useQuery(getEpisodeGQL(id));

  if( loading === true ) {
    return <h1>Cargando...</h1>;
  }

  const { name, air_date, episode, characters = [] } = data.episode

  return (
    <ViewerLayout>
      <button onClick={ onNavigateBack } className="btn btn-outline-primary">
        Regresar
      </button>
      <div className="row mt-5">
        <div >
          <h1 style={{textAlign:'center'}} >{name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <h5>Fecha de lanzamiento: <strong>{air_date}</strong> </h5>  </li>
            <li className="list-group-item"> <h5>Episodio: <strong>{episode}</strong> </h5>  </li>
          </ul>

          <hr/>

          <h5 className="mt-3">Personajes del episodio: </h5>

          <Grid container>
          {
            characters.map( character => (
              <CharacterCard key={character.id} character={character} />
            ))
          }
          </Grid>

          <br/>

        </div>
      </div>
    </ViewerLayout>
  )
}
