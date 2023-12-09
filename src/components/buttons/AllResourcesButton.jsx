import { useNavigate } from 'react-router-dom';

export default function AllResourcesButton() {
  const handleAllResourcesButton = () => {
    navigate('/Resources');
  };
  const navigate = useNavigate();

  return (
    <button className="resources--button" onClick={handleAllResourcesButton}>
      Explore All Resources
    </button>
  );
}
