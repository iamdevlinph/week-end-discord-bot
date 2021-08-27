# Getting Started
```
yarn install
yarn start
```
## Getting `CHANNEL_ID`
Enable developer mode on Discord. So you can retrieve `CHANNEL_ID` values.

![discord developer mode](/docs/discord-developer-mode.jpg)

Right click a channel you want to use as your `TEST_CHANNEL_ID`.

![copy channel id](/docs/copy-channel-id.jpg)


## ENV Variables
### DISCORD_TOKEN

Go to the [developer portal > applications](https://discord.com/developers/applications) and navigate to the bot. You can get the `DISCORD_TOKEN` by clicking on reveal token or just click on Copy.

![DISCORD_TOKEN](/docs/discord_token.jpg)

If you can't see the section above, you just need to add a bot.

### BOT_PREFIX
The prefix for the bot, usually starts with `!`.

### TEST_CHANNEL_ID
The test channel ID where the scheduler will send messages.

### PROD_CHANNEL_ID
The channel ID where the scheduler will send messages.

### TZ
Timezone to base on. Default `Asia/Manila`

### PORT
Port for the app to run on. Default is `3000`

## How to add bot manually?
Copy the `CLIENT_ID`
![CLIENT_ID](/docs/client_id.jpg)

And paste the following url to the browser

```
https://discordapp.com/api/oauth2/authorize?scope=bot&client_id=CLIENT_ID
```

## Where to host for free?
I'm currently using https://replit.com/. And use https://uptimerobot.com/ to keep on pinging on the server to keep it active.
