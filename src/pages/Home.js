import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const Home = () => {
    const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`
    const [news, setNews] = useState(null)

    const fetchNews = async () => {
        const res = await fetch(url)
        const news = await res.json()
        console.log(news);
        setNews(news)
    }
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div>
            <h1>NBA Today</h1>
            {news && news.articles.map(article => (
                <div>
                    <h3>{article.headline}</h3>
                </div>
            ))}
        </div>
    )
    
}

export default Home