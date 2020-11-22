import React from "react"

function Button(props) {
  const styles = {}

  if ((props.name < '0' || props.name > '9') && props.name !== '.') {
    styles.background = "#9494cd";
  }
  if (props.name === 'C') {
    styles.background = "#f10000";
  }
  if (props.name === '=') {
    styles.gridColumn = "span 2";
    styles.background = "#28D060";
  }
  if (props.name === 'HISTORY') {
    styles.fontSize = "25px"
    styles.background = "#139fea";

    if (props.history.length === 0) {
      styles.cursor = "not-allowed";
      styles.opacity = "0.6";
      styles.pointerEvents = "none";
    }
  }
  if (props.name === 'DELETE') {
    styles.fontSize = "20px"
    styles.background = "#ff5757";
  }

  return (
    <button name={props.name} onClick={props.onClick} className="button" style={styles}>
      {props.name}
    </button>
  )
}

export default Button