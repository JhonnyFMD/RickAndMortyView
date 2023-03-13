import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


export const CharacterCard = ({character = {}}) => {
  const { id, name, image, species, gender, status } = character;
  return (
      <Grid item display='flex' textAlign='left' alignItems='left' className="col  animate__animated animate__fadeIn" style={{minWidth: '400px', maxHeight:'400px'}} >
        <Link to={`/character/${id}`} style={{ textDecoration: 'none', color:'black'}}> 
          <Grid className="card" style={{backgroundColor:'#F2EDFF', margin: '10px'}} >
            <Grid className="row no-gutters">

              <Grid className="col-4">
                <img src={image} className="card-img" alt={name}  style={{ minWidth:'160px', margin: '10px'}} />
              </Grid>

              <Grid className="col-8" style={{alignContent:'end'}} >
                <Grid className="card-body" style={{textAlign:'center'}} >
                  <h5 className="card-title" >{name}</h5>
                  <p className="card-text">{'Especie: '+species}</p>
                  <p className="card-text">{'Genero: '+gender}</p>
                  <p className="card-text">{'Estado: '+status}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Link>
      </Grid>
  )
}
