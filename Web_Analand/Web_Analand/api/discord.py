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
        # Variables para retornar, inicializadas en 0 y None:
        #! Si hay algun problema al obtener los datos, se retornan estos valores o los de la anterior petición
        self.total_members = 0
        self.online_members = 0
        self.roles = None
        self.member = None
        self.members = None


    async def get_server_members(self) -> int:
        '''Obtain the members of the server
        Returns:
            dict: [members[data of the members]]
        '''
        response = requests.get(self._url_members, headers=self.header)
        if response.status_code == 200:
            self.members = response.json()
        return self.members


    async def get_num_members(self) -> dict:
        '''Obtain the number of members and online members of the server
        Returns:
            dict: [total members, online members]
        '''
        response = requests.get(self._url_guild_preview, headers=self.header)
        preview = response.json()
        if response.status_code == 200:
            self.total_members = preview['approximate_member_count']
            self.online_members = preview['approximate_presence_count']
        return {'total_members': self.total_members, 'online_members': self.online_members}


    async def get_roles(self) -> int:
        '''Obtain the roles of the server
        Returns:
            dict: [roles[data of the roles]]
        '''
        response = requests.get(self._url_guild_roles, headers=self.header)
        roles = response.json()
        if response.status_code == 200:
            self.roles = roles
        return self.roles
    
    async def get_member(self, member_id:int) -> int:
        '''Obtain a member of the server
        Returns:
            dict: [member[data of the member]]
        '''
        response = requests.get(f'{self._url_guild_roles}{member_id}', headers=self.header)
        if response.status_code == 200:
            self.member = response.json()
        return self.member