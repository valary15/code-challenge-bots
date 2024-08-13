import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import SortBar from "./components/SortBar";
import BotSpecs from "./components/BotSpecs";

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [slecetedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("https://code-challenge-bots.onrender.com/bots")
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
    fetch(`https://code-challenge-bots.onrender.com/bots/${botToDelete.id}`, {
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
      <BotArmy
        armyBots={armyBots}
        removeBot={removeBotFromArmy}
        deleteBot={deleteBot}
      />
      <h2>Bot collection</h2>
      {slecetedBot ? (
        <BotSpecs
          bot={slecetedBot}
          setSelectedBot={setSelectedBot}
          enlistBot={addBotToArmy}
        />
      ) : (
        <BotCollection
          bots={bots}
          addBot={addBotToArmy}
          setSelectedBot={setSelectedBot}
        />
      )}
    </div>
  );
}

export default App;
