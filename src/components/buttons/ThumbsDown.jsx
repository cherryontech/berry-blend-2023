import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function ThumbsDown() {
  return (
    <button className="thumbs--down">
      <FontAwesomeIcon icon={faThumbsDown} size="3x" />
    </button>
  );
}
//click event code
// onClick={(event) => (window.location.href = '/Resources')}
