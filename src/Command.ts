import { CommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

//template for commands
export interface SlashCommand extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void; 
}