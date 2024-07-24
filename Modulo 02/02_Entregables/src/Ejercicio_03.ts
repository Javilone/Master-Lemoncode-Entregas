/* 
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
 */

const source: object = {
    name: "Javier",
    surname: "López", 
    age: 37,
    year: 1987,
    city: "Madrid",
    married: true
}

const target: object = {
    name: "Luisa",
    age: 31,
    profession: "sales advisor",
    car: true,
    married: false,
    year: 1995
};

const clone = (source: object): object => {
    return { ...source };
}

const clonedObject = clone(source);

console.log(clonedObject);
console.log(clonedObject == source);


/* 
Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con 
todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
*/

const merge = (object1: object, object2: object) => {
    return { ...object2, ...object1 };

}

const mergedObject = merge(source, target);

console.log(mergedObject);