import React from "react";

function BotSpecs({ bot, setSelectedBot, addBotToArmy }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Type: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={() => setSelectedBot(null)}>Back to List</button>
      <button
        onClick={() => {
          addBotToArmy(bot);
          setSelectedBot(null);
        }}
      >
        Enlist Bot
      </button>
    </div>
  );
}

export default BotSpecs;
