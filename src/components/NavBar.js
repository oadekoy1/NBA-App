import { NavLink } from "react-router-dom";
import * as userService from "../utils/users-service";
const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };
  return (
    <nav>
      <NavLink to="/orders" className="some-class">
        Order History
      </NavLink>{" "}
      &nbsp; | &nbsp;
      <NavLink to="/orders/new">New Order</NavLink> &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>&nbsp;&nbsp;
      
      <NavLink to="" onClick={handleLogOut}>
        Log Out
      </NavLink>
    </nav>
  );
};
export default NavBar;
