//Saber cuantas coincidencias contiguas del segundo string ingresado se encuentran en el primer string ingresado

const ocurrencias = (s0, s1) => {

    let coincidencias = 0;

    s0 = s0.trim();

    for (let i = 0; i < s0.length; i++) {
        if (s0.indexOf(s1) !== -1) {
            s0.slice(s0.indexOf(s1),1);
            coincidencias++
            //deberia remplazar en s0 el match de s0.indexOf(s1)
            console.log(s0);
        }
        
    }

    console.log(coincidencias);
}


ocurrencias('aba aba', 'aba');