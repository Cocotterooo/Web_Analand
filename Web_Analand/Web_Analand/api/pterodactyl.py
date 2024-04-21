import os
import dotenv
import requests


class PterodactylAPI:
    dotenv.load_dotenv()
    PTERODACTYL_API_KEY = os.getenv('PTERODACTYL_API_KEY')
    header = {
        'Authorization': f'Bearer {PTERODACTYL_API_KEY}',
        'Content-Type': 'application/json',
        'Accept': 'Application/vnd.pterodactyl.v1+json'
    }

    async def get_server_resources(self, server_id:str) -> dict:
        """Obtain the information of the server
        Returns:
            dict: [server_info[data of the server]]
        """
        if server_id is None:
            return {'Error': 'Server ID is required'}
        url_server_resources = f'https://panel.analand.eu/api/client/servers/{server_id}/resources'
        response = requests.get(url_server_resources, headers=self.header)
        if response.status_code == 200:
            return response.json()
        else:
            return {'Error': response.status_code, 'Message': response.text}
