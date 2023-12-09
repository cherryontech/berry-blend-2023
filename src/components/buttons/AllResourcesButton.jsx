import { useNavigate } from 'react-router-dom';

export default function AllResourcesButton() {
  const navigate = useNavigate();

  const navigateToResources = () => {
    // 👇️ navigate to /recommendation page
    navigate('/Resources');
  };
  return (
    <button className="resources--button" onClick={navigateToResources}>
      Explore All Resources
    </button>
  );
}
