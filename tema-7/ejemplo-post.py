# Realizar peticiones a servicios web
# Peticiones POST
import requests
import json

try:
    api_url='https://jsonplaceholder.typicode.com/posts'

    # Objeto JSON a enviar
    payload = json.dumps({
        "title": "Sesion 7",
        "body": "Contenido de la sesión 7",
        "userId": "2"
    })

    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.post(api_url, payload)
    result = response.json()
    print(result)
except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error: {http_err}")
except Exception as err:
    print(f"Otro error: {err}")

