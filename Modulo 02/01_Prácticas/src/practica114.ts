// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

// Ejemplo:
// console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

export let myObject: {} = {
    "nombre": "Javier",
    "ciudad": "Madrid",
    "añoNacim": 1987,
    "carnet": "A",
    "vehiculo": true,
};

export function values(object : {} ) {
    return Object.values(object);
}
