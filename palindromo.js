const esPalindromo = numero => {
    //Transformo el numero en texto y generar array con split , luego aplicar reverse en otro
    const arrayNumeroSeparado = numero.toString().split('');
    const arrayNumeroSeparadoInvertido = numero.toString().split('').reverse();

    //Uno los elementos del Array con Join para su comparacion.
    const numeroSeparado = Number(arrayNumeroSeparado.join(''));
    const numeroSeparadoInvertido = Number(arrayNumeroSeparadoInvertido.join(''));

    //si es palindromo retornar true, sino false
    if (numeroSeparado === numeroSeparadoInvertido) {
        return true;
    } else {
        return false;
    }
}

const generadorPalindromo = numero => {

    //Verificar si es palindromo ese numero
        if (esPalindromo(numero)) {
            console.log('es palindronomo');
            return numero
        } 
        //Buscar el primer palindromo a partir de ese numero
        else {
            while( !esPalindromo(numero)){
                numero++
            }
            return numero;
        }
}    

console.log(generadorPalindromo(986));