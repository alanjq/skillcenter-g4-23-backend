# Realizar peticiones a servicios web
# Peticiones GET
import requests

try:
    api_url='https://jsonplaceholder.typicode.com/todos/1'
    response = requests.get(api_url)
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error: {http_err}")
except Exception as err:
    print(f"Otro error: {err}")

