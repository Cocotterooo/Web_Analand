import os
import dotenv
import requests

class DiscordAPI:
    dotenv.load_dotenv()
    DISCORD_TOKEN = os.getenv('DISCORD_TOKEN')
    header = {
        'Authorization': f'Bot {DISCORD_TOKEN}',
        'Content-Type': 'application/json'
    }

    def __init__(self, server_id):
        self.server_id = server_id
        # URLs de la API de Discord:
        self._url_members = f'https://discord.com/api/guilds/{self.server_id}/members?limit=1000' # Lista de 1000 miembros como máximo
        self._url_member = f'https://discord.com/api/guilds/{self.server_id}/members/' # Un miembro en concreto
        self._url_guild_preview = f'https://discord.com/api/guilds/{self.server_id}/preview' # Información general del servidor
        self._url_guild_roles = f'https://discord.com/api/guilds/{self.server_id}/roles' # Roles del servidor
        
    async def get_server_members(self) -> int:
        '''Obtain the members of the server
        Returns:
            dict: [members[data of the members]]
        '''
        response = requests.get(self._url_members, headers=self.header)
        members = response.json()
        return members
    
    async def get_num_members(self) -> dict:
        '''Obtain the number of members and online members of the server
        Returns:
            dict: [total members, online members]
        '''
        response = requests.get(self._url_guild_preview, headers=self.header)
        preview = response.json()
        total_members = preview['approximate_member_count']
        online_members = preview['approximate_presence_count']
        return {'total_members': total_members, 'online_members': online_members}
    
    async def get_roles(self) -> int:
        '''Obtain the roles of the server
        Returns:
            dict: [roles[data of the roles]]
        '''
        response = requests.get(self._url_guild_roles, headers=self.header)
        roles = response.json()
        return roles
    
    async def get_member(self, member_id:int) -> int:
        '''Obtain a member of the server
        Returns:
            dict: [member[data of the member]]
        '''
        response = requests.get(f'{self._url_guild_roles}{member_id}', headers=self.header)
        member = response.json()
        return member