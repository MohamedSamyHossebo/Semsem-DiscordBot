const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop playback and leave the voice channel'),

    async execute(interaction, client) {
        try {
            // Stop the song
            client.distube.stop(interaction.guild);

            // Leave the voice channel
            const queue = client.distube.getQueue(interaction.guild);
            if (queue) {
                queue.voice.leave(); // Leave the voice channel
            }

            await interaction.reply('🛑 Playback stopped and bot left the voice channel.');
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '❌ There is nothing to stop or an error occurred.', ephemeral: true });
        }
    }
};
