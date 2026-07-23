require("dotenv").config();

const fs = require("fs");
const path = require("path");

const { REST, Routes } = require("discord.js");

const commands = [];

const commandFolders = fs.readdirSync("./src/commands");

for (const folder of commandFolders) {

    const commandFiles = fs
        .readdirSync(path.join("./src/commands", folder))
        .filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {

        const command = require(path.join(process.cwd(), "src", "commands", folder, file));

        commands.push(command.data.toJSON());

    }
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {

    try {

        console.log("Deploying slash commands...");

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            {
                body: commands
            }
        );

        console.log("✅ Slash commands deployed!");

    } catch (err) {

        console.error(err);

    }

})();
