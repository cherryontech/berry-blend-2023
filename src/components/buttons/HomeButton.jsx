import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const handleHomeButton = () => {
    navigate('/Questions');
  };
  const navigate = useNavigate();
  return (
    <button className="home--button" onClick={handleHomeButton}>
      Get Started
    </button>
  );
};

export default HomeButton;
