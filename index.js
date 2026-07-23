require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Collection
} = require("discord.js");

const mongoose = require("mongoose");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(console.error);

require("./src/handlers/eventHandler")(client);
require("./src/handlers/commandHandler")(client);

client.login(process.env.TOKEN);
