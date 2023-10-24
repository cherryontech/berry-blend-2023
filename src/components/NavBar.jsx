import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
     <nav>
      <img src = './react.svg' alt= "React Logo which will turn into App logo once given to us" />
        <ul>
           <li>
              <NavLink to="/">Home</NavLink>
           </li>
           <li>
              <NavLink to="/Resources">Resources</NavLink>
           </li>
        </ul>
     </nav>
  );
 };
 
 export default NavBar;