import { useState } from 'react'
import{ Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import NBAGames from './pages/NBAGames';
import TeamStandings from './pages/TeamStandings';
import PlayerStats from './pages/PlayerStats';
import Navs from './components/Navs';
import { getUser } from './utils/users-service';
import './App.css';

const App = () => {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
    {
      user ?
      <> 
      <Navs  user={user}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/standings' element={<TeamStandings/>} />
        <Route path='/stats' element={<PlayerStats/>} />
        <Route path='/games' element={<NBAGames/>} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    </main>
  );
}

export default App;
