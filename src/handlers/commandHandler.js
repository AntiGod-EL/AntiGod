const fs = require("fs");
const path = require("path");

module.exports = (client) => {
    const commandsPath = path.join(__dirname, "..", "commands");

    const folders = fs.readdirSync(commandsPath);

    for (const folder of folders) {
        const folderPath = path.join(commandsPath, folder);

        if (!fs.statSync(folderPath).isDirectory()) continue;

        const commandFiles = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(path.join(folderPath, file));

            client.commands.set(command.data.name, command);
        }
    }

    console.log(`✅ Loaded ${client.commands.size} commands.`);
};
