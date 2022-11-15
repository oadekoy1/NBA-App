import { Link } from 'react-router-dom'
import * as userService from '../utils/users-service'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navs = ({user, setUser}) => {

const handleLogOut = () => {
    userService.logOut()
    setUser(null)
}
    return (

        <div className='Navs'>
<>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href='/'>NBA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href='/games'>NBA Games Today</Nav.Link>
              <Nav.Link href='/standings'>NBA Standings</Nav.Link>
              <Nav.Link href='stats'>NBA Player Stats</Nav.Link>
              <Nav.Link href='' onClick={handleLogOut}>Log Out</Nav.Link>
              <span>Welcome, {user.name}</span>
            </Nav>
          </Container>
        </Navbar>
        <br />
        </>

        </div>

    )
}
export default Navs