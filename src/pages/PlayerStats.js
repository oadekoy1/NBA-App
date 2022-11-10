import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const PlayerStats = () => {
  const url = `https://www.balldontlie.io/api/v1/stats`

    const [stats, setStats] = useState(null)

    const fetchStats = async () => {
        const res = await fetch(url)
        const stats = await res.json()
        console.log(stats);
        setStats(stats)
    }
    useEffect(() => {
        fetchStats()
    }, [])

    return (
        <div>
            <h1>NBA Player Stats</h1>
            {stats && stats.data.map(data=> (
                <div>
                    <h3>{data.player.first_name}</h3>
                </div>
            ))}
        </div>
    )
    
}

export default PlayerStats