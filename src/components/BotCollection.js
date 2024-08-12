import React from "react";
import BotCard from "./BotCard";

function BotsCollection({ bots, addBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleClick={() => addBot(bot)} />
      ))}
    </div>
  );
}

export default BotsCollection;
