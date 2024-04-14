from Web_Analand.constants import GITHUB_REPO, DISCORD_GUILD_ID
from Web_Analand.api.discord import DiscordAPI

DISCORDAPI = DiscordAPI(DISCORD_GUILD_ID)

def hello() -> str:
    return "¡Hello, Api Analand!"

def repo() -> str:
    return GITHUB_REPO

async def discord_members():
    members = await DISCORDAPI.get_server_members()
    return members

async def get_num_members():
    member = await DISCORDAPI.get_num_members()
    return member

async def get_presences():
    presences = await DISCORDAPI.get_presences()
    return presences