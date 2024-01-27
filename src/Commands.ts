//centralize bot commands

import { SlashCommand } from "./Command"; 
import { hello } from "./commands/hello"; 

export const Commands: SlashCommand[] = [hello]; 