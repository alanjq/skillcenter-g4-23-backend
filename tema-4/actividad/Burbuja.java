public class Burbuja {
    public int[] ordenamientoBurbuja(int[] arreglo){
        int auxiliar;
        int[] ordenado;

        // Recorrer el arreglo
        for(var i = 2; i < arreglo.length; i++){
            for(var j = 0; j < arreglo.length -i; j++){
                auxiliar = arreglo[j];
                // Toma la posición que sigue
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = auxiliar;
            }
        }
        ordenado = arreglo;
        return ordenado;
    }
}
