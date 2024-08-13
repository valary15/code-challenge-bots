import React from "react";
import BotCard from "./BotCard";

function BotsCollection({ bots, addBot, setSelectedBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={addBot}
          setSelectedBot={setSelectedBot}
        />
      ))}
    </div>
  );
}

export default BotsCollection;
