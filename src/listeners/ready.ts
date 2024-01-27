import { Client } from "discord.js";
import { Commands } from "../Commands";

//ready listener
export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return; 
        }

        //register the commnds with the client
        await client.application.commands.set(Commands); 

        console.log(`${client.user.username} is online`); 
    }); 
};