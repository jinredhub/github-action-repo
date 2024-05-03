import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  return (
    <div>
      <button
        style={{backgroundColor: isDisabledBtn ? "gray" : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabledBtn}
        >
          Change to {newButtonColor}
        </button>
        <input 
          type='checkbox' 
          onChange={(e) => setIsDisabledBtn(e.target.checked)} 
          id='disable-button-checkbox'
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
