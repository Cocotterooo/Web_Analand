import os
import dotenv
import requests

class DiscordAPI:
    dotenv.load_dotenv()
    DISCORD_TOKEN = os.getenv('DISCORD_TOKEN')
    header = {
        'Authorization': f'Bot {DISCORD_TOKEN}'
    }

    def __init__(self, server_id):
        self.server_id = server_id
        # URLs de la API de Discord:
        self._url_members_api = f'https://discord.com/api/guilds/{self.server_id}/members?limit=1000' # Lista de 1000 miembros como máximo
        self._url_guild_preview = f'https://discord.com/api/guilds/{self.server_id}/preview' # Información general del servidor
        self._url_guild_roles = f'https://discord.com/api/guilds/{self.server_id}/roles' # Roles del servidor
        self._url_guild_presences = f'https://discord.com/api/guilds/{self.server_id}/members/{789591730907381760}' # Presencias de los miembros

    async def get_server_members(self) -> int:
        # Define los headers de la petición
        response = requests.get(self._url_members_api, headers=self.header)
        members = response.json()
        return members
    
    async def get_num_members(self) -> dict:
        response = requests.get(self._url_guild_preview, headers=self.header)
        preview = response.json()
        total_members = preview['approximate_member_count']
        online_members = preview['approximate_presence_count']
        return {'total_members': total_members, 'online_members': online_members}
    
    async def get_roles(self) -> int:
        response = requests.get(self._url_guild_roles, headers=self.header)
        roles = response.json()
        return roles
    
    async def get_presences(self) -> int:
        response = requests.get(self._url_guild_presences, headers=self.header)
        members = response.json()
        return members