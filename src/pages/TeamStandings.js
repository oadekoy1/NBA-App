import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
//   params: {league: '<REQUIRED>'},
//   headers: {
//     'X-RapidAPI-Key': '78f9403571mshde8f4125b746cc6p1a0150jsn830947c7f904',
//     'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const TeamStandings = () => {
    // const url = `http://data.nba.net/prod/v1/current/standings_conference.json`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78f9403571mshde8f4125b746cc6p1a0150jsn830947c7f904',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };
    
    fetch('https://api-basketball.p.rapidapi.com/seasons', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    const [standings, setStandings] = useState(null)

    const fetchStandings = async () => {
        // const res = await fetch(url)
        // const standings = await res.json()
        console.log(standings);
        setStandings(standings)
    }
    useEffect(() => {
        fetchStandings()
    }, [])

    return (
        <div>
            <h1>NBA Standings</h1>
            {/* {standings && standings.articles.map(article => (
                <div>
                    <h3>{article.headline}</h3>
                </div>
            ))} */}
        </div>
    )
    
}

export default TeamStandings