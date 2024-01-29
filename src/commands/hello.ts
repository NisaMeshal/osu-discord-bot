import { CommandInteraction, Client } from "discord.js";
import { SlashCommand } from "src/CommandTemplate";

export const Hello: SlashCommand =  {
    name: "hello",
    description: "returns a degenerate salutation", 
    // type: "CHAT_INPUT",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "hello senpai :3"; 

        await interaction.followUp({
            ephemeral: true, 
            content
        }); 
    }
}; 