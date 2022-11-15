import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const NBAGames = () => {
    const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`
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
            <br/>
            {games && games.events.map(event=> (
                <div>
                    <h2 key={event.id}>{event.name}</h2>
                    <h4>{event.status.type.detail}</h4>
                    {/* <h4>{event.competitions[0].status.displayClock}</h4> */}
                    {/* <h4>{event.competitions.map(c => c.competitors.map(competitors => <h4>{competitors.score}</h4>))}</h4> */}
                    <h4>{event.competitions[0].competitors[1].score} - {event.competitions[0].competitors[0].score}</h4>
                    {/* <h4>{event.competitions[0].situation.lastPlay.text}</h4> */}
                    <h4>{event.competitions[0].competitors[1].leaders[0].leaders[0].athlete.fullName} - {event.competitions[0].competitors[1].leaders[3].leaders[0].displayValue} : {event.competitions[0].competitors[0].leaders[0].leaders[0].athlete.fullName} - {event.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</h4>
                    <br/>
                    <br/>
                </div>
            ))}

        </div>
    )
    
}

export default NBAGames