//Generar una funcion que retorne el tiempo maximo que podemos realizar consultas sin limpiar la caché
// la funcion recibe 2 parametros, Maxima cantidad de consultas que almacena en cache, y un listado de numeros
// Cada numero del listado representa un documento, si el documento no esta en cache deberia ser agregado siempre que:
// haya espacio en la memoria y ese documento no este en memoria cache.


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
