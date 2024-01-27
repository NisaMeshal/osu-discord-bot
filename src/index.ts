// initialize the bot

import { Client, GatewayIntentBits } from "discord.js";
import { config } from "./config.js";
import ready from "./listeners/ready.js"; 
import interactionCreate from "./listeners/interactionCreate.js";

console.log("osu chan is starting up..."); 

const client = new Client({
    intents: []
});

client.login(config.DISCORD_TOKEN)
    .catch((error) => {
        console.log('[Login Error]', error); 
        process.exit(1); 
    });

//register ready listener with client
ready(client); 
interactionCreate(client); 