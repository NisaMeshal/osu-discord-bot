// Grab token and client id from .env and export. 

import dotenv from "dotenv/config";

const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env; 

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing environment variables...");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID
} as const; 

export default config; 