const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("View all bot commands."),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle("🤖 AntiGod Help")
            .setDescription("Welcome to **AntiGod RPG Economy Bot**")
            .addFields(
                {
                    name: "💰 Economy",
                    value: "`/balance` `/daily` `/work`"
                },
                {
                    name: "🎣 Games",
                    value: "`/fish` `/mine` `/farm`"
                },
                {
                    name: "🎒 Inventory",
                    value: "`/inventory` `/shop`"
                }
            )
            .setColor("Blue")
            .setFooter({
                text: "AntiGod v1.0"
            });

        await interaction.reply({
            embeds: [embed]
        });

    }
};
