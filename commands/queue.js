const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Show the current song queue'),

    async execute(interaction, client) {
        const queue = client.distube.getQueue(interaction.guild);
        if (!queue) return interaction.reply('❌ There is no active queue.');

        const songs = queue.songs.map((song, i) => `${i + 1}. ${song.name} - \`${song.formattedDuration}\``).join('\n');
        interaction.reply(`🎶 **Queue:**\n${songs}`);
    }
};
