import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const PlayerStats = () => {
  const url = `https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2023/types/2/leaders?lang=en%C2%AEion=us`

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
            {stats && stats.categories.map(categories => (
                <div>
                    <h3>{categories.displayName}</h3>
                    <h4>{categories.leaders[0].displayValue}</h4>
                    <h4>{categories.leaders[1].displayValue}</h4>
                    <h4>{categories.leaders[2].displayValue}</h4>
                    <h4>{categories.leaders[3].displayValue}</h4>
                    <h4>{categories.leaders[4].displayValue}</h4>
                    <h4>{categories.leaders[5].displayValue}</h4>
                    <h4>{categories.leaders[6].displayValue}</h4>
                    <h4>{categories.leaders[7].displayValue}</h4>
                    <h4>{categories.leaders[8].displayValue}</h4>
                    <h4>{categories.leaders[9].displayValue}</h4>
                </div>
            ))}
        </div>
    )
    
}

export default PlayerStats