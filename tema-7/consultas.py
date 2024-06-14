import pymysql

try:
    conexion = pymysql.connect(host='localhost',user='root', password='password', db='employees')

    try:
        with conexion.cursor() as cursor:
            consulta = "SELECT * FROM departments"
            cursor.execute(consulta)

            # Traemos las filas
            departamentos = cursor.fetchall()

            # Recorrer e imprimir
            for puesto in departamentos:
                print(puesto)

    finally:
        conexion.close()

except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print("Ocurrió un error al conectar: ", e)



