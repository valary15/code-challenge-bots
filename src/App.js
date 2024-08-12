import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import SortBar from "./components/SortBar";

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const sortBots = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  const addBotToArmy = (bot) => {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (botToDelete) => {
    fetch(`http://localhost:8001/bots/${botToDelete.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== botToDelete.id));
      setArmyBots(armyBots.filter((bot) => bot.id !== botToDelete.id));
    });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <SortBar sortBots={sortBots} />
      <h2>The Bot Army</h2>
      <BotArmy
        armyBots={armyBots}
        removeBot={removeBotFromArmy}
        deleteBot={deleteBot}
      />
      <BotCollection bots={bots} addBot={addBotToArmy} />
    </div>
  );
}

export default App;
