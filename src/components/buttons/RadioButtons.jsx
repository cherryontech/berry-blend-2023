import { useState } from 'react';

export default function RadioButtons() {
  // set state
  const [isRadio, setIsRadio] = useState(5);

  const handleChange = (e) => {
    // A string we pass in
    console.log(e.currentTarget.value);
    setIsRadio(+e.currentTarget.value);
  };

  return (
    <div className="radio-buttons">
      <h1>Burnout Questionnaire</h1>
      <ul className="radio-buttons__list">
        <li>
          <input type="radio" id="radio-1" value="1" onChange={handleChange} checked={isRadio === 1} />
          <label htmlFor="radio-1">num-1</label>
        </li>
        <li>
          <input type="radio" id="radio-2" value="2" onChange={handleChange} checked={isRadio === 2} />
          <label htmlFor="radio-2">num-2</label>
        </li>
        <li>
          <input type="radio" id="radio-3" value="3" onChange={handleChange} checked={isRadio === 3} />
          <label htmlFor="radio-3">num-3</label>
        </li>
        <li>
          <input type="radio" id="radio-4" value="4" onChange={handleChange} checked={isRadio === 4} />
          <label htmlFor="radio-4">num-4</label>
        </li>
        <li>
          <input type="radio" id="radio-5" value="5" onChange={handleChange} checked={isRadio === 5} />
          <label htmlFor="radio-5">num-5</label>
        </li>
      </ul>
    </div>
  );
}
