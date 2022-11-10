import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const PlayerStats = () => {
    // const APIKey = "78f9403571mshde8f4125b746cc6p1a0150jsn830947c7f904"
    // const url = `https://free-nba.p.rapidapi.com/stats&appid=${APIKey}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '78f9403571mshde8f4125b746cc6p1a0150jsn830947c7f904',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    
    fetch('https://free-nba.p.rapidapi.com/stats?page=0&per_page=25', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    const [stats, setStats] = useState(null)

    const fetchStats = async () => {
        // const res = await fetch(url)
        // const stats = await res.json()
        console.log(stats);
        setStats(stats)
    }
    useEffect(() => {
        fetchStats()
    }, [])

    return (
        <div>
            <h1>NBA Player Stats</h1>
            {stats && stats.player.map(data => (
                <div>
                    <h3>{data.player}</h3>
                </div>
            ))}
        </div>
    )
    
}

export default PlayerStats