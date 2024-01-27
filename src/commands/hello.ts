import { CommandInteraction, Client } from "discord.js";
import { SlashCommand } from "src/Command";

export const hello: SlashCommand =  {
    name: "hello",
    description: "returns a degenerate salutation", 

    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "hello senpai :3"; 

        await interaction.followUp({
            ephemeral: true, 
            content
        }); 
    }
}; 