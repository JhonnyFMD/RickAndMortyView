import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getCharacterGQL } from '../../store/apis/rickAndMortyGraphQL';
import { ViewerLayout } from '../layout/ViewerLayout';


export const CharacterPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  
  const onNavigateBack = () => {
    navigate(-1)
  }

  const { loading, data = {} } = useQuery(getCharacterGQL(id));

  if( loading === true ) {
    return <h1>Cargando...</h1>;
  }

  const { status, name, image, species, gender, location } = data.character

  return (
    <ViewerLayout>
      <div className="row mt-5">
        <div className="col-4">
          <img src={image} alt={ id } className="img-thumbnail" />
        </div>
        <div className="col-8">
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">

            <li className="list-group-item"> <b>Especie:</b> {species} </li>
            <li className="list-group-item"> <b>Genero:</b> {gender} </li>
            <li className="list-group-item"> <b>Estado:</b> {status} </li>

          </ul>

          <h5 className="mt-3">Ubicacion</h5>
          <p>{location.name}</p>

          <button onClick={ onNavigateBack } className="btn btn-outline-primary">
            Regresar
          </button>

          <br/>

        </div>
      </div>
    </ViewerLayout>
  )
}
