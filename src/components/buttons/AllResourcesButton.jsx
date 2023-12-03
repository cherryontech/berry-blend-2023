export default function AllResourcesButton() {
  return (
    <button className="resources--button" onClick={(event) => (window.location.href = '/Resources')}>
      Explore All Resources
    </button>
  );
}
