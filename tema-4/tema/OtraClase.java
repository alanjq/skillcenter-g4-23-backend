public class OtraClase {
    public OtraClase(){

    }

    // Clase principal
    public static void main(String args[]){
        System.out.println("Saludos desde JAVA");

        // Instanciar una clase
        ClaseJava clase = new ClaseJava();
        int resultado = clase.sampleMethod(5);

        System.out.println("Resultado: " + resultado);

    }
}
