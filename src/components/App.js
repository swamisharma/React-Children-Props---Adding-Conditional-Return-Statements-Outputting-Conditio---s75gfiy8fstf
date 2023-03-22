import React , {useState} from 'react';
import '../styles/App.css';
import ChildComponent from './ChildComponent';

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value); 
    setInputValue(value);
    setOutputValue(value * value);
  };
 
 return (
    <div id="main">
      <ChildComponent input={<input id='input' onChange={handleInputChange} />} />
      <p id='output'>{outputValue}</p>
    </div>
  );
};

export default App;
