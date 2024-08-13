import React from "react";

function BotCard({ bot, handleClick, handleDelete, setSelectedBot }) {
  return (
    <div className="bot-card" onClick={() => setSelectedBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
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
          className="remove_button"
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
