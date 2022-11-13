import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const TeamStandings = () => {
    const url = `https://site.api.espn.com/apis/v2/sports/basketball/nba/standings`

    const [standing, setStanding] = useState(null)

    const fetchStanding = async () => {
        const res = await fetch(url)
        const standing = await res.json()
        console.log(standing);
        setStanding(standing)
    }
    useEffect(() => {
        fetchStanding()
    }, [])

    return (
        <div>
            <h1>NBA Standings</h1>
            {standing && standing.children.map(childrens => (
                <div>
                    <h2>{childrens.name}</h2>
                <ol>
                    <li> {childrens.standings.entries[14].team.displayName}: {childrens.standings.entries[14].stats[11].summary}</li>
                    <li> {childrens.standings.entries[13].team.displayName}: {childrens.standings.entries[13].stats[11].summary}</li>
                    <li> {childrens.standings.entries[12].team.displayName}: {childrens.standings.entries[12].stats[11].summary}</li>
                    <li> {childrens.standings.entries[11].team.displayName}: {childrens.standings.entries[11].stats[11].summary}</li>
                    <li> {childrens.standings.entries[10].team.displayName}: {childrens.standings.entries[10].stats[11].summary}</li>
                    <li> {childrens.standings.entries[9].team.displayName}: {childrens.standings.entries[9].stats[11].summary}</li>
                    <li> {childrens.standings.entries[8].team.displayName}: {childrens.standings.entries[8].stats[11].summary}</li>
                    <li> {childrens.standings.entries[7].team.displayName}: {childrens.standings.entries[7].stats[11].summary}</li>
                    <li> {childrens.standings.entries[6].team.displayName}: {childrens.standings.entries[6].stats[11].summary}</li>
                    <li> {childrens.standings.entries[5].team.displayName}: {childrens.standings.entries[5].stats[11].summary}</li>
                    <li> {childrens.standings.entries[4].team.displayName}: {childrens.standings.entries[4].stats[11].summary}</li>
                    <li> {childrens.standings.entries[3].team.displayName}: {childrens.standings.entries[3].stats[11].summary}</li>
                    <li> {childrens.standings.entries[2].team.displayName}: {childrens.standings.entries[2].stats[11].summary}</li>
                    <li> {childrens.standings.entries[1].team.displayName}: {childrens.standings.entries[1].stats[11].summary}</li>
                    <li> {childrens.standings.entries[0].team.displayName}: {childrens.standings.entries[0].stats[11].summary}</li>
                </ol>
                </div>
            ))}
        </div>
    )
    
}

export default TeamStandings