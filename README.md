* For the proect to run you need to have a running server

*Botarmy.js
// Manages the bot collection

// through import from botcard it achieves the display of individual bot details

// The BotArmy component is responsible for rendering the user's collection of bots in the army. It uses the BotCard component to display individual bots and provides functionality for removing and deleting bots from the army.

*BotCard.js
// The BotCard component is coded to display individual bot details such as its name, type, health, damage, and armor in a card format. The component supports interaction through click events, allowing users to select the bot or delete it from a collection. 

*BotCollection.js
//BotsCollection component is what will render a collection of bots as a series of cards, a card is a content container. Each bot card is interactive, allowing users to add the bot to their army or select the bot for further actions, for example,The bots array is mapped over to generate a BotCard component for each bot in the array.
key={bot.id}: The key prop is set to bot.id to help React efficiently update and render the list.

bot={bot}: The bot prop is passed down to each BotCard component, containing the details of the bot. The component leverages the BotCard component to display each bot's details and passes down the necessary functions (addBot and setSelectedBot) to handle interactions.

*BotSPecs.js
// The BotSpecs component is designed to display detailed information about a specific bot, including its image, name, class, health, damage, armor, and catchphrase. It provides two main actions for the user: returning to the list of bots or enlisting the bot into the user's army. There is the use of setSelectedBot function to control the selected bot state and the addBotToArmy function to manage the bot army.
The BotSpecs component is designed toThe BotSpecs component is designed to display detailed information about a specific bot, including its image, name, class,


*App.js
THe main component of the "Bot Battlr" application. It manages the state for the list of bots, the user's bot army, and the currently selected bot. It fetches the bot data from a server, provides sorting functionality, and allows users to add bots to their army, remove them, or delete them entirely. The component also conditionally renders either a list of bots or detailed bot specifications, when a bot has been selected.