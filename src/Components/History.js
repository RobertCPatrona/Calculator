import React from "react"

function History(props) {
  return (
    <div>
      <ul className="history">
        {props.history.map((historyPair, index) => {
          return (
            <li key={index}>
              <p>Equation: <b>{historyPair[0]}</b></p>
              <p>Result: <b>{historyPair[1]}</b></p>
              <hr/>
            </li>
          )
        })}
      </ul>
      <button name="ClearHistory" onClick={props.onClick} className="clearHistoryBtn">
        Clear History
      </button>
    </div>
  )
}

export default History