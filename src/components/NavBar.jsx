import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <nav class="nav--container">
      <img
        class="nav--logo"
        src="../assets/react.svg"
        alt="React Logo which will turn into App logo once given to us"
      />
      <ul class="nav--links">
        <NavLink to="/" className="navLink--style">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Questions" className="navLink--style">
          <li>Questions</li>
        </NavLink>
        <NavLink to="/Resources" className="navLink--style">
          <li>Resources</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
