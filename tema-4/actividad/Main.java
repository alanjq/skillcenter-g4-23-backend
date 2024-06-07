
import java.util.Arrays;

public class Main {

    public static void main(String[] args){
        int[] numeros = {7, 5, 50, 100, 2, 4};
        System.out.println("Antes del método de la burbuja: " + Arrays.toString(numeros));

        Burbuja ordenador = new Burbuja();
        ordenador.ordenamientoBurbuja(numeros);

        System.out.println("Después del ordenamiento burbuja: " + Arrays.toString(numeros));
    }
}