import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const TeamStandings = () => {
    const url = `https://site.api.espn.com/apis/v2/sports/basketball/nba/standings`

    const [standings, setStandings] = useState(null)

    const fetchStandings = async () => {
        const res = await fetch(url)
        const standings = await res.json()
        console.log(standings);
        setStandings(standings)
    }
    useEffect(() => {
        fetchStandings()
    }, [])

    return (
        <div>
            <h1>NBA Standings</h1>
            {standings && standings.children.map(children => (
                <div>
                    <h3>{children.name}</h3>
                    <h3>{}</h3>
                </div>
            ))}
        </div>
    )
    
}

export default TeamStandings