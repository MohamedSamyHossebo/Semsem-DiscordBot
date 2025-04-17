// deploy-commands.js
const { REST, Routes } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log(`> 🚀 Refreshing ${commands.length} application commands...`);
        await rest.put(
            // لو بتختبر في سيرفر معين اختار applicationGuildCommands، وإلا للتطبيق كامل applicationCommands
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID  
            ),
            { body: commands }
        );
        console.log('> ✅ Successfully reloaded application commands.');
    } catch (error) {
        console.error(error);
    }
})();
