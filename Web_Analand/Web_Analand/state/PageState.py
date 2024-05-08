import reflex as rx
import asyncio

from typing import Union

# Constants:
from Web_Analand.constants import SERVER_ID_1

# Api:
from Web_Analand.api.api import get_num_members, get_server_resources

class PageState(rx.State):
    # Discord:
    discord_total_members: Union[int, str] = "N/A"
    discord_online_members: Union[int, str] = "N/A"
    #Pterodactyl:
    server_status: str = 'desconocido'

    @rx.background  # Returns discord members every 5 seconds
    async def get_discord_num_members(self):
        while True:
            discord_num_members = await get_num_members()
            async with self:
                self.discord_total_members = discord_num_members['total_members']
                self.discord_online_members = discord_num_members['online_members']
                yield
            #print('2 peticion discord', self.discord_total_members, self.discord_online_members)    
            await asyncio.sleep(2.5)

    @rx.background # Returns server status every 1 second
    async def get_server_status(self):
        while True:
            server_resources_new = await get_server_resources(SERVER_ID_1)
            server_status_new = server_resources_new['attributes']['current_state']
            async with self:
                if server_status_new == 'running':
                    self.server_status = 'online'
                elif server_status_new == 'offline':
                    self.server_status = 'offline'
                elif server_status_new == 'starting':
                    self.server_status = 'starting'
                else:
                    self.server_status = 'desconocido'
                yield
            #print('peticion ptero -', self.server_status)
            await asyncio.sleep(2.5)