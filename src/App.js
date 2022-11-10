import{ Route, Routes } from 'react-router-dom'
import PlayerStats from './pages/PlayerStats';
import NBAGames from './pages/NBAGames';
import TeamStandings from './pages/TeamStandings';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
    
      <Nav />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/standings' element={<TeamStandings/>} />
        <Route path='/stats' element={<PlayerStats/>} />
        <Route path='/games' element={<NBAGames/>} />
      </Routes>

    </div>
  );
}

export default App;
