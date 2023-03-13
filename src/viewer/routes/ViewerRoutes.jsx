import { Navigate, Route, Routes } from 'react-router-dom';

import { CharacterPage } from '../pages/CharacterPage';
import { CharactersPage } from '../pages/CharactersPage';
import { EpisodePage } from '../pages/EpisodePage';
import { EpisodesPage } from '../pages/EpisodesPage';
import { InfoPage } from '../pages/InfoPage';
import { LocationPage } from '../pages/LocationPage';
import { LocationsPage } from '../pages/LocationsPage';


export const ViewerRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<InfoPage/>} />
      <Route path='/info' element={<InfoPage/>} />
      <Route path='/characters' element={<CharactersPage/>} />
      <Route path='/character/:id' element={<CharacterPage/>} />
      <Route path='/locations' element={<LocationsPage/>} />
      <Route path='/location/:id' element={<LocationPage/>} />
      <Route path='/episodes' element={<EpisodesPage/>} />
      <Route path='/episode/:id' element={<EpisodePage/>} />
      <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
