import React from 'react'

import './User.css'

const UserInput = (props) => {
  const style = {
    backgroundColor: "red"
  }
  return (
    <div style={style}>
      <input type="text" onChange={props.changed} value={props.userName}/>
    </div>
  )
};

const UserOutput = (props) => {
  return (
    <div className="user-output">
      <p>{props.userName}</p>
      <p>Paragraph 2</p>
    </div>
  )
}

export {UserInput, UserOutput}
