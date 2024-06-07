import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        char operador;
        double num1, num2, resultado;

        // Obtener los valores
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingresa el operador que deseas(+, -, *, /)");

        // Asignar el valor ingresado a operador
        operador = entrada.next().charAt(0);

        System.out.println("Ingresa el primer número.");
        num1 = entrada.nextDouble();

        System.out.println("Ingresa el segundo número.");
        num2 = entrada.nextDouble();

        entrada.close();
        
        // Realizar la operación según el símbolo ingresado
        switch(operador){
            case '+':
                resultado = num1 + num2;
                System.out.println("El resultado es: " + resultado);
            break;

            case '-':
                resultado = num1 - num2;
                System.out.println("El resultado es: " + resultado);
            break;

            case '*':
                resultado = num1 * num2;
                System.out.println("El resultado es: " + resultado);
            break;

            case '/':
                resultado = num1 / num2;
                System.out.println("El resultado es: " + resultado);
            break;

            default:
                System.err.println("Operador inválido.");
        }
    }
}
