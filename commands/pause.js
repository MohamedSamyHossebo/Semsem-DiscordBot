const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pause the current song'),

    async execute(interaction, client) {
        try {
            client.distube.pause(interaction.guild);
            await interaction.reply('⏸️ The song has been paused.');
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ There is no song playing or an error occurred.', ephemeral: true });
        }
    }
};
