semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

for dia in semana:
    print("Hoy es",dia)

# Agregar día
semana.insert(0,"domingo") # Agrega un elemento en la posición indicada
semana.pop(7) # Elimina un elemento de cierto índice
print("Semana",semana)