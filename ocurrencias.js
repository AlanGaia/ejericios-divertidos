const ocurrencias = (s0, s1) => {

    let coincidencias = 0;


    for (let i = 0; i < s0.length; i++) {
        if (s0.indexOf(s1) !== -1) {
            coincidencias++
            s0.replace(s0.charAt(i), '');
        }
        
    }

    console.log(coincidencias);
}

//Entiendo que esta mal resuelto, pero prefiero mostrar lo que pude hacer antes que nada.

ocurrencias('aba', 'aba');