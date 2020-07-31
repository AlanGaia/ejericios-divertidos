const consultas = (maxElementos, itemsConsultados) => {

    const maxCache = maxElementos;
    let arrayConsultas = [];

    let cacheSinCambios = 0;
    let maxTiempoCacheSinCambios = 0;
    

    for (let i = 0; i < itemsConsultados.length; i++) {

        //Si el elemento ya esta en cache
        if (arrayConsultas.includes(itemsConsultados[i])) {
            cacheSinCambios++
            if (maxTiempoCacheSinCambios < cacheSinCambios) {
                maxTiempoCacheSinCambios = cacheSinCambios;
            }

        } else {
            //si no esta el elemento y hay espacio
            if (!arrayConsultas.includes(itemsConsultados[i]) && maxCache > arrayConsultas.length ) {
                arrayConsultas.push(itemsConsultados[i]);
                cacheSinCambios++
                if (maxTiempoCacheSinCambios < cacheSinCambios) {
                    maxTiempoCacheSinCambios = cacheSinCambios;
                }

            }

            //Si no esta el elemento y no hay mas espacio en cache
             else {
                arrayConsultas.shift();
                if (maxTiempoCacheSinCambios < cacheSinCambios) {
                    maxTiempoCacheSinCambios = cacheSinCambios;
                }

                cacheSinCambios = 0;
                arrayConsultas.push(itemsConsultados[i]);
            }
        }


    }


    return maxTiempoCacheSinCambios;
}


consultas(3, [1,2,3,3,5,6,7,6,6,7]);

// ,2,4,2,3,3,4,2,1,2