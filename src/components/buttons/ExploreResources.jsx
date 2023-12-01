export default function ResourcesButton() {
  return (
    <button className="resources--button" onClick={(event) => (window.location.href = '/Resources')}>
      Explore All Resources
    </button>
  );
}
