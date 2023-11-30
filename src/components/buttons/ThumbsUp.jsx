import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function ThumbsUp() {
  return (
    <button className="thumbs--up">
      <FontAwesomeIcon icon={faThumbsUp} size="3x" />
    </button>
  );
}
