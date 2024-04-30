import { useState } from "react";
export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(props.name)

  function handleClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(e){
    setPlayerName(e.target.value)
  }
  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? <input onChange={handleChange} type="text" value={playerName} required/> : <span className="player-name">{playerName}</span> }
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
