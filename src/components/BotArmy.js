import React from "react";
import BotCard from "./BotCard";

function BotArmy({ armyBots, removeBot, deleteBot }) {
  return (
    <div className="your-bot-army">
      <h2>The Bot Army</h2>
      {armyBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => removeBot(bot)}
          handleDelete={() => deleteBot(bot)}
        />
      ))}
    </div>
  );
}

export default BotArmy;
