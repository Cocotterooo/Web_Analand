import requests

token = ''

def get_discord_server_info(server_id):
    # Necesitarás un token de bot para autenticarte con la API de Discord
    # Define la URL de la API
    url = f'https://discord.com/api/guilds/{server_id}/members?limit=1000'

    # Define los headers de la petición
    headers = {
        'Authorization': f'Bot {token}'
    }

    # Realiza la petición a la API de Discord
    response = requests.get(url, headers=headers)

    # Devuelve la respuesta como un objeto JSON
    members = response.json()
    print(members)
    # Cuenta el número total de usuarios
    total_users = len(members)

    # Cuenta el número de usuarios conectados
    #connected_users = sum(1 for member in members if member['status'] == 'online')

    return total_users #connected_users

print(get_discord_server_info(929720489939714078))