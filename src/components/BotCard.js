import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.image} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Type: {bot.type}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {handleDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
