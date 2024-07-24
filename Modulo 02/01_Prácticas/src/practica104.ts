// Implementa una función clone que devuelva un objeto clonado a partir de otro:

export let oldObject = {
    "nombre" : "Javi",
    "tareas" : "Estudiar",
}

export let newObject = clone(oldObject);

function clone(source : {}) {
    const cloned = { ...source };
    return cloned;
}

// Apartado B
// Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
// El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

const objectToMerge = {
    "Ciudad" : "Madrid",
    "Edad" : 31,
}

export const mergedObject = merge(oldObject, objectToMerge);

function merge(oldest : {} , newest : {} ) {
    const mergedObject = { ...oldest, ...newest };
    return mergedObject;
}