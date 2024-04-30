import { useState } from "react";
export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false)
  function handleClick() {
    setIsEditing(!isEditing)
  }
  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" value={props.name} required/> : <span className="player-name">{props.name}</span> }
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
