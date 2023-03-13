import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';

import { getLocationGQL } from '../../store/apis/rickAndMortyGraphQL';
import { CharacterCard } from '../components/CharacterCard';
import { ViewerLayout } from '../layout/ViewerLayout';


export const LocationPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  
  const onNavigateBack = () => {
    navigate(-1)
  }

  const { loading, data = {} } = useQuery(getLocationGQL(id));

  if( loading === true ) {
    return <h1>Cargando...</h1>;
  }

  const { name, type, dimension, residents = [] } = data.location

  return (
    <ViewerLayout>
      <button onClick={ onNavigateBack } className="btn btn-outline-primary">
        Regresar
      </button>
      <div className="row mt-5">
        <div >
          <h1 style={{textAlign:'center'}} >{name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <h5>Tipo: <strong>{type}</strong> </h5>  </li>
            <li className="list-group-item"> <h5>Dimension: <strong>{dimension}</strong> </h5>  </li>
          </ul>

          <hr/>

          <h5 className="mt-3">Residentes de la ubicacion: </h5>

          <Grid container>
          {
            residents.map( resident => (
              <CharacterCard key={resident.id} character={resident} />
            ))
          }
          </Grid>

          <br/>

        </div>
      </div>
    </ViewerLayout>
  )
}
