/*
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/

const myArray : string[] = ["Me", "lo", "estoy", "pasando", "bien", "en", "el", "master", "🍋"];

const head = ([firstElement]: string[]): string => { 
    return firstElement;
};

console.log(head(myArray));


/* 
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
*/

const tail = ([first, ...others]: string[]) : string[] => {
    return others;
};

console.log(tail(myArray));


/* 
Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
*/

const init = (array : string[]) : string[] => {
    return array.slice(0, array.length - 1);
};

console.log(init(myArray));


/* 
Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
*/

const last = (array : string[]) : string => {
    return array[array.length - 1];
};
console.log(last(myArray));