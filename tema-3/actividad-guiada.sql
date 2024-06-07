-- Seleccionar todos los datos de cada empleado
SELECT * FROM employees
SELECT emp_no, birth_date, first_name, last_name, gender, hire_date FROM employees

-- Seleccionar appellido de los empleados
SELECT last_name FROM employees

-- Seleccionar apellido, nombre y puesto
SELECT last_name, first_name, title FROM employees INNER JOIN titles ON employees.emp_no = titles.emp_no

-- Seleccionar apellido, nombre y puesto que sean Sales Rep
SELECT last_name, first_name, title FROM employees INNER JOIN titles ON employees.emp_no = titles.emp_no WHERE title LIKE "Sales Rep%"

-- Seleccionar empleados con código de oficina 1, 2 ó 3
SELECT e.last_name, e.first_name, t.title
FROM employees e
INNER JOIN titles t ON e.emp_no = t.emp_no
INNER JOIN dept_emp de ON de.emp_no = e.emp_no
INNER JOIN departments d ON d.dept_no = de.dept_no
WHERE d.dept_no
IN( 'd001','d002','d003')
OR t.`title` LIKE '%sales%'


-- Seleccionar empleados distinto a representante de ventas
SELECT e.last_name, e.first_name, t.title
FROM employees e
INNER JOIN titles t ON e.emp_no = t.emp_no
INNER JOIN dept_emp de ON de.emp_no = e.emp_no
INNER JOIN departments d ON d.dept_no = de.dept_no
WHERE d.dept_no
NOT IN( 'd001','d002','d003')
OR t.`title` NOT LIKE '%sales%'


-- Seleccionar empleados con oficina mayor a 5
SELECT e.last_name, e.first_name, t.title
FROM employees e
INNER JOIN titles t ON e.emp_no = t.emp_no
INNER JOIN dept_emp de ON de.emp_no = e.emp_no
INNER JOIN departments d ON d.dept_no = de.dept_no
WHERE d.dept_no IN ('d005', 'd006', 'd007', 'd008', 'd009')


-- Seleccionar empleados con oficina menor o igual a 4
SELECT e.last_name, e.first_name, t.title
FROM employees e
INNER JOIN titles t ON e.emp_no = t.emp_no
INNER JOIN dept_emp de ON de.emp_no = e.emp_no
INNER JOIN departments d ON d.dept_no = de.dept_no
WHERE d.dept_no IN ('d001', 'd002', 'd003', 'd004')

-- Seleccionar empleados con salarios entre 10mil y 40mil
SELECT e.last_name, e.first_name, t.title
FROM employees e
INNER JOIN titles t ON e.emp_no = t.emp_no
INNER JOIN dept_emp de ON de.emp_no = e.emp_no
INNER JOIN departments d ON d.dept_no = de.dept_no
INNER JOIN salaries s ON s.emp_no = e.emp_no
WHERE d.dept_no IN ('d001', 'd002', 'd003', 'd004')
AND s.salary BETWEEN 10000 and 40000


