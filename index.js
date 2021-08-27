require("dotenv").config();
const Discord = require("discord.js");
const prefix = process.env.BOT_PREFIX || "!wknd";

const { runScheduler } = require("./scheduler/scheduler");

// Server Stuff
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(Date.now() + " Ping Received");
  res.send("Hello World! From the weekend-discord-bot");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Actual BOT Code
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot is ready!");

  client.user.setPresence({
    status: "online",
    activity: {
      name: "the weekend!",
      type: "PLAYING",
    },
  });

  runScheduler(client);
});

client.on("message", (message) => {
  const { content, channel } = message;

  if (content.startsWith(prefix)) {
    const commandParts = content.split(" ");
    const target = commandParts[1];

    switch (target) {
      case "ping":
        message.reply("pong!");
        break;
      case "pat":
        message.reply("thanks 😊");
        break;
      case "about":
        const exampleEmbed = {
          color: "#0097FB",
          title: "About",
          description: "",
          fields: [
            {
              name: "Want to contribute?",
              value:
                "Open a pull request on the [weeke-end-discord-bot](https://github.com/iamdevlinph/weeke-end-discord-bot) Github repository",
            }
          ],
        };

        channel.send({ embed: exampleEmbed });
        break;
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
