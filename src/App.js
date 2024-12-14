import React from 'react';
import './App.css';

let operatorsRegex = /[+\-/*]/;
let noMinus = /[+/*]/

function App() {
  const [output, setOutput] = React.useState("0");

  const handleClear = () => {
    setOutput("0");
  }

  const handleInput = (num) => {
    setOutput((prev)=> prev === "0" ? num : prev + num);
  }

  const handleOperators = (num) => {

    setOutput ((prev) => {
      let lastChar = prev[prev.length -1];
      if (lastChar && lastChar.match(noMinus) && num !== '-') {
        return prev.slice(0,-1) + num
      }
      if (lastChar === '-' && num.match(operatorsRegex)) {
        return prev.slice(0,-2) + num
      }
      return prev + num
    })
  }

  const calculate = () => {
    const value = eval(output);
    setOutput(value)
  }

  const handleDecimal = (num) => {
    setOutput((prev)=> {
      const split = prev.split(operatorsRegex);
      const lastNumber = split[split.length - 1];
      if (lastNumber.includes('.')) {
        return prev
      } else {
        return prev + num
      }
    });
  }

  return (
    <div className='mx-auto w-fit'>
      <button onClick={calculate} id="equals">=</button>
      <div>
      <button onClick={() => handleOperators("+")} id='add'>+</button>
      <button onClick={() => handleOperators("-")} id='subtract'>-</button>
      <button onClick={() => handleOperators("*")} id='multiply'>*</button>
      <button onClick={() => handleOperators("/")} id='divide'>/</button>
      </div>
      <div>
      <button onClick={() => handleInput("0")} id='zero'>0</button>
      <button onClick={() => handleInput("1")} id='one'>1</button>
      <button onClick={() => handleInput("2")} id='two'>2</button>
      <button onClick={() => handleInput("3")} id='three'>3</button>
      <button onClick={() => handleInput("4")} id='four'>4</button>
      <button onClick={() => handleInput("5")} id='five'>5</button>
      <button onClick={() => handleInput("6")} id='six'>6</button>
      <button onClick={() => handleInput("7")} id='seven'>7</button>
      <button onClick={() => handleInput("8")} id='eight'>8</button>
      <button onClick={() => handleInput("9")} id='nine'>9</button>
      </div>
      <button onClick={() => handleDecimal(".")} id='decimal'>.</button>
      <div>
      <button onClick={handleClear} id='clear'>clear</button>
      </div>
      <div id='display'>{output}</div> 
    </div>
  );
}

export default App;
