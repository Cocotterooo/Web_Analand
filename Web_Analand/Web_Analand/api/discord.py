import os
import dotenv
import requests

# DATETIME
import datetime

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


    def get_server_members(self):
        try:
            response = requests.get(self._url_members, headers=self.header)
            if response.status_code == 200:
                self.members = response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching server members: {e}")
        return self.members

    def get_num_members(self):
        try:
            response = requests.get(self._url_guild_preview, headers=self.header)
            if response.status_code == 200:
                preview = response.json()
                self.total_members = preview['approximate_member_count']
                self.online_members = preview['approximate_presence_count']
        except requests.exceptions.RequestException as e:
            print(f"Error fetching number of members: {e}")
        #print(f"Total members: {self.total_members}, Online members: {self.online_members}")
        return {'total_members': self.total_members, 'online_members': self.online_members}

    def get_roles(self):
        try:
            response = requests.get(self._url_guild_roles, headers=self.header)
            if response.status_code == 200:
                self.roles = response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching server roles: {e}")
        return self.roles
    
    def get_member(self, member_id:int):
        try:
            response = requests.get(f'{self._url_guild_roles}{member_id}', headers=self.header)
            if response.status_code == 200:
                self.member = response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching member: {e}")
        return self.member