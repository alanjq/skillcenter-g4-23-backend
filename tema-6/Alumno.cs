using Persona


class Alumno : Persona
{
    string matricula = "";

    // Constructor de clase
    public Alumno()
    {
        // No pide valores
    }

    public Alumno(string nombre, string apellido, string edad, string matricula)
    {
        this.nombre = this.setNombre(nombre);
        this.apellido = this.setApellido(apellido);
        this.edad = this.setEdad(edad);
        this.matricula = this.setMatricula(matricula);
    }

    public Alumno(string nombre, string matricula)
    {
        this.nombre = this.setNombre(nombre);
        this.matricula = this.setMatricula(matricula);
    }

    public setMatricula(newvalue)
    {
        // agregar validaciones
        this.matricula = newvalue;
    }

    public static void Main()
    {
        Persona p = new Persona();
        // Alumno a = new Alumno()
    }
}
