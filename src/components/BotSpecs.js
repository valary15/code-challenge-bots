import React from "react";

function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Type: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={goBack}>Back to List</button>
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotSpecs;
