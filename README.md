# getting started
```
yarn install
yarn start
```

## ENV Variables
### DISCORD_TOKEN

Go to the developer portal > applications and navigate to the bot. You can get the `DISCORD_TOKEN` by clicking on reveal token.

![DISCORD_TOKEN](/docs/discord_token.jpg)

If you can't see the section above, you just need to add a bot.

### BOT_PREFIX
The prefix for the bot, usually starts with `!`.

### TEST_CHANNEL_ID
The test channel ID where the scheduler will send messages.

### PROD_CHANNEL_ID
The channel ID where the scheduler will send messages.

### KEEP_ME_ALIVE_URL
The url to always ping to keep the bot alive if you're using a free hosting service.

## How to add bot manually?
Copy the `CLIENT_ID`
![CLIENT_ID](/docs/client_id.jpg)

And paste the following url to the browser

```
https://discordapp.com/api/oauth2/authorize?scope=bot&client_id=CLIENT_ID
```

## Where to host for free?
I'm currently using https://replit.com/.
