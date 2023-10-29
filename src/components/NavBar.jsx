import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="container mx-auto flex flex-wrap p-5 flex-col items-center">
      <img
        class="flex title-font font-medium items-center text-gray-900 mb-4"
        src="./react.svg"
        alt="React Logo which will turn into App logo once given to us"
      />
      <ul class="flex flex-wrap items-center text-base justify-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Questions">Questions</NavLink>
        </li>
        <li>
          <NavLink to="/Resources">Resources</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
