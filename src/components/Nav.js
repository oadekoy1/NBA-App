import { Link } from 'react-router-dom'
const Nav = () => {
    return (

        <div className='Nav'>

            <Link to='/'>
                <div>NBA Home</div>
            </Link>

            <Link to='/standings'>
                <div>NBA Standings</div>
            </Link>

            <Link to='/games'>
                <div>NBA Games</div>
            </Link>

            <Link to='/stats'>
                <div>Player Stats</div>
            </Link>
            
        </div>

    )
}
export default Nav