import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with degenerate salutation");

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Hello senpai >_<")
}