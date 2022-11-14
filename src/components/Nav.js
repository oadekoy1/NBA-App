import { Link } from 'react-router-dom'
import * as userService from '../utils/users-service'

const Nav = ({user, setUser}) => {

const handleLogOut = () => {
    userService.logOut()
    setUser(null)
}
    return (

        <div className='Nav'>

            <Link to='/'>NBA Home</Link>  &nbsp; | &nbsp;

            <Link to='/standings'>NBA Standings</Link>  &nbsp; | &nbsp;

            <Link to='/games'>NBA Games</Link>  &nbsp; | &nbsp;

            <Link to='/stats'>Player Stats</Link> {" "}
            <span>Welcome, {user.name}</span>

            &nbsp;&nbsp; <Link to='' onClick={handleLogOut}>Log Out</Link>
            
        </div>

    )
}
export default Nav