import React from "react";
import BotCard from "./BotCard";

function BotArmy({ armyBots, removeBot, deleteBot }) {
  return (
    <div className="your-bot-army">
      <h2>The Bot Army</h2>
      <div className="flexing-army">
        {armyBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={removeBot}
            handleDelete={() => deleteBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
