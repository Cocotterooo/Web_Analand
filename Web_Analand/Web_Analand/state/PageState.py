import reflex as rx
import asyncio

# Constants:
from Web_Analand.constants import SERVER_ID_1

# Api:
from Web_Analand.api.api import get_num_members, get_server_resources

class PageState(rx.State):
    # Discord:
    discord_num_members: list
    discord_total_members: int
    discord_online_members: int
    #Pterodactyl:
    server_status: str = 'desconocido'

    async def get_discord_num_members(self):
        self.discord_num_members = await get_num_members()
        self.discord_total_members = self.discord_num_members['total_members']
        self.discord_online_members = self.discord_num_members['online_members']

    async def get_server_status(self):
        server_resources_new = await get_server_resources(SERVER_ID_1)
        server_status_new = server_resources_new['attributes']['current_state']
        if server_status_new == 'running':
            self.server_status = 'online'
        elif server_status_new == 'offline':
            self.server_status = 'offline'
        elif server_status_new == 'starting':
            self.server_status = 'starting'
        else:
            self.server_status = 'desconocido'