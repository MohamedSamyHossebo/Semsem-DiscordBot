const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skip the current song'),

    async execute(interaction, client) {
        try {
            await client.distube.skip(interaction.guild);
            await interaction.reply('⏭️ The song has been skipped!');
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ There is no song to skip or an error occurred.', ephemeral: true });
        }
    }
};
