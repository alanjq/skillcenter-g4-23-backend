import MySQLdb

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = 'password'
DB_NAME = 'employees'

db = MySQLdb.connect(host=DB_HOST, user=DB_USER, password=DB_PASS, db=DB_NAME)

def run_query(query = ''):
    # datos = [DB_HOST, DB_USER, DB_PASS, DB_NAME]

    # conn = MySQLdb.connect(*datos)
    cursor = db.cursor()
    cursor.execute(query)

    if(query.upper().startswith('SELECT')):
        data = cursor.fetchall()
    else:
        db.commit()
        data = None

    cursor.close()
    db.close()

    return data

run_query('SELECT * FROM employees LIMIT 20')
