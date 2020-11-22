import React from "react"

function ResultField(props) {
  return (
    <div>
      <input
        type="text"
        value={props.display}
        className='displayField'
        readOnly
      />
    </div>
  )
}

export default ResultField