//centralize bot commands

import { SlashCommand } from "./CommandTemplate"; 
import { Hello } from "./commands/hello"; 

export const Commands: SlashCommand[] = [Hello]; 