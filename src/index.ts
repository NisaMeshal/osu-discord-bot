// initialize the bot

import { Client } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./config";

//create a new discord client and set intents for the bot to receive info
const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"]
});

//log when the bot is ready
client.once("ready", () => {
    console.log("osu chan is ready! ❤️");
});

//deploy commands when new guild created
client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

//run corresponding command when new user interaction occurs
client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) {
        return; 
    }
    const { commandName } = interaction; 
    if(commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

//login to client using token
client.login(config.DISCORD_TOKEN);