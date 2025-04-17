const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song from YouTube, Spotify, or SoundCloud')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Track URL or name')
                .setRequired(true)
        ),

    async execute(interaction, client) {
        const query = interaction.options.getString('query');
        if (!query) {
            return interaction.reply({ content: '❌ You must provide a track name or URL!', ephemeral: true });
        }
        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) {
            return interaction.reply({ content: '❌ You need to be in a voice channel first!', ephemeral: true });
        }

        try {
            // 1. Send initial searching message
            await interaction.reply(`🔍 Searching for: \`${query}\`...`);

            // 2. Listen for playSong event to update the message
            const onPlay = (queue, song) => {
                if (queue.id === interaction.guildId) {
                    interaction.editReply(
                        `▶️ Now playing: **${song.name}** \`${song.formattedDuration}\``
                    );
                    client.distube.removeListener('playSong', onPlay);
                }
            };
            client.distube.on('playSong', onPlay);

            // 3. Listen for addSong event to inform user of queue additions
            const onAdd = (queue, song) => {
                if (queue.id === interaction.guildId) {
                    interaction.followUp(
                        `🟢 Added to queue: **${song.name}** \`${song.formattedDuration}\`\n ` +
                        `🔢 Tracks in queue: ${queue.songs.length}`
                    );
                    client.distube.removeListener('addSong', onAdd);
                }
            };
            client.distube.on('addSong', onAdd);

            // 4. Request DisTube to search and play
            await client.distube.play(voiceChannel, query, {
                textChannel: interaction.channel,
                member: interaction.member
            });
        } catch (err) {
            console.error(err);
            if (interaction.replied) {
                interaction.editReply({ content: '❌ An error occurred while trying to play the track.' });
            } else {
                interaction.reply({ content: '❌ An error occurred while trying to play the track.', ephemeral: true });
            }
        }
    }
};
