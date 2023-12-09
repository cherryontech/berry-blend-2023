import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <nav class="nav--container">
      <img className="nav--logo" src="../assets/blissfulLogo.jpg" alt="Blissful Website Logo with a cloud above it" />
      <ul className="nav--links">
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
