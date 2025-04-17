const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resume the song'),

    async execute(interaction, client) {
        try {
            client.distube.resume(interaction.guild);
            await interaction.reply('▶️ The song has been resumed.');
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ There is no paused song or an error occurred.', ephemeral: true });
        }
    }
};
