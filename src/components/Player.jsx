import { useState } from "react";

export default function Player({name, symbol, isActive, onNameChange}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }   

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editPlayerName = <input type="text" value={playerName} required onChange={handlePlayerNameChange}/>;
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editPlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}