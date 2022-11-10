import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const NBAGames = () => {
    const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`
    const [games, setGames] = useState(null)

    const fetchGames = async () => {
        const res = await fetch(url)
        const games = await res.json()
        console.log(games);
        setGames(games)
    }
    useEffect(() => {
        fetchGames()
    }, [])

    return (
        <div>
            <h1>NBA Games</h1>
            {games && games.events.map(event=> (
                <div>
                    <h2>{event.name}</h2>
                    <h4>{event.status.type.detail}</h4>
                    <h4>{event.season.slug}</h4>
                </div>
            ))}

        </div>
    )
    
}

export default NBAGames