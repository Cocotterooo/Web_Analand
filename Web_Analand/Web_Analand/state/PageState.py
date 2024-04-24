import reflex as rx
import asyncio

# Constants:
from Web_Analand.constants import SERVER_ID_1

# Api:
from Web_Analand.api.api import get_num_members, get_server_resources

class PageState(rx.State):
    # Discord:
    discord_total_members: int = "N/A"
    discord_online_members: int = "N/A"
    #Pterodactyl:
    server_status: str = 'desconocido'

    @rx.background
    async def get_discord_num_members(self):
        while True:
            async with self:
                discord_num_members = await get_num_members()
                self.discord_total_members = discord_num_members['total_members']
                self.discord_online_members = discord_num_members['online_members']
            await asyncio.sleep(5)

    @rx.background
    async def get_server_status(self):
        while True:
            async with self:
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
            await asyncio.sleep(1)