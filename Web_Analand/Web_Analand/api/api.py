from Web_Analand.constants import GITHUB_REPO, DISCORD_GUILD_ID
from Web_Analand.api.discord import DiscordAPI
from Web_Analand.api.pterodactyl import PterodactylAPI

DISCORDAPI = DiscordAPI(DISCORD_GUILD_ID)
PTERODACTYLAPI = PterodactylAPI()

def hello() -> str:
    return '¡Hello, Api Analand!'

def repo() -> str:
    return GITHUB_REPO

async def discord_members() -> dict:
    members = await DISCORDAPI.get_server_members()
    return members

async def get_num_members() -> dict:
    member = await DISCORDAPI.get_num_members()
    return member

async def get_member() -> dict:
    presences = await DISCORDAPI.get_member()
    return presences

async def get_server_resources(server_id: str) -> dict:
    server = await PTERODACTYLAPI.get_server_resources(server_id)
    return server