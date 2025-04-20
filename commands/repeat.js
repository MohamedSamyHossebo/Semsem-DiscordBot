const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('repeat')
        .setDescription('🔁 Toggle repeat mode for the current track'),

    async execute(interaction, client) {
        try {
            const queue = client.distube.getQueue(interaction.guild);
            if (!queue) {
                return interaction.reply({ content: '❌ There is no track currently playing.', ephemeral: true });
            }

            const currentMode = queue.repeatMode;
            const newMode = currentMode === 1 ? 0 : 1; // Toggle: 1 = repeat song, 0 = off
            queue.setRepeatMode(newMode);

            const status = newMode === 1
                ? '🔁 Repeat mode has been enabled for the current track.'
                : '⏹️ Repeat mode has been disabled.';
            await interaction.reply(status);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ An error occurred while toggling repeat mode.', ephemeral: true });
        }
    }
};
