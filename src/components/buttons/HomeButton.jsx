import { Link } from 'react-router-dom';

const HomeButton = () => <button onClick={(event) => (window.location.href = '/Questions')}>Get Started</button>;

export default HomeButton;
