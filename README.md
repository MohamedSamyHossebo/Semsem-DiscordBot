# 🎵Semsem is a Discord Music Bot

A modern and powerful Discord Music Bot built with [Discord.js](https://discord.js.org/) and [DisTube](https://distube.js.org/), supporting YouTube, Spotify, and SoundCloud playback via slash commands.

---

## 🚀 Features

- 🎶 Play music from YouTube, Spotify, or SoundCloud
- ⏯️ Pause, resume, skip, and stop tracks
- 📃 View current music queue
- ✅ Supports modern Discord Slash Commands
- 💬 Clear responses and user-friendly messages
- 🌐 Easily deployable on Replit, Railway, or Vercel (with tweaks)

---

## 📦 Slash Commands List

| Command     | Description                           |
|-------------|---------------------------------------|
| `/play`     | Play a song using name or URL         |
| `/pause`    | Pause the currently playing song      |
| `/resume`   | Resume paused song                    |
| `/skip`     | Skip to the next song in the queue    |
| `/stop`     | Stop the music and leave voice chat   |
| `/queue`    | Show the current music queue          |

---

## 🛠️ Requirements

- Node.js v18+
- FFmpeg installed
- A Discord Bot token
- `.env` file or environment variable with `DISCORD_TOKEN`

---

## 🧪 Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/discord-music-bot.git
cd discord-music-bot
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=your_bot_token_here
```

4. Start the bot:

```bash
node index.js
```

---

## ☁️ Hosting & Deployment

### 🔄 GitHub + Vercel

1. Make sure you have a `vercel.json` file (to prevent it from serving HTML).
2. Connect your repo to [Vercel](https://vercel.com).
3. Go to **Settings > Environment Variables** in Vercel dashboard.
4. Add your `DISCORD_TOKEN`.
5. Vercel will automatically deploy your project when you push to GitHub.

> ⚠️ Note: Vercel is not suitable for bots that require continuous uptime (like music bots).

### 💻 Replit

1. Open your project in [Replit](https://replit.com/).
2. Go to the "Secrets" section from the sidebar.
3. Add `DISCORD_TOKEN` as a secret and paste your bot token.
4. Press **Run** to start the bot.

> Replit will keep the bot alive **only while the tab is open**, unless you upgrade to Replit Hacker or use external uptime tools.

---

### 🚆 Railway

1. Create a Railway project and connect your GitHub repo.
2. Go to `Settings > Variables` and add your `DISCORD_TOKEN`.
3. Make sure you install **FFmpeg**, either by:
   - Creating an `install.sh` script to install FFmpeg
   - Or using a Dockerfile

> Error like `FFMPEG_NOT_INSTALLED` means Railway doesn’t have FFmpeg by default.

---

## 🐞 Troubleshooting

- **DisTubeError [NO_UP_NEXT]**  
  You used `/skip` but there’s no song after the current one.

- **DisTubeError [FFMPEG_NOT_INSTALLED]**  
  Railway/Vercel doesn’t come with FFmpeg. Add install steps or use Docker.

- **(node:...) Warning: 'ephemeral' is deprecated**  
  Update replies to use `flags: MessageFlags.Ephemeral`.

---

## 📄 License & Copyright

This project is licensed under the **MIT License**.

```
© 2025 Mohamed Samy
All rights reserved.
```

You may use and modify this project freely, but attribution is required.

---

## 🌟 Contributions

Pull requests are welcome!  
If you encounter bugs or have suggestions, feel free to open an issue.

And if you liked the project, give it a ⭐ on GitHub ❤️

---
