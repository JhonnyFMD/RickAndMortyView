import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


export const LocationCard = ({location = {}}) => {
  const { id, name, type, dimension } = location;
  return (
    <Grid item display='flex' textAlign='left' alignItems='left' className="col  animate__animated animate__fadeIn" style={{minWidth: '400px', maxHeight:'400px'}} >
      <Link to={`/location/${id}`} style={{ textDecoration: 'none', color:'black'}}>
        <Grid className="card" style={{backgroundColor:'#F2EDFF', width:'400px', margin: '10px'}} >
          <Grid className="card-body" style={{textAlign:'center'}} >
            <h5 className="card-title" >{name}</h5>
            <p className="card-text">{'Tipo: '+type}</p>
            <p className="card-text">{'Dimension: '+dimension}</p>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  )
}
