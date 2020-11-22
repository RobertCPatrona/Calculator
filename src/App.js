import './App.css';
import React, {useState} from "react";
import History from "./Components/History";
import ResultField from "./Components/ResultField";
import HistDelBtn from "./Components/HistDelBtn";
import AllButtons from "./Components/AllButtons";

function App() {
  const [display, setDisplay] = useState('')
  const [formula, setFormula] = useState('')
  const [history, setHistory] = useState([])
  const [showHist, setShowHist] = useState(false)

  const PI = '3.14159'

  function handleClick(event) {
    const value = event.target.name

    const Parser = require('expr-eval').Parser;

    function updateState(newDisplay, newFormula) {
      setDisplay(newDisplay)
      setFormula(newFormula)
    }

    function updateHistory(formula, result) {
      setHistory(state => [...state, [formula, result]])
    }

    function checkBrackets(string) {
      let open = string.split("(").length - 1
      let closed = string.split(")").length - 1
      return open === closed;
    }

    switch (value) {
      case 'C':
        updateState('', '')
        break;

      case 'HISTORY':
        setShowHist(!showHist)
        break;

      case 'DELETE':
        let del = -1;
        if (formula.slice(-7) === PI) {
          del = -7
        }
        updateState(display.slice(0, -1), formula.slice(0, del))
        break;

      case 'π':
        let c = formula.slice(-1);
        if ((c >= '0' && c <= '9') || c === ')') {
          updateState(display + '*π', formula+'*'+PI)
        } else {
          updateState(display + 'π', formula + PI)
        }
        break;

      case '√':
        let c2 = formula.slice(-1);
        if ((c2 >= '0' && c2 <= '9') || c2 === ')') {
          updateState(display + '*√(', formula+'*sqrt(')
        } else {
          updateState(display + '√(', formula + 'sqrt(')
        }
        break;

      case '=':
        try {
          let result = Parser.evaluate(formula)
          result = Math.round((result + Number.EPSILON) * 100000) / 100000
          result = result.toString()
          updateState(result, result)

          if (formula !== result) {
            updateHistory(formula+'=', result)
          }
        } catch (e) {
          !checkBrackets(display) ? alert("Please check the opening and closing brackets and try again.") :
            display !== '' && alert("Formula not entered correctly. Please check and try again.")
        }
        break;

      default:
        value !== undefined && updateState(display + value, formula + value)
    }
  }

  function clearHistory() {
    setHistory([])
    setShowHist(!showHist)
  }

  return (
    <div className="app">
      <ResultField display={display}/>
      <HistDelBtn onClick={handleClick} history={history}/>
      {showHist ? <History onClick={clearHistory} history={history}/> : <AllButtons onClick={handleClick}/>}
    </div>
  );
}

export default App;
